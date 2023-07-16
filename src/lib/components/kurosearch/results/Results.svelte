<script>
	import results from '$lib/store/results-store';
	import Post from '../post/Post.svelte';

	let columns = 1;
</script>

<div>
	<span>{$results.postCount} results</span>
	<input type="range" min="1" max="10" step="1" bind:value={columns} />
</div>

<section style={`grid-template-columns: repeat(${columns}, 1fr);`}>
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
		padding-inline: var(--grid-gap);
		box-sizing: border-box;
	}

	section {
		width: 100%;
		display: grid;
		gap: 0.5rem;
	}
</style>
