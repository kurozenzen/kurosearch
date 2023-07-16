<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TagButton from '../tag-button/TagButton.svelte';
	import DetailedTag from '../tag/DetailedTag.svelte';

	const dispatch = createEventDispatcher();

	export let tags: kurosearch.ActiveTag[];
</script>

<ul>
	{#if tags.length > 0}
		{#each tags as tag}
			<DetailedTag
				{tag}
				on:click={() => dispatch('click', tag)}
				on:contextmenu={() => dispatch('contextmenu', tag)}
				active
			/>
		{/each}
		{#if tags.length > 1}
			<TagButton
				icon="codicon codicon-star-full"
				title="Create a supertag from the current selection."
				on:click={() => dispatch('createSupertag', tags)}
			/>
		{/if}
	{/if}
</ul>

<style>
	ul {
		min-height: var(--line-height-small);
		display: flex;
		flex-wrap: wrap;
		gap: var(--small-gap);
		justify-content: center;
	}
</style>
