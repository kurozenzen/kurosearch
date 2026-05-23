<script lang="ts">
	import activeTagsStore from '$lib/store/active-tags-store';
	import SimpleTag from '../tag-simple/SimpleTag.svelte';
	import activeSuperTagsStore from '$lib/store/active-supertags-store';

	interface Props {
		tags: kurosearch.Tag[];
	}

	let { tags }: Props = $props();
</script>

<ul class="tags">
	{#each tags as tag}
		{@const active = $activeTagsStore.find((t) => t.name === tag.name) !== undefined}
		{@const activeInSuperTag =
			$activeSuperTagsStore.find((st) => st.tags.find((t) => t.name === tag.name)) !== undefined}
		<SimpleTag
			{tag}
			onclick={() =>
				active
					? activeTagsStore.removeByName(tag.name)
					: activeTagsStore.addOrReplace({ ...tag, modifier: '+' })}
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
