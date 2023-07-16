<script>
	import results from '$lib/store/results-store';
	import Post from '../post/Post.svelte';
	import resultColumns from '$lib/store/result-columns-store';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';
	import { formatCount } from '$lib/logic/format-count';
</script>

<div>
	<span>{formatCount($results.postCount)} posts</span>
	<SortFilterConfig />
</div>

<section style="grid-template-columns: repeat({$resultColumns}, 1fr);">
	{#each $results.posts as post}
		<Post {post} />
	{/each}
</section>

<style>
	div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	@media (width <= calc(800px + 2rem)) {
		div {
			padding-inline: var(--grid-gap);
		}
	}

	section {
		width: 100%;
		display: grid;
		gap: 0.5rem;
	}
</style>
