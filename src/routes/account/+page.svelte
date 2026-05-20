<script lang="ts">
	import '$lib/logic/firebase/firebase';

	import { resolve } from '$app/paths';
	import ConfirmDialog from '$lib/components/kurosearch/dialog-confirm/ConfirmDialog.svelte';
	import SettingsJsonView from '$lib/components/kurosearch/settings-json-view/SettingsJsonView.svelte';
	import Supertag from '$lib/components/kurosearch/supertag/Supertag.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { type IndexedPost } from '$lib/indexeddb/idb';
	import { loadFile, saveFile, type SettingsObject } from '$lib/logic/file-utils';
	import { getSettingsAndSupertags } from '$lib/logic/firebase/storage';
	import { migrateFirebaseStorageToDriveIfNeeded } from '$lib/logic/firebase/drive-migration';
	import { buildSettingsObject, queueDriveBackupSync } from '$lib/logic/firebase/drive-sync';
	import { getSettingsFromDriveBackup, loadDriveBackup } from '$lib/logic/firebase/drive-storage';
	import { signIn, signOut } from '$lib/logic/firebase/authentication';
	import { addHistory } from '$lib/logic/use/onpopstate';
	import blockedContent from '$lib/store/blocked-content-store';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';
	import firebaseLoggedIn from '$lib/store/firebase-login-store';
	import localstorageEnabled from '$lib/store/localstorage-enabled-store';
	import resultColumns from '$lib/store/result-columns-store';
	import { StoreKey } from '$lib/store/store-keys';
	import supertags from '$lib/store/supertags-store';
	import theme from '$lib/store/theme-store';
	import PageList from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import Preference from '$lib/components/pure/preference/Preference.svelte';

	const reset = () => {
		supertags.reset();
	};

	const getSettingsObject = (): SettingsObject =>
		buildSettingsObject($supertags, favouritePostsStore.getAll());

	const applySettingsObject = async (config: SettingsObject) => {
		$localstorageEnabled = config[StoreKey.LocalstorageEnabled];
		$theme = config[StoreKey.Theme];
		$blockedContent = config[StoreKey.BlockedContent];
		$resultColumns = config[StoreKey.ResultColumns];
		supertags.set(config[StoreKey.Supertags]);
		await favouritePostsStore.restoreAll(normalizeIndexedPosts(config[StoreKey.Favourites] ?? []));
	};

	const normalizeIndexedPosts = (posts: IndexedPost[]): IndexedPost[] =>
		posts.map((post) => ({
			...post,
			indexedAt: post.indexedAt ? new Date(post.indexedAt) : new Date()
		}));

	let cloudStatusMessage = $state<string | undefined>(undefined);
	let cloudErrorMessage = $state<string | undefined>(undefined);
	let localSettingsPreview = $state<string | undefined>(undefined);
	let firebaseSettingsPreview = $state<string | undefined>(undefined);
	let cloudSettingsPreview = $state<string | undefined>(undefined);
	let firebaseStatusMessage = $state<string | undefined>(undefined);
	let firebaseErrorMessage = $state<string | undefined>(undefined);

	const resetCloudMessages = () => {
		cloudStatusMessage = undefined;
		cloudErrorMessage = undefined;
	};

	const resetFirebaseMessages = () => {
		firebaseStatusMessage = undefined;
		firebaseErrorMessage = undefined;
	};

	const getErrorMessage = (error: unknown) => {
		if (error instanceof Error) {
			return error.message;
		}

		return 'Google Drive action failed. Please try again.';
	};

	const connectGoogle = async () => {
		resetCloudMessages();

		try {
			await signIn();
			cloudStatusMessage = 'Connected Firebase account.';
		} catch (error) {
			cloudErrorMessage = getErrorMessage(error);
		}
	};

	const disconnectGoogle = async () => {
		resetCloudMessages();

		try {
			await signOut();
			cloudStatusMessage = 'Signed out of Firebase account.';
		} catch (error) {
			cloudErrorMessage = getErrorMessage(error);
		}
	};

	const loadCloudBackup = async () => {
		resetCloudMessages();

		try {
			await migrateFirebaseStorageToDriveIfNeeded();

			const backup = await loadDriveBackup();
			if (!backup) {
				cloudStatusMessage = 'No cloud backup was found.';
				return;
			}

			const settings = getSettingsFromDriveBackup(backup);
			if (settings) {
				await applySettingsObject(settings);
			}

			cloudStatusMessage = 'Loaded backup from Google Drive.';
		} catch (error) {
			cloudErrorMessage = getErrorMessage(error);
		}
	};

	const saveCloudBackup = async () => {
		resetCloudMessages();

		try {
			await migrateFirebaseStorageToDriveIfNeeded();
			await queueDriveBackupSync($supertags, favouritePostsStore.getAll());
			cloudStatusMessage = 'Saved backup to Google Drive.';
		} catch (error) {
			cloudErrorMessage = getErrorMessage(error);
		}
	};

	const exportConfig = async () => {
		try {
			const config = getSettingsObject();
			const content = JSON.stringify(config, undefined, 2);
			await saveFile(content);
		} catch (err) {
			console.error(err);
		}
	};

	const importConfig = async () => {
		try {
			const content = await loadFile();
			const config = JSON.parse(content) as SettingsObject;
			await applySettingsObject(config);
		} catch (err) {
			console.error(err);
		}
	};

	const viewSettings = () => {
		localSettingsPreview = JSON.stringify(getSettingsObject(), undefined, 2);
	};

	const viewStoredSettings = async () => {
		resetCloudMessages();

		try {
			const backup = await loadDriveBackup();
			if (!backup) {
				cloudSettingsPreview = undefined;
				cloudStatusMessage = 'No stored Google Drive backup was found.';
				return;
			}

			cloudSettingsPreview = JSON.stringify(backup, undefined, 2);
			cloudStatusMessage = 'Loaded stored backup from Google Drive.';
		} catch (error) {
			cloudErrorMessage = getErrorMessage(error);
		}
	};

	const viewFirebaseBackup = async () => {
		resetFirebaseMessages();

		try {
			const backup = await getSettingsAndSupertags();
			if (!backup.settings && (!backup.supertags || backup.supertags.length === 0)) {
				firebaseSettingsPreview = undefined;
				firebaseStatusMessage = 'No legacy Firebase backup was found.';
				return;
			}

			firebaseSettingsPreview = JSON.stringify(
				{
					preferences: backup.settings,
					supertags: backup.supertags ?? []
				},
				undefined,
				2
			);
			firebaseStatusMessage = 'Loaded legacy Firebase backup.';
		} catch (error) {
			firebaseErrorMessage = getErrorMessage(error);
		}
	};

	let cloudPullDialog = $state<HTMLDialogElement>(null!);
	let cloudPushDialog = $state<HTMLDialogElement>(null!);
	let resetDialog = $state<HTMLDialogElement>(null!);
</script>

<svelte:head>
	<title>kurosearch - Account</title>
	<meta name="description" content="All of your account data is available on this page." />
</svelte:head>

<PageList title="Account">
	<Preference
		title="Supertags"
		description="Supertags are groups of tags that you can create to organize your searches. Can be created from main search page."
	>
		{#if $supertags.items.length === 0}
			<p>
				You don't have any supertags yet. You can create them when you have more than one tag
				active.
			</p>
			<p>
				NOTE: If you had supertags before, please try signing in with Google below and loading them.
			</p>
		{/if}
		<ul>
			{#each $supertags.items as supertag}
				<Supertag
					{supertag}
					onremove={(supertag) => supertags.remove(supertag)}
					onedit={(oldName, newSupertag) => {
						supertags.update(oldName, newSupertag);
					}}
				/>
			{/each}
		</ul>
	</Preference>

	<Preference
		title="Import/Export Current Settings"
		description="Load and save preferences and supertags to and from a file."
	>
		<div class="button-row">
			<TextButton class="mixin-primary" title="Save your data to a file." onclick={exportConfig}>
				<span class="codicon codicon-file">Download Config File</span>
			</TextButton>
			<TextButton
				class="mixin-primary"
				title="Restore your settings from a config file."
				onclick={importConfig}
			>
				<span class="codicon codicon-file">Load Config File</span>
			</TextButton>
			<TextButton
				class="mixin-primary"
				title="View current settings as JSON."
				onclick={viewSettings}
			>
				<span class="codicon codicon-code">View Settings</span>
			</TextButton>
			<TextButton
				title="Delete all your data."
				class="mixin-accent"
				onclick={() => {
					resetDialog?.showModal();
					addHistory('dialog');
				}}
			>
				Reset Data
			</TextButton>
		</div>
		{#if localSettingsPreview}
			<SettingsJsonView
				jsonText={localSettingsPreview}
				fileName="kurosearch.config.json"
				onclose={() => {
					localSettingsPreview = undefined;
				}}
			/>
		{/if}
	</Preference>

	<Preference
		title="Google Drive Backup"
		description="Manually load and save preferences, supertags and favourites to Google Drive."
	>
		<div class="button-row">
			{#if $firebaseLoggedIn}
				<TextButton title="Sign out" class="mixin-primary" onclick={disconnectGoogle}>
					Sign Out
				</TextButton>
				<TextButton
					class="mixin-primary"
					title="Load Settings"
					onclick={() => {
						resetCloudMessages();
						cloudPullDialog?.showModal();
						addHistory('dialog');
					}}
				>
					<span class="codicon codicon-cloud-download">Load Settings</span>
				</TextButton>
				<TextButton
					class="mixin-primary"
					title="Save settings"
					onclick={() => {
						resetCloudMessages();
						cloudPushDialog?.showModal();
						addHistory('dialog');
					}}
				>
					<span class="codicon codicon-cloud-upload">Save Settings</span>
				</TextButton>
				<TextButton
					class="mixin-primary"
					title="View settings currently stored in Google Drive."
					onclick={viewStoredSettings}
				>
					<span class="codicon codicon-code">View Stored Settings</span>
				</TextButton>
			{:else}
				<TextButton title="Sign in with Google" class="mixin-accent" onclick={connectGoogle}>
					Login with Google
				</TextButton>
			{/if}
		</div>

		{#if cloudErrorMessage}
			<p class="cloud-error">{cloudErrorMessage}</p>
		{/if}
		{#if cloudStatusMessage}
			<p class="cloud-status">{cloudStatusMessage}</p>
		{/if}
		{#if cloudSettingsPreview}
			<SettingsJsonView
				jsonText={cloudSettingsPreview}
				fileName="kurosearch-appdata-v1.json"
				onclose={() => {
					cloudSettingsPreview = undefined;
				}}
			/>
		{/if}
	</Preference>

	<Preference title="Favourites" description="Your favourite posts.">
		<a href={resolve('/favourites')}> View Favourites</a>
	</Preference>

	<Preference
		title="[LEGACY] Firebase Backup"
		description="View your old firebase backup. Useful if you need to migrate some things manually."
	>
		<div class="button-row">
			<TextButton
				class="mixin-primary"
				title="View settings currently stored in Firebase (legacy, may be empty if you have used Google Drive backup features)."
				onclick={viewFirebaseBackup}
				disabled={!$firebaseLoggedIn}
			>
				<span class="codicon codicon-code">View Firebase Backup</span>
			</TextButton>
		</div>
		{#if firebaseErrorMessage}
			<p class="cloud-error">{firebaseErrorMessage}</p>
		{/if}
		{#if firebaseStatusMessage}
			<p class="cloud-status">{firebaseStatusMessage}</p>
		{/if}
		{#if firebaseSettingsPreview}
			<SettingsJsonView
				jsonText={firebaseSettingsPreview}
				fileName="kurosearch-firebase-legacy-backup.json"
				onclose={() => {
					firebaseSettingsPreview = undefined;
				}}
			/>
		{/if}
	</Preference>
</PageList>

<ConfirmDialog
	bind:dialog={cloudPullDialog}
	title="Load Data"
	warning="This will replace all your current settings with settings saved online. Are you sure you want to do that?"
	labelConfirm="Yes, load settings."
	labelCancel="Cancel"
	onconfirm={loadCloudBackup}
/>

<ConfirmDialog
	bind:dialog={cloudPushDialog}
	title="Save data online"
	warning="This will save the current settings and supertags online. BUT it will also overwrite anything currently stored in the cloud. Are you sure you want to do this?"
	labelConfirm="Yes, backup online"
	labelCancel="Cancel"
	onconfirm={saveCloudBackup}
/>

<ConfirmDialog
	bind:dialog={resetDialog}
	title="Delete Data"
	warning="This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?"
	labelConfirm="Yes, delete it."
	labelCancel="Cancel"
	onconfirm={reset}
/>

<style>
	ul {
		width: 100%;
	}

	p {
		margin-block-end: var(--grid-gap);
	}

	.button-row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.codicon::before {
		vertical-align: text-bottom;
		margin-right: var(--small-gap);
	}

	.cloud-status {
		color: var(--foreground-2);
	}

	.cloud-error {
		color: var(--error);
	}
</style>
