<script lang="ts">
	import activeTagsStore from '$lib/store/active-tags-store';
	import SimpleTag from '../tag-simple/SimpleTag.svelte';

	export let tags: kurosearch.Tag[];
</script>

<ul class="tags">
	{#each tags as tag}
		{@const active = $activeTagsStore.find((t) => t.name === tag.name) !== undefined}
		<SimpleTag
			{tag}
			on:click={() =>
				active
					? activeTagsStore.removeByName(tag.name)
					: activeTagsStore.addOrReplace({ ...tag, modifier: '+' })}
			{active}
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
