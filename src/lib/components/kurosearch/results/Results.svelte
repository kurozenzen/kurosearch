<script lang="ts">
	import results from '$lib/store/results-store';
	import resultColumns from '$lib/store/result-columns-store';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';
	import { formatCount } from '$lib/logic/format-count';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';
	import MosaicPost from '../post/MosaicPost.svelte';
	import FullscreenPost from '../fullscreen-post/FullscreenPost.svelte';
	import { onDestroy, onMount } from 'svelte';

	let viewing: undefined | kurosearch.Post;

	let hasHash = location.hash.length > 2;
	const listener = () => {
		hasHash = location.hash.length > 2;
	};

	onMount(() => {
		window.addEventListener('hashchange', listener);
	});
	onDestroy(() => {
		window.removeEventListener('hashchange', listener);
	});
</script>

<div>
	<span>{formatCount($results.postCount)} posts</span>
	<SortFilterConfig />
</div>

{#if $resultColumns === '1'}
	<section class="single">
		{#each $results.posts as post}
			<SingleColumnPost {post} />
		{/each}
	</section>
{:else}
	<section class="multi" style="grid-template-columns: repeat({$resultColumns}, 1fr);">
		{#each $results.posts as post}
			<MosaicPost
				{post}
				on:click={() => {
					viewing = post;
					location.hash = `fullscreen_${post.id}`;
				}}
			/>
		{/each}
	</section>

	{#if hasHash && viewing !== undefined}
		<FullscreenPost post={viewing} on:close={() => (viewing = undefined)} />
	{/if}
{/if}

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

	.single {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.multi {
		width: 100%;
		display: grid;
		gap: 0.5rem;
	}

	article {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		overscroll-behavior: none;
	}

	i {
		padding: 6px;
		box-sizing: border-box;
		height: 32px;
	}
</style>
