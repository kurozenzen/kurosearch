<script lang="ts">
	import TagButton from '../button-tag/TagButton.svelte';
	import DetailedTag from '../tag-detailed/DetailedTag.svelte';
	import ShareButton from '../button-share/ShareButton.svelte';
	import { supportsUrlSharing } from '$lib/logic/feature-support';
	import { getIndexOfModifier } from '$lib/logic/modifier-utils';
	import activeTagsStore from '$lib/store/active-tags-store';

	interface Props {
		tags: Array<kurosearch.ModifiedTag | kurosearch.Supertag>;
		oncontextmenu: (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => void;
		onclick: (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => void;
		oncreateSupertag?: (tags: Array<kurosearch.ModifiedTag | kurosearch.Supertag>) => void;
	}

	let {
		tags,
		oncontextmenu,
		onclick,
		oncreateSupertag: createSupertag
	}: Props = $props();

	// Sort tags by modifier first, then alphabetically by name
	let sortedTags = $derived(
		[...tags].sort((a, b) => {
			// Get modifier for each tag (supertags have '+' modifier)
			const modifierA = 'description' in a ? '+' : a.modifier;
			const modifierB = 'description' in b ? '+' : b.modifier;

			// First sort by modifier priority
			const priorityA = getIndexOfModifier(modifierA);
			const priorityB = getIndexOfModifier(modifierB);

			if (priorityA !== priorityB) {
				return priorityA - priorityB;
			}

			// Then sort alphabetically by name
			return a.name.localeCompare(b.name);
		})
	);

	const clearSelection = () => {
		activeTagsStore.reset();
	};
</script>

<ul>
	{#if tags.length > 0}
		{#each sortedTags as tag}
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
		{#if tags.length > 0}
			<TagButton title="Clear the current selection." onclick={() => clearSelection()}>
				<i class="codicon codicon-trashcan"></i>
			</TagButton>
		{/if}
		{#if supportsUrlSharing()}
			<ShareButton />
		{/if}
	{/if}
</ul>

<style lang="scss">
	ul {
		min-height: var(--line-height-small);
		display: flex;
		flex-wrap: wrap;
		gap: var(--small-gap);
		justify-content: center;
	}
</style>
