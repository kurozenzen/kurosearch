<script lang="ts">
	import Supertag from '$lib/components/kurosearch/supertag/Supertag.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import supertags from '$lib/store/supertags-store';
	import blockedContent from '$lib/store/blocked-content-store';
	import localstorageEnabled from '$lib/store/localstorage-enabled-store';
	import theme from '$lib/store/theme-store';
	import resultColumns from '$lib/store/result-columns-store';
	import { StoreKey } from '$lib/store/store-keys';
	import ConfirmDialog from '$lib/components/kurosearch/dialog-confirm/ConfirmDialog.svelte';
	import '$lib/logic/firebase/firebase';
	import { signOut, signIn, loggedIn } from '$lib/logic/firebase/authentication';
	import { getSettingsAndSupertags, saveSettingsAndSupertags } from '$lib/logic/firebase/storage';
	import firebaseLoggedIn from '$lib/store/firebase-login-store';

	let deleting = false;
	let pullingFromCloud = false;
	let pushingToCloud = false;

	const reset = () => {
		supertags.reset();
	};

	const getSettingsObject = () => ({
		[StoreKey.LocalstorageEnabled]: $localstorageEnabled,
		[StoreKey.Theme]: $theme,
		[StoreKey.BlockedContent]: $blockedContent,
		[StoreKey.ResultColumns]: $resultColumns,
		[StoreKey.Supertags]: $supertags
	});

	const exportConfig = async () => {
		const config = getSettingsObject();

		try {
			const content = JSON.stringify(config, undefined, 2);
			const filename = 'kurosearch-config.json';
			if ('showSaveFilePicker' in window) {
				// @ts-expect-error - too new i guess
				const handle = await showSaveFilePicker({ suggestedName: filename });
				const writable = await handle.createWritable();
				await writable.write(content);
				await writable.close();
			} else {
				const link = document.createElement('a');
				const file = new Blob([content], { type: 'text/plain' });
				link.href = URL.createObjectURL(file);
				link.download = filename;
				link.click();
				URL.revokeObjectURL(link.href);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const getFileContent = async (): Promise<string> =>
		new Promise(async (resolve, reject) => {
			try {
				if ('showOpenFilePicker' in window) {
					// @ts-expect-error - too new i guess
					const [handle] = await showOpenFilePicker();
					const file = await handle.getFile();
					resolve(await file.text());
				} else {
					let fileInput: HTMLInputElement;
					const readFile = (e: any) => {
						var file = e.target.files[0];
						if (!file) {
							return;
						}
						var reader = new FileReader();
						reader.onload = (e: any) => {
							resolve(e.target.result);
							document.body.removeChild(fileInput);
						};
						reader.readAsText(file);
					};
					fileInput = document.createElement('input');
					fileInput.type = 'file';
					fileInput.style.display = 'none';
					fileInput.onchange = readFile;
					document.body.appendChild(fileInput);
					fileInput.click();
				}
			} catch (error) {
				reject(error);
			}
		});

	const importConfig = async () => {
		try {
			const content = await getFileContent();
			const config = JSON.parse(content);

			$localstorageEnabled = config[StoreKey.LocalstorageEnabled];
			$theme = config[StoreKey.Theme];
			$blockedContent = config[StoreKey.BlockedContent];
			$resultColumns = config[StoreKey.ResultColumns];
			$supertags = config[StoreKey.Supertags];
		} catch (err) {
			console.error(err);
		}
	};
</script>

<svelte:head>
	<title>kurosearch - Account</title>
</svelte:head>

<section>
	<Heading1>Account</Heading1>
	<Heading3>Supertags</Heading3>
	<div class="supertags">
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
					on:remove={(ev) => supertags.remove(ev.detail)}
					on:edit={(ev) => {
						console.log(ev);
						supertags.update(ev.detail.oldName, ev.detail.newSupertag);
					}}
				/>
			{/each}
		</ul>
	</div>

	<Heading3>Import/Export Data</Heading3>
	<p>Load and save preferences and supertags to and from a file.</p>
	<div class="button-row">
		<TextButton type="secondary" title="Save your data to a file." on:click={exportConfig}>
			<span class="codicon codicon-file">Download Config File</span>
		</TextButton>
		<TextButton
			type="secondary"
			title="Restore your settings from a config file."
			on:click={importConfig}
		>
			<span class="codicon codicon-file">Load Config File</span>
		</TextButton>
	</div>

	<Heading3>Google Account Syncing</Heading3>
	<p>Load and save preferences and supertags to and from Google.</p>
	<div class="button-row">
		{#if $firebaseLoggedIn}
			<TextButton
				type="secondary"
				title="Save your data to a file."
				on:click={() => (pullingFromCloud = true)}
			>
				<span class="codicon codicon-cloud">Load Config</span>
			</TextButton>
			<TextButton
				type="secondary"
				title="Restore your settings from a config file."
				on:click={() => (pushingToCloud = true)}
			>
				<span class="codicon codicon-cloud">Save config</span>
			</TextButton>
			<TextButton title="Sign out" on:click={() => signOut()}>Sign Out</TextButton>
		{:else}
			<TextButton title="Sign in with google to backup data" on:click={() => signIn()}>
				Connect Google User
			</TextButton>
		{/if}
	</div>

	<Heading3>Delete Data</Heading3>
	<TextButton title="Delete all your data." on:click={() => (deleting = true)}>
		Delete Data
	</TextButton>
</section>

{#if pullingFromCloud}
	<ConfirmDialog
		title="Load Data"
		warning="This will replace all your current settings with settings save online. Are you sure you want to do that?"
		labelConfirm="Yes, load settings."
		labelCancel="Cancel"
		on:confirm={async () => {
			const backup = await getSettingsAndSupertags();

			if (backup.settings) {
				if (backup.settings[StoreKey.LocalstorageEnabled]) {
					$localstorageEnabled = backup.settings[StoreKey.LocalstorageEnabled];
				}
				if (backup.settings[StoreKey.Theme]) {
					$theme = backup.settings[StoreKey.Theme];
				}
				if (backup.settings[StoreKey.BlockedContent]) {
					$blockedContent = backup.settings[StoreKey.BlockedContent];
				}
				if (backup.settings[StoreKey.ResultColumns]) {
					$resultColumns = backup.settings[StoreKey.ResultColumns];
				}
				if (backup.settings[StoreKey.Supertags]) {
					$supertags = backup.settings[StoreKey.Supertags];
				}
			}

			if (backup.supertags) {
				$supertags.items = backup.supertags;
			}
		}}
		on:close={() => (pullingFromCloud = false)}
	/>
{/if}

{#if pushingToCloud}
	<ConfirmDialog
		title="Save data online"
		warning="This will save the current settings and supertags online. BUT it will also overwrite anything currently stored in the cloud. Are you sure you want to do this?"
		labelConfirm="Yes, backup online"
		labelCancel="Cancel"
		on:confirm={async () => {
			await saveSettingsAndSupertags(getSettingsObject(), $supertags.items);
		}}
		on:close={() => (pushingToCloud = false)}
	/>
{/if}

{#if deleting}
	<ConfirmDialog
		title="Delete Data"
		warning="This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?"
		labelConfirm="Yes, delete it."
		labelCancel="Cancel"
		on:confirm={reset}
		on:close={() => (deleting = false)}
	/>
{/if}

<style>
	section {
		padding-inline: 8px;
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
		margin-right: 4px;
	}
</style>
