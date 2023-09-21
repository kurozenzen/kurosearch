<script>
	import { base } from '$app/paths';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import sort from '$lib/store/sort-store';
	import filter from '$lib/store/filter-store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<img src="{base}/assets/shironeko-confused.png" alt="Nothing here..." />
<p>We couldn't find any posts matching your tags. Sorry...</p>
<TextButton
	title="In case your filter caused all posts to vanish. Reset it."
	on:click={() => {
		sort.reset();
		filter.reset();
		dispatch('sortfilterupdate');
	}}>Reset Filter</TextButton
>

<style>
	img {
		display: block;
		aspect-ratio: 272 / 238;
		width: 272px;
	}
</style>
