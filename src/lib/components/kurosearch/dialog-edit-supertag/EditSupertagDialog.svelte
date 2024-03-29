<script lang="ts">
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import TextInput from '$lib/components/pure/input-text/TextInput.svelte';
	import { createEventDispatcher } from 'svelte';
	import Searchbar from '../searchbar/Searchbar.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import ModifiedTag from '../tag-modified/ModifiedTag.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { nextModifier } from '$lib/logic/modifier-utils';

	export let dialog: HTMLDialogElement;
	export let supertag: kurosearch.Supertag;

	const dispatch = createEventDispatcher();
	const emitEdit = () => dispatch('edit', { oldName: supertag.name, newSupertag });

	let newSupertag = { ...supertag, tags: [...supertag.tags] };
</script>

<Dialog bind:dialog on:close>
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
			placeholder="Search for tags"
			fetchSuggestions={getTagSuggestions}
			on:pick={(e) => {
				newSupertag.tags = [
					...newSupertag.tags,
					{ modifier: e.detail.modifier, name: e.detail.label }
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
					on:contextmenu={() => {
						newSupertag.tags[i].modifier = nextModifier(tag.modifier);
					}}
				/>
			{/each}
		</ul>
		<TextButton
			title="Save changes"
			on:click={() => {
				emitEdit();
				dialog.close();
			}}
		>
			Save
		</TextButton>
		<TextButton type="secondary" title="Cancel" on:click={() => dialog.close()}>Cancel</TextButton>
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
