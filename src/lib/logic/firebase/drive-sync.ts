import { browser } from '$app/environment';
import { type IndexedPost } from '$lib/indexeddb/idb';
import type { SettingsObject } from '$lib/logic/file-utils';
import { migrateFirebaseStorageToDriveIfNeeded } from '$lib/logic/firebase/drive-migration';
import { saveDriveBackup } from '$lib/logic/firebase/drive-storage';
import blockedContent from '$lib/store/blocked-content-store';
import localstorageEnabled from '$lib/store/localstorage-enabled-store';
import resultColumns from '$lib/store/result-columns-store';
import { StoreKey } from '$lib/store/store-keys';
import type { SupertagsStore } from '$lib/store/supertags-store';
import theme from '$lib/store/theme-store';
import { get } from 'svelte/store';
import { getAuth } from 'firebase/auth';

let queuedSync = Promise.resolve();

export const buildSettingsObject = (
	supertags: SupertagsStore,
	favourites: IndexedPost[]
): SettingsObject => ({
	[StoreKey.BackupTimestamp]: new Date().toISOString(),
	[StoreKey.LocalstorageEnabled]: get(localstorageEnabled),
	[StoreKey.Theme]: get(theme),
	[StoreKey.BlockedContent]: get(blockedContent),
	[StoreKey.ResultColumns]: get(resultColumns),
	[StoreKey.Supertags]: structuredClone(supertags),
	[StoreKey.Favourites]: structuredClone(favourites)
});

export const queueDriveBackupSync = (supertags: SupertagsStore, favourites: IndexedPost[]) => {
	if (!browser || !getAuth().currentUser) {
		return queuedSync;
	}

	queuedSync = queuedSync
		.catch(() => undefined)
		.then(async () => {
			await migrateFirebaseStorageToDriveIfNeeded();
			await saveDriveBackup(buildSettingsObject(supertags, favourites));
		})
		.catch((error) => {
			console.warn('Failed to sync Drive backup:', error);
			throw error;
		});

	return queuedSync;
};
