<script lang="ts">
	import ConfirmDialog from '../dialog-confirm/ConfirmDialog.svelte';
	import EditSupertagDialog from '../dialog-edit-supertag/EditSupertagDialog.svelte';
	import ModifiedTag from '../modified-tag/ModifiedTag.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const emitRemove = () => dispatch('remove', supertag);

	const openDeleteDialog = () => (deleting = true);
	const closeDeleteDialog = () => (deleting = false);
	const openEditDialog = () => (editing = true);
	const closeEditDialog = () => (editing = false);

	export let supertag: kurosearch.Supertag;

	let deleting = false;
	let editing = false;
</script>

<li>
	<h3>{supertag.name}</h3>
	<small>{Object.keys(supertag.tags).length} tags</small>
	<button class="codicon codicon-edit" on:click={openEditDialog} />
	<button class="codicon codicon-close" on:click={openDeleteDialog} />
	<span>{supertag.description || supertag.name}</span>
	<ol>
		{#each supertag.tags as tag}
			<ModifiedTag {tag} />
		{/each}
	</ol>
</li>

{#if deleting}
	<ConfirmDialog
		title="Delete Supertag"
		warning="Are you sure? You will not be able to undo it."
		labelCancel="No, keep it!"
		labelConfirm="Yes, delete it."
		on:confirm={emitRemove}
		on:close={closeDeleteDialog}
	/>
{/if}

{#if editing}
	<EditSupertagDialog {supertag} on:close={closeEditDialog} on:edit />
{/if}

<style>
	li {
		display: grid;
		grid-template-columns: auto 1fr auto auto;
		gap: var(--small-gap);
		align-items: center;
		padding: var(--grid-gap) 0;
		border-radius: var(--border-radius);
		transition: color var(--default-transition-behaviour);
	}

	li:not(:first-of-type) {
		border-radius: 0 0 var(--border-radius) var(--border-radius);
		border-block-start: 1px solid var(--background-2);
	}

	h3 {
		font-weight: normal;
		font-size: var(--text-size-large);
		color: var(--text-highlight);
	}

	small {
		font-size: var(--text-size-small);
	}

	span {
		grid-area: 2/1/3/4;
	}

	ol {
		grid-area: 3/1/4/4;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	button {
		color: var(--text);
		background-color: unset;
		height: var(--line-height-small);
		width: var(--line-height-small);
		line-height: var(--line-height-small);
		border-radius: var(--line-height-small);
	}

	@media (hover: hover) {
		button:hover {
			color: var(--text-highlight);
		}
	}
</style>
