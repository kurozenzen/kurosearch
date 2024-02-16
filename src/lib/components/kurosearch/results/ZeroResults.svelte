<script>
	import { base } from '$app/paths';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import sort from '$lib/store/sort-store';
	import filter from '$lib/store/filter-store';
	import { createEventDispatcher } from 'svelte';
	import activeTagsStore from '$lib/store/active-tags-store';
	import activeSupertagsStore from '$lib/store/active-supertags-store';

	const dispatch = createEventDispatcher();
</script>

<img src="{base}/assets/shironeko-confused.png" alt="Nothing here..." />
<p>We couldn't find any posts matching your tags. Sorry...</p>
<div>
	<TextButton
		title="In case your filter caused all posts to vanish. Reset it."
		on:click={() => {
			sort.reset();
			filter.reset();
			dispatch('sortfilterupdate');
		}}
	>
		Reset Filter
	</TextButton>
	<TextButton
		title="Tag combinations that are too specific will not yield results."
		on:click={() => {
			activeTagsStore.reset();
			activeSupertagsStore.reset();
		}}
	>
		Reset Tags
	</TextButton>
</div>

<style>
	img {
		display: block;
		aspect-ratio: 272 / 238;
		width: 272px;
	}

	div {
		display: flex;
		gap: var(--grid-gap);
	}
</style>
