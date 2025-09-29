<script lang="ts">
	import activeTagsStore from '$lib/store/active-tags-store';
	import SimpleTag from '../tag-simple/SimpleTag.svelte';
	import { getNextModifierNullable } from '$lib/logic/modifier-utils';

	interface Props {
		tags: kurosearch.Tag[];
	}

	let { tags }: Props = $props();
</script>

<ul class="tags">
	{#each tags as tag}
		{@const activeTag = $activeTagsStore.find((t) => t.name === tag.name)}
		<SimpleTag
			{tag}
			onclick={() => {
				const nextModifier = getNextModifierNullable(activeTag?.modifier);
				if (nextModifier === undefined) {
					activeTagsStore.removeByName(tag.name);
				} else {
					activeTagsStore.addOrReplace({ ...tag, modifier: nextModifier });
				}
			}}
			oncontextmenu={() => {
				activeTagsStore.removeByName(tag.name);
			}}
			onlongpress={() => {
				activeTagsStore.removeByName(tag.name);
			}}
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
