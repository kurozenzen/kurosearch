<script lang="ts">
	import TagButton from '../button-tag/TagButton.svelte';
	import DetailedTag from '../tag-detailed/DetailedTag.svelte';
	import ShareButton from '../button-share/ShareButton.svelte';
	import { supportsUrlSharing } from '$lib/logic/feature-support';
	import { activeSupertags, activeTags } from '$lib/store';
	import { addOrReplace, removeByName } from '$lib/logic/array-ops';
	import { nextModifier } from '$lib/logic/modifier-utils';

	interface Props {
		oncreateSupertag?: (tags: Array<kurosearch.ModifiedTag | kurosearch.Supertag>) => void;
	}

	let { oncreateSupertag: createSupertag }: Props = $props();

	let tags = $derived([...activeTags.value, ...activeSupertags.value]);

	const removeTag = (tag: kurosearch.ModifiedTag | kurosearch.Supertag) =>
		removeByName('description' in tag ? activeSupertags.value : activeTags.value, tag.name);
	const rotateModifier = (tag: kurosearch.ModifiedTag | kurosearch.Supertag) => {
		if (!('description' in tag)) {
			tag.modifier = nextModifier(tag.modifier);
			addOrReplace(activeTags.value, tag);
		}
	};
</script>

<ul aria-live="polite">
	{#if tags.length > 0}
		{#each tags as tag}
			{#if 'description' in tag}
				<DetailedTag
					tag={{ name: tag.name, type: 'supertag', modifier: '+', count: tag.tags.length }}
					onclick={() => removeTag(tag)}
					active
				/>
			{:else}
				<DetailedTag
					{tag}
					onclick={() => removeTag(tag)}
					oncontextmenu={() => rotateModifier(tag)}
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
