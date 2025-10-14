<script lang="ts">
	import activeTagsStore from '$lib/store/active-tags-store';
	import SimpleTag from '../tag-simple/SimpleTag.svelte';
	import { getNextModifier } from '$lib/logic/modifier-utils';

	interface Props {
		tags: kurosearch.Tag[];
	}

	let { tags }: Props = $props();

	const handleClick = (tag: kurosearch.Tag, activeTag: kurosearch.ModifiedTag | undefined) => {
		// Click toggles selection: if tag is active, remove it; otherwise add with + modifier
		if (activeTag) {
			activeTagsStore.removeByName(tag.name);
		} else {
			activeTagsStore.addOrReplace({ ...tag, modifier: '+' });
		}
	};

	const handleCycle = (tag: kurosearch.Tag, activeTag: kurosearch.ModifiedTag | undefined) => {
		// Cycle through modifiers: + → ~ → - → + (only when tag is already selected)
		if (activeTag) {
			const nextModifier = getNextModifier(activeTag.modifier);
			activeTagsStore.addOrReplace({ ...tag, modifier: nextModifier });
		} else {
			// If not active, start with + modifier
			activeTagsStore.addOrReplace({ ...tag, modifier: '+' });
		}
	};
</script>

<ul class="tags">
	{#each tags as tag}
		{@const activeTag = $activeTagsStore.find((t) => t.name === tag.name)}
		<SimpleTag
			{tag}
			onclick={() => handleClick(tag, activeTag)}
			oncontextmenu={() => handleCycle(tag, activeTag)}
			onlongpress={() => handleCycle(tag, activeTag)}
			modifier={activeTag?.modifier}
		/>
	{/each}
</ul>

<style lang="scss">
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
