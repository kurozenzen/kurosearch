import { browser } from '$app/environment';
import type { IndexedPost } from '$lib/indexeddb/idb';
import type { SettingsObject } from '$lib/logic/file-utils';
import { migrateFirebaseStorageToDriveIfNeeded } from '$lib/logic/firebase/drive-migration';
import { getSettingsFromDriveBackup, loadDriveBackup } from '$lib/logic/firebase/drive-storage';
import { blockedContent, resultColumns, theme } from '$lib/store';
import { favouritePostsStore } from '$lib/store/favourite-posts.state.svelte';
import { semiPersistentStorage } from '$lib/store/generic/storage-semi.svelte';
import { parseNumber } from '$lib/store/persistent.state.svelte';
import { StorageKey } from '$lib/store/storage-keys';
import supertags from '$lib/store/supertags-store';
import { getAuth } from 'firebase/auth';

let restoredUid: string | undefined;
let restorePromise: Promise<boolean> | undefined;

interface RestoreDriveBackupOptions {
	force?: boolean;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
	typeof value === 'object' && value !== null;

const applySettingsObject = async (config: SettingsObject) => {
	const localstorage = config[StorageKey.LocalStorageEnabled];
	if (typeof localstorage === 'boolean') {
		semiPersistentStorage.localStorageEnabled = localstorage;
	}

	const selectedTheme = config[StorageKey.Theme];
	if (typeof selectedTheme === 'string') {
		theme.value = selectedTheme;
	}

	const blocked = config[StorageKey.BlockedContent];
	if (isRecord(blocked)) {
		blockedContent.value = blocked as Record<kurosearch.BlockingGroup, boolean>;
	}

	const columns = config[StorageKey.ResultColumns];
	if (typeof columns === 'string') {
		resultColumns.value = typeof columns === 'number' ? columns : parseNumber(columns);
	}

	const supertagState = config[StorageKey.Supertags];
	if (isRecord(supertagState) && Array.isArray(supertagState.items)) {
		supertags.set({ items: supertagState.items as kurosearch.Supertag[] });
	}

	await favouritePostsStore.restoreAll(normalizeIndexedPosts(config[StorageKey.Favourites] ?? []));
};

const normalizeIndexedPosts = (posts: IndexedPost[]): IndexedPost[] =>
	posts.map((post) => ({
		...post,
		indexedAt: post.indexedAt ? new Date(post.indexedAt) : new Date()
	}));

export const restoreDriveBackupForAuthenticatedUser = async ({
	force = false
}: RestoreDriveBackupOptions = {}) => {
	if (!browser) {
		return false;
	}

	const user = getAuth().currentUser;
	if (!user) {
		restoredUid = undefined;
		return false;
	}

	if (!force && restoredUid === user.uid) {
		return false;
	}

	if (!restorePromise) {
		restorePromise = (async () => {
			await migrateFirebaseStorageToDriveIfNeeded();

			const backup = await loadDriveBackup();
			if (!backup) {
				restoredUid = user.uid;
				return false;
			}

			const settings = getSettingsFromDriveBackup(backup);
			if (settings) {
				await applySettingsObject(settings);
			}

			restoredUid = user.uid;
			return true;
		})()
			.catch((error) => {
				console.warn('Failed to restore Google Drive backup for user:', error);
				return false;
			})
			.finally(() => {
				restorePromise = undefined;
			});
	}

	return restorePromise;
};
