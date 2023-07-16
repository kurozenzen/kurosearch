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

	let deleting = false;

	const reset = () => {
		supertags.reset();
	};

	const exportConfig = async () => {
		const config = {
			[StoreKey.LocalstorageEnabled]: $localstorageEnabled,
			[StoreKey.Theme]: $theme,
			[StoreKey.BlockedContent]: $blockedContent,
			[StoreKey.ResultColumns]: $resultColumns,
			[StoreKey.Supertags]: $supertags
		};

		try {
			const handle = await showSaveFilePicker({ suggestedName: 'kurosearch-config.json' });
			const writable = await handle.createWritable();
			const content = JSON.stringify(config, undefined, 2);
			await writable.write(content);
			await writable.close();
			return;
		} catch (err) {
			console.error(err);
		}
	};

	const importConfig = async () => {
		try {
			const [handle] = await showOpenFilePicker();
			const file = await handle.getFile();
			const content = await file.text();
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

<Heading1>Account</Heading1>

<div>
	<Heading3>Supertags</Heading3>
	<div class="supertags">
		{#if $supertags.items.length === 0}
			<span>
				You don't have any supertags yet. You can create them when you have more than one tag
				active.
			</span>
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

	<Heading3>Manage Data</Heading3>
	<div>
		<TextButton type="secondary" title="Save your data to a file." on:click={exportConfig}>
			Download Config File
		</TextButton>
		<TextButton
			type="secondary"
			title="Restore your settings from a config file."
			on:click={importConfig}
		>
			Load Config File
		</TextButton>
		<TextButton title="Delete all your data." on:click={() => (deleting = true)}>
			Delete Data
		</TextButton>
	</div>
</div>

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
