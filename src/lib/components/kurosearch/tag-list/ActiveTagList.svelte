<script lang="ts">
	import TagButton from '../button-tag/TagButton.svelte';
	import DetailedTag from '../tag-detailed/DetailedTag.svelte';
	import ShareButton from '../button-share/ShareButton.svelte';
	import { supportsUrlSharing } from '$lib/logic/feature-support';
	import { getIndexOfModifier, getNextModifier } from '$lib/logic/modifier-utils';
	import activeTagsStore from '$lib/store/active-tags-store';

	interface Props {
		tags: Array<kurosearch.ModifiedTag | kurosearch.Supertag>;
		oncontextmenu?: (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => void;
		onclick?: (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => void;
		oncreateSupertag?: (tags: Array<kurosearch.ModifiedTag | kurosearch.Supertag>) => void;
	}

	let { tags, oncontextmenu, onclick, oncreateSupertag: createSupertag }: Props = $props();

	let sortingPaused = $state(false);
	let sortingTimeout: ReturnType<typeof setTimeout>;

	const handleClick = (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => {
		// If parent provided onclick, use it; otherwise toggle selection
		if (onclick) {
			onclick(tag);
		} else {
			// Remove the tag from active tags
			activeTagsStore.removeByName(tag.name);
		}
	};

	const handleCycle = (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => {
		// Pause sorting to prevent reordering during interaction
		sortingPaused = true;
		clearTimeout(sortingTimeout);
		sortingTimeout = setTimeout(() => {
			sortingPaused = false;
		}, 500);

		// If parent provided oncontextmenu, use it; otherwise cycle modifiers
		if (oncontextmenu) {
			oncontextmenu(tag);
		} else if ('description' in tag) {
			// Supertags can't be cycled, just ignore
			return;
		} else {
			// Cycle through modifiers: + → ~ → - → +
			const nextModifier = getNextModifier(tag.modifier);
			activeTagsStore.addOrReplace({ ...tag, modifier: nextModifier });
		}
	};

	// Sort tags by modifier first, then alphabetically by name
	// Pause sorting during interactions to prevent reordering
	let sortedTags = $derived(
		sortingPaused
			? tags
			: [...tags].sort((a, b) => {
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
		{#each sortedTags as tag (tag.name)}
			{#if 'description' in tag}
				<DetailedTag
					tag={{ name: tag.name, type: 'supertag', modifier: '+', count: tag.tags.length }}
					onclick={() => handleClick(tag)}
					oncontextmenu={() => handleCycle(tag)}
					onlongpress={() => handleCycle(tag)}
					active
				/>
			{:else}
				<DetailedTag
					{tag}
					onclick={() => handleClick(tag)}
					oncontextmenu={() => handleCycle(tag)}
					onlongpress={() => handleCycle(tag)}
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
