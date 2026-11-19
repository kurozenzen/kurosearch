import { browser } from '$app/environment';
import { type IndexedPost } from '$lib/indexeddb/idb';
import type { SettingsObject } from '$lib/logic/file-utils';
import { migrateFirebaseStorageToDriveIfNeeded } from '$lib/logic/firebase/drive-migration';
import { saveDriveBackup } from '$lib/logic/firebase/drive-storage';
import { blockedContent, resultColumns, theme } from '$lib/store';
import { semiPersistentStorage } from '$lib/store/generic/storage-semi.svelte';
import { StorageKey } from '$lib/store/storage-keys';
import { getAuth } from 'firebase/auth';

let queuedSync = Promise.resolve();

export const buildSettingsObject = (
	supertags: kurosearch.Supertag[],
	favourites: IndexedPost[]
): SettingsObject => ({
	[StorageKey.BackupTimestamp]: new Date().toISOString(),
	[StorageKey.LocalStorageEnabled]: semiPersistentStorage.localStorageEnabled,
	[StorageKey.Theme]: theme.value,
	[StorageKey.BlockedContent]: blockedContent.value,
	[StorageKey.ResultColumns]: `${resultColumns.value}`,
	[StorageKey.Supertags]: { items: structuredClone(supertags) },
	[StorageKey.Favourites]: structuredClone(favourites)
});

export const queueDriveBackupSync = (
	supertags: kurosearch.Supertag[],
	favourites: IndexedPost[]
) => {
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
