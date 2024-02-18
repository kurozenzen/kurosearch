<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TagButton from '../button-tag/TagButton.svelte';
	import DetailedTag from '../tag-detailed/DetailedTag.svelte';
	import ShareButton from '../button-share/ShareButton.svelte';
	import { supportsUrlSharing } from '$lib/logic/feature-support';

	const dispatch = createEventDispatcher();

	export let tags: Array<kurosearch.ModifiedTag | kurosearch.Supertag>;
</script>

<ul>
	{#if tags.length > 0}
		{#each tags as tag}
			{#if 'description' in tag}
				<DetailedTag
					tag={{ name: tag.name, type: 'supertag', modifier: '+', count: tag.tags.length }}
					on:click={() => dispatch('click', tag)}
					on:contextmenu={() => dispatch('contextmenu', tag)}
					active
				/>
			{:else}
				<DetailedTag
					{tag}
					on:click={() => dispatch('click', tag)}
					on:contextmenu={() => dispatch('contextmenu', tag)}
					active
				/>
			{/if}
		{/each}
		{#if tags.length > 1}
			<TagButton
				title="Create a supertag from the current selection."
				on:click={() => dispatch('createSupertag', tags)}
			>
				<i class="codicon codicon-star-full" />
			</TagButton>
		{/if}
		{#if supportsUrlSharing()}
			<ShareButton />
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
