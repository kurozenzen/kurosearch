<script lang="ts">
	import TagButton from '../button-tag/TagButton.svelte';
	import DetailedTag from '../tag-detailed/DetailedTag.svelte';
	import ShareButton from '../button-share/ShareButton.svelte';
	import { supportsUrlSharing } from '$lib/logic/feature-support';

	interface Props {
		tags: Array<kurosearch.ModifiedTag | kurosearch.Supertag>;
		oncontextmenu: (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => void;
		onclick: (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => void;
		oncreateSupertag?: (tags: Array<kurosearch.ModifiedTag | kurosearch.Supertag>) => void;
	}

	let { tags, oncontextmenu, onclick, oncreateSupertag: createSupertag }: Props = $props();
</script>

<ul>
	{#if tags.length > 0}
		{#each tags as tag}
			{#if 'description' in tag}
				<DetailedTag
					tag={{ name: tag.name, type: 'supertag', modifier: '+', count: tag.tags.length }}
					onclick={() => onclick(tag)}
					oncontextmenu={() => oncontextmenu(tag)}
					active
				/>
			{:else}
				<DetailedTag
					{tag}
					onclick={() => onclick(tag)}
					oncontextmenu={() => oncontextmenu(tag)}
					active
				/>
			{/if}
		{/each}
		{#if tags.length > 1}
			<TagButton
				title="Create a supertag from the current selection."
				onclick={() => createSupertag?.(tags)}
			>
				<i class="codicon codicon-star-full"></i>
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
