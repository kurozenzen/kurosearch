<script lang="ts">
	import { activeSupertags, activeTags } from '$lib/store';
	import { addOrReplace, removeByName } from '$lib/logic/array-ops';
	import SimpleTag from '../tag-simple/SimpleTag.svelte';

	interface Props {
		tags: kurosearch.Tag[];
	}

	let { tags }: Props = $props();
</script>

<ul class="tags">
	{#each tags as tag}
		{@const active = activeTags.value.some((t) => t.name === tag.name)}
		{@const activeInSuperTag = activeSupertags.value.some((st) =>
			st.tags.some((t) => t.name === tag.name)
		)}
		<SimpleTag
			{tag}
			onclick={() =>
				active
					? removeByName(activeTags.value, tag.name)
					: addOrReplace(activeTags.value, { ...tag, modifier: '+' })}
			{active}
			{activeInSuperTag}
		/>
	{/each}
</ul>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
