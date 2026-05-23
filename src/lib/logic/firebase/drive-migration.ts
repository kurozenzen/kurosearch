import { browser } from '$app/environment';
import { getAllFavouritePosts } from '$lib/indexeddb/idb';
import type { SettingsObject } from '$lib/logic/file-utils';
import { getSettingsAndSupertags } from '$lib/logic/firebase/storage';
import { getSettingsFromDriveBackup, loadDriveBackup, saveDriveBackup } from '$lib/logic/firebase/drive-storage';
import { StoreKey } from '$lib/store/store-keys';
import { getAuth } from 'firebase/auth';

const MIGRATION_VERSION = 1;

const getMigrationKey = (uid: string) => `kurosearch:drive-migration:v${MIGRATION_VERSION}:${uid}`;

export const migrateFirebaseStorageToDriveIfNeeded = async () => {
	if (!browser) {
		return false;
	}

	const user = getAuth().currentUser;
	if (!user) {
		return false;
	}

	const migrationKey = getMigrationKey(user.uid);
	if (localStorage.getItem(migrationKey) === 'done') {
		return false;
	}

	const existingBackup = await loadDriveBackup();
	if (existingBackup && getSettingsFromDriveBackup(existingBackup)) {
		localStorage.setItem(migrationKey, 'done');
		return false;
	}

	const legacyBackup = await getSettingsAndSupertags();
	const favourites = await getAllFavouritePosts();
	const hasLegacySettings = !!legacyBackup.settings;
	const hasLegacySupertags = !!legacyBackup.supertags && legacyBackup.supertags.length > 0;
	const hasFavourites = favourites.length > 0;

	if (!hasLegacySettings && !hasLegacySupertags && !hasFavourites) {
		localStorage.setItem(migrationKey, 'done');
		return false;
	}

	const settings = structuredClone(legacyBackup.settings ?? {}) as Partial<SettingsObject>;
	if (!settings[StoreKey.Supertags]) {
		settings[StoreKey.Supertags] = { items: legacyBackup.supertags ?? [] };
	}
	settings[StoreKey.Favourites] = favourites;

	await saveDriveBackup(settings as SettingsObject);

	localStorage.setItem(migrationKey, 'done');
	return true;
};