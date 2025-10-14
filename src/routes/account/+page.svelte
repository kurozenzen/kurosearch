<script lang="ts">
	import ConfirmDialog from '$lib/components/kurosearch/dialog-confirm/ConfirmDialog.svelte';
	import Supertag from '$lib/components/kurosearch/supertag/Supertag.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import TextButton from '$lib/components/pure/button/TextButton.svelte';
	import { loadFile, saveFile, type SettingsObject } from '$lib/logic/file-utils';
	import { addHistory } from '$lib/logic/use/onpopstate';
	import blockedContent from '$lib/store/blocked-content-store';
	import localstorageEnabled from '$lib/store/localstorage-enabled-store';
	import resultColumns from '$lib/store/result-columns-store';
	import { StoreKey } from '$lib/store/store-keys';
	import supertags from '$lib/store/supertags-store';
	import savedPosts from '$lib/store/saved-posts-store';
	import theme from '$lib/store/theme-store';
	import { APP_NAME } from '$lib/logic/app-config';

	const reset = () => {
		supertags.reset();
		savedPosts.reset();
	};

	const getSettingsObject = (): SettingsObject => ({
		[StoreKey.LocalstorageEnabled]: $localstorageEnabled,
		[StoreKey.Theme]: $theme,
		[StoreKey.BlockedContent]: $blockedContent,
		[StoreKey.ResultColumns]: $resultColumns,
		[StoreKey.Supertags]: $supertags,
		[StoreKey.SavedPosts]: $savedPosts
	});

	const applySettingsObject = (config: SettingsObject) => {
		$localstorageEnabled = config[StoreKey.LocalstorageEnabled];
		$theme = config[StoreKey.Theme];
		$blockedContent = config[StoreKey.BlockedContent];
		$resultColumns = config[StoreKey.ResultColumns];
		$supertags = config[StoreKey.Supertags];
		$savedPosts = config[StoreKey.SavedPosts];
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
			const config = JSON.parse(content);
			applySettingsObject(config);
		} catch (err) {
			console.error(err);
		}
	};

	let generatedCode: string = $state('');
	let inputCode: string = $state('');
	let isGenerating: boolean = $state(false);
	let isSubmitting: boolean = $state(false);
	let syncMessage: string = $state('');

	const generateCode = async () => {
		isGenerating = true;
		syncMessage = '';

		try {
			const config = getSettingsObject();
			const content = JSON.stringify(config, undefined, 2);
			const blob = new Blob([content], { type: 'application/json' });

			const response = await fetch('/api/sync', {
				method: 'POST',
				body: blob
			});

			if (!response.ok) {
				throw new Error('Failed to generate code');
			}

			const result = await response.json();
			generatedCode = result.code;
			syncMessage = `Code generated: ${generatedCode}. Valid for 5 minutes.`;
		} catch (error) {
			console.error('Error generating code:', error);
			syncMessage = 'Failed to generate code. Please try again.';
		} finally {
			isGenerating = false;
		}
	};

	const submitCode = async () => {
		if (!inputCode.trim()) {
			syncMessage = 'Please enter a code.';
			return;
		}

		isSubmitting = true;
		syncMessage = '';

		try {
			const response = await fetch(`/api/sync/${inputCode.trim()}`, {
				method: 'GET'
			});

			if (!response.ok) {
				if (response.status === 404) {
					throw new Error('Code not found or expired');
				}
				throw new Error('Failed to load config');
			}

			const configText = await response.text();
			const config = JSON.parse(configText);
			applySettingsObject(config);

			syncMessage = 'Configuration loaded successfully!';
			inputCode = '';
		} catch (error) {
			console.error('Error submitting code:', error);
			syncMessage =
				error instanceof Error ? error.message : 'Failed to load config. Please try again.';
		} finally {
			isSubmitting = false;
		}
	};

	let resetDialog: HTMLDialogElement = $state<HTMLDialogElement>() as HTMLDialogElement;
</script>

<svelte:head>
	<title>{APP_NAME} - Account</title>
	<meta name="description" content="All of your account data is available on this page." />
</svelte:head>

<article>
	<Heading1>Account</Heading1>
	<section>
		<Heading3>Supertags</Heading3>
		<div class="supertags">
			{#if $supertags.items.length === 0}
				<p>
					You don't have any supertags yet. You can create them when you have more than one tag
					active.
				</p>
				<p>
					NOTE: If you had supertags before, please try signing in with Google below and loading
					them.
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
		</div>
	</section>

	<section>
		<Heading3>Import/Export Data</Heading3>
		<p>Load and save preferences and supertags to and from a file.</p>
		<div class="button-row">
			<TextButton type="secondary" title="Save your data to a file." onclick={exportConfig}>
				<span class="codicon codicon-file">Download Config File</span>
			</TextButton>
			<TextButton
				type="secondary"
				title="Restore your settings from a config file."
				onclick={importConfig}
			>
				<span class="codicon codicon-file">Load Config File</span>
			</TextButton>
		</div>
	</section>

	<section>
		<Heading3>One-time Sync</Heading3>
		<p>Sync your config with a one-time code. Available during 5 minutes.</p>
		<div class="button-row">
			<TextButton title="Generate code" onclick={generateCode} disabled={isGenerating}>
				{isGenerating ? 'Generating...' : 'Generate your code'}
			</TextButton>
			<div>
				<input type="text" placeholder="Code" bind:value={inputCode} disabled={isSubmitting} />
				<button type="submit" onclick={submitCode} disabled={isSubmitting || !inputCode.trim()}>
					{isSubmitting ? 'Loading...' : 'Submit'}
				</button>
			</div>
		</div>
		{#if syncMessage}
			<p
				class="sync-message"
				class:error={syncMessage.includes('Failed') || syncMessage.includes('not found')}
			>
				{syncMessage}
			</p>
		{/if}
		{#if generatedCode}
			<div class="generated-code">
				<p><strong>Your code:</strong> {generatedCode}</p>
				<p class="code-note">
					Share this code with another device to sync your config. Valid for 5 minutes.
				</p>
			</div>
		{/if}
	</section>

	<section class="danger">
		<h2>Danger Zone</h2>
		<div class="button-row">
			<div class="danger-description">
				<h3>Delete Data</h3>
				<p>Delete all your saved posts and supertags permanently.</p>
			</div>
			<TextButton
				title="Delete all your data."
				onclick={() => {
					resetDialog?.showModal();
					addHistory('dialog');
				}}
				type="secondary"
			>
				Delete Data
			</TextButton>
		</div>
	</section>
</article>

<ConfirmDialog
	bind:dialog={resetDialog}
	title="Delete Data"
	warning="This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?"
	labelConfirm="Yes, delete it"
	labelCancel="Cancel"
	onconfirm={reset}
/>

<style lang="scss">
	article {
		padding-inline: 8px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 800px;
		margin-inline: auto;
	}

	p {
		margin-block-end: var(--grid-gap);
	}

	.codicon::before {
		margin-right: var(--tiny-gap);
	}

	.danger {
		background-color: rgba(255, 0, 0, 0.15);
		border-radius: var(--border-radius);
		border: 1px solid rgba(255, 0, 0, 0.25);
		padding: 8px;
		margin: 1rem 0;
	}

	.button-row {
		display: flex;
		flex-direction: row;
		place-content: space-between;
		place-items: center;
		border-top: 1px solid rgba(255, 0, 0, 0.2);
		margin-top: 0.5rem;
	}

	.danger-description {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.sync-message {
		margin-top: 0.5rem;
		padding: 0.5rem;
		border-radius: var(--border-radius);
		background-color: rgba(0, 255, 0, 0.1);
		border: 1px solid rgba(0, 255, 0, 0.3);

		&.error {
			background-color: rgba(255, 0, 0, 0.1);
			border-color: rgba(255, 0, 0, 0.3);
		}
	}

	.generated-code {
		margin-top: 1rem;
		padding: 1rem;
		background-color: var(--background-secondary);
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);

		.code-note {
			font-size: 0.9em;
			opacity: 0.8;
			margin-top: 0.5rem;
		}
	}
</style>
