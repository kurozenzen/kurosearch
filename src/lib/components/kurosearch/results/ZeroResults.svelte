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

<section>
	<img
		src="{base}/assets/lynxy-chibi-not-found.webp"
		alt="Nothing here..."
		width="1231"
		height="864"
	/>

	<p>We couldn't find any posts matching your tags. Sorry...</p>
	<div>
		<TextButton
			type="secondary"
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
			type="secondary"
			title="Tag combinations that are too specific will not yield results."
			on:click={() => {
				activeTagsStore.reset();
				activeSupertagsStore.reset();
			}}
		>
			Reset Tags
		</TextButton>
	</div>
</section>

<style>
	section {
		overflow: hidden;
		background-color: var(--background-1);
		max-width: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
		border-radius: var(--border-radius-large);
	}
	img {
		display: block;
		object-fit: cover;
		aspect-ratio: 1231 / 864;
		max-width: 100%;
		max-height: 300px;
	}

	div {
		display: flex;
		gap: var(--grid-gap);
		padding-block-end: var(--grid-gap);
	}
</style>
