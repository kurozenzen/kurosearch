import { browser } from '$app/environment';
import type { IndexedPost } from '$lib/indexeddb/idb';
import type { SettingsObject } from '$lib/logic/file-utils';
import { migrateFirebaseStorageToDriveIfNeeded } from '$lib/logic/firebase/drive-migration';
import { getSettingsFromDriveBackup, loadDriveBackup } from '$lib/logic/firebase/drive-storage';
import blockedContent from '$lib/store/blocked-content-store';
import { favouritePostsStore } from '$lib/store/favourite-posts-store';
import localstorageEnabled from '$lib/store/localstorage-enabled-store';
import resultColumns from '$lib/store/result-columns-store';
import { StoreKey } from '$lib/store/store-keys';
import supertags from '$lib/store/supertags-store';
import theme from '$lib/store/theme-store';
import { getAuth } from 'firebase/auth';

let restoredUid: string | undefined;
let restorePromise: Promise<boolean> | undefined;

interface RestoreDriveBackupOptions {
	force?: boolean;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
	typeof value === 'object' && value !== null;

const applySettingsObject = async (config: SettingsObject) => {
	const localstorage = config[StoreKey.LocalstorageEnabled];
	if (typeof localstorage === 'boolean') {
		localstorageEnabled.set(localstorage);
	}

	const selectedTheme = config[StoreKey.Theme];
	if (typeof selectedTheme === 'string') {
		theme.set(selectedTheme);
	}

	const blocked = config[StoreKey.BlockedContent];
	if (isRecord(blocked)) {
		blockedContent.set(blocked as Record<kurosearch.BlockingGroup, boolean>);
	}

	const columns = config[StoreKey.ResultColumns];
	if (typeof columns === 'string') {
		resultColumns.set(columns);
	}

	const supertagState = config[StoreKey.Supertags];
	if (isRecord(supertagState) && Array.isArray(supertagState.items)) {
		supertags.set({ items: supertagState.items as kurosearch.Supertag[] });
	}

	await favouritePostsStore.restoreAll(normalizeIndexedPosts(config[StoreKey.Favourites] ?? []));
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
