import { type IndexedPost } from '$lib/indexeddb/idb';
import type { SettingsObject } from '$lib/logic/file-utils';
import { ensureGoogleAccessToken } from '$lib/logic/firebase/authentication';
import { getGapi, setupGoogleDriveAtPageLoad } from '$lib/logic/firebase/drive';
import { StoreKey } from '$lib/store/store-keys';

const APPDATA_FILE_NAME = 'kurosearch-appdata-v1.json';

type LegacyDriveBackupData = {
	preferences?: SettingsObject;
	supertags?: kurosearch.Supertag[];
	favourites?: IndexedPost[];
};

export type DriveBackupData = Partial<SettingsObject>;

const hasOwn = (value: unknown, key: string) =>
	typeof value === 'object' && value !== null && Object.prototype.hasOwnProperty.call(value, key);

export const getSettingsFromDriveBackup = (backup: unknown): SettingsObject | undefined => {
	if (hasOwn(backup, 'preferences')) {
		const legacy = backup as LegacyDriveBackupData;
		if (!legacy.preferences) {
			return undefined;
		}

		return {
			...legacy.preferences,
			[StoreKey.Supertags]:
				legacy.preferences[StoreKey.Supertags] ?? { items: legacy.supertags ?? [] },
			[StoreKey.Favourites]: legacy.favourites ?? legacy.preferences[StoreKey.Favourites] ?? []
		};
	}

	if (
		hasOwn(backup, StoreKey.LocalstorageEnabled) &&
		hasOwn(backup, StoreKey.Theme) &&
		hasOwn(backup, StoreKey.BlockedContent) &&
		hasOwn(backup, StoreKey.ResultColumns) &&
		hasOwn(backup, StoreKey.Supertags) &&
		hasOwn(backup, StoreKey.Favourites)
	) {
		return {
			[StoreKey.BackupTimestamp]: (backup as SettingsObject)[StoreKey.BackupTimestamp],
			[StoreKey.LocalstorageEnabled]: (backup as SettingsObject)[StoreKey.LocalstorageEnabled],
			[StoreKey.Theme]: (backup as SettingsObject)[StoreKey.Theme],
			[StoreKey.BlockedContent]: (backup as SettingsObject)[StoreKey.BlockedContent],
			[StoreKey.ResultColumns]: (backup as SettingsObject)[StoreKey.ResultColumns],
			[StoreKey.Supertags]: (backup as SettingsObject)[StoreKey.Supertags],
			[StoreKey.Favourites]: (backup as SettingsObject)[StoreKey.Favourites]
		};
	}

	return undefined;
};

const toTextBody = (body: unknown) => {
	if (typeof body === 'string') {
		return body;
	}

	return JSON.stringify(body ?? {});
};

const buildMultipartRequestBody = (metadata: Record<string, unknown>, body: string, boundary: string) => {
	const delimiter = `\r\n--${boundary}\r\n`;
	const closeDelimiter = `\r\n--${boundary}--`;

	return (
		delimiter +
		'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
		JSON.stringify(metadata) +
		delimiter +
		'Content-Type: application/json\r\n\r\n' +
		body +
		closeDelimiter
	);
};

const ensureDriveClientWithToken = async () => {
	await setupGoogleDriveAtPageLoad();
	const accessToken = await ensureGoogleAccessToken({ allowInteractivePrompt: false });
	if (!accessToken) {
		throw new Error('Google Drive authorization is required. Please connect your Google account again.');
	}
	const gapi = await getGapi();
	gapi.client.setToken({ access_token: accessToken });

	return gapi;
};

const findBackupFileId = async (): Promise<string | undefined> => {
	const gapi = await ensureDriveClientWithToken();

	const response = await gapi.client.drive.files.list({
		spaces: 'appDataFolder',
		q: `name='${APPDATA_FILE_NAME}' and trashed=false`,
		fields: 'files(id,name)',
		pageSize: 1
	});

	const files = (response.result.files ?? []) as Array<{ id?: string }>;
	return files[0]?.id;
};

export const loadDriveBackup = async (): Promise<DriveBackupData | undefined> => {
	const fileId = await findBackupFileId();
	if (!fileId) {
		return undefined;
	}

	const gapi = await ensureDriveClientWithToken();
	const response = await gapi.client.drive.files.get({ fileId, alt: 'media' });
	const body = toTextBody(response.body ?? response.result);

	if (!body) {
		return undefined;
	}

	try {
		return JSON.parse(body) as DriveBackupData;
	} catch {
		throw new Error('Google Drive backup is not valid JSON.');
	}
};

export const saveDriveBackup = async (backup: SettingsObject) => {
	const gapi = await ensureDriveClientWithToken();

	const fileId = await findBackupFileId();
	const boundary = 'kurosearch-appdata-boundary';
	const mediaBody = JSON.stringify(backup);
	const token = gapi.client.getToken()?.access_token;

	if (!token) {
		throw new Error('Google Drive token missing');
	}

	const upload = async (method: 'POST' | 'PATCH', targetFileId?: string) => {
		const metadata =
			method === 'POST'
				? { name: APPDATA_FILE_NAME, parents: ['appDataFolder'] }
				: { name: APPDATA_FILE_NAME };
		const uploadUrl = targetFileId
			? `https://www.googleapis.com/upload/drive/v3/files/${targetFileId}?uploadType=multipart`
			: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';

		return fetch(uploadUrl, {
			method,
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': `multipart/related; boundary=${boundary}`
			},
			body: buildMultipartRequestBody(metadata, mediaBody, boundary)
		});
	};

	let response = fileId ? await upload('PATCH', fileId) : await upload('POST');

	if (fileId && (response.status === 403 || response.status === 404)) {
		response = await upload('POST');
	}

	if (!response.ok) {
		const responseBody = await response.text().catch(() => '');
		throw new Error(
			`Google Drive upload failed with status ${response.status}${responseBody ? `: ${responseBody}` : ''}`
		);
	}
};
