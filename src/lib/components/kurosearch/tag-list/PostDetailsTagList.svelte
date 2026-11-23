<script lang="ts">
	import { activeSupertags, activeTags } from '#lib/store';
	import { addOrReplace, removeByName } from '#lib/logic/array-ops';
	import SimpleTag from '../tag-simple/SimpleTag.svelte';

	interface Props {
		tags: kurosearch.Tag[];
	}

	let { tags }: Props = $props();
</script>

<ul>
	{#each tags as tag (tag.name)}
		{@const active = activeTags.value.some((t) => t.name === tag.name)}
		{@const activeInSuperTag = activeSupertags.value.some((st) =>
			st.tags.some((t) => t.name === tag.name)
		)}
		<li>
			<SimpleTag
				{tag}
				onclick={() =>
					active
						? removeByName(activeTags.value, tag.name)
						: addOrReplace(activeTags.value, { ...tag, modifier: '+' })}
				{active}
				{activeInSuperTag}
			/>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--small-gap);
	}
</style>
