<script lang="ts">
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import TextInput from '$lib/components/pure/text-input/TextInput.svelte';
	import { createEventDispatcher } from 'svelte';
	import Searchbar from '../searchbar/Searchbar.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import ModifiedTag from '../modified-tag/ModifiedTag.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';

	const dispatch = createEventDispatcher();
	const emitEdit = () => dispatch('edit', { oldName: supertag.name, newSupertag });
	const emitClose = () => dispatch('close');

	export let supertag: kurosearch.Supertag;

	let newSupertag = { ...supertag, tags: [...supertag.tags] };
</script>

<Dialog on:close>
	<div>
		<h3>Edit Supertag</h3>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<span>Name</span>
		<TextInput bind:value={newSupertag.name} placeholder="Name" autocomplete="false" />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<span>Description</span>
		<TextInput
			bind:value={newSupertag.description}
			placeholder="Description"
			autocomplete="false"
		/>

		<span>Add or remove tags</span>
		<Searchbar
			fetchSuggestions={getTagSuggestions}
			on:pick={(e) => {
				newSupertag.tags = [
					...newSupertag.tags,
					{ modifier: e.detail.modifier, name: e.detail.name }
				];
			}}
		/>
		<ul>
			{#each newSupertag.tags as tag, i}
				<ModifiedTag
					{tag}
					on:click={() => {
						newSupertag.tags.splice(i, 1);
						newSupertag.tags = [...newSupertag.tags];
					}}
				/>
			{/each}
		</ul>
		<TextButton
			title="Save changes"
			on:click={() => {
				emitEdit();
				emitClose();
			}}
		>
			Save
		</TextButton>
		<TextButton type="secondary" title="Cancel" on:click={emitClose}>Cancel</TextButton>
	</div>
</Dialog>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	span {
		font-size: var(--text-size-small);
		margin-block-end: -0.75rem;
	}

	ul {
		min-height: 24px;
		display: flex;
		flex-wrap: wrap;
		gap: var(--small-gap);
		justify-content: center;
	}
</style>
