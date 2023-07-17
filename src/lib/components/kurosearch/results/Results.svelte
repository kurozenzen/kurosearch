<script lang="ts">
	import results from '$lib/store/results-store';
	import resultColumns from '$lib/store/result-columns-store';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';
	import { formatCount } from '$lib/logic/format-count';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';
	import MosaicPost from '../post/MosaicPost.svelte';
	import FullscreenPost from '../fullscreen-post/FullscreenPost.svelte';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const listener = () => {
		hasHash = location.hash.length > 2;
	};

	let viewing: undefined | { post: kurosearch.Post; index: number };

	let hasHash = location.hash.length > 2;

	onMount(() => {
		window.addEventListener('hashchange', listener);
	});
	onDestroy(() => {
		window.removeEventListener('hashchange', listener);
	});
</script>

<div>
	<span>{formatCount($results.postCount)} posts</span>
	<SortFilterConfig on:sortfilterupdate />
</div>

{#if $resultColumns === '1'}
	<section class="single">
		{#each $results.posts as post, index}
			<SingleColumnPost
				{post}
				on:fullscreen={() => {
					viewing = { post, index };
					location.hash = `fullscreen`;
				}}
			/>
		{/each}
	</section>
{:else}
	<section class="multi" style="grid-template-columns: repeat({$resultColumns}, 1fr);">
		{#each $results.posts as post, index}
			<MosaicPost
				{post}
				on:click={() => {
					viewing = { post, index };
					location.hash = `fullscreen`;
				}}
			/>
		{/each}
	</section>
{/if}

{#if hasHash && viewing !== undefined}
	<FullscreenPost
		post={viewing.post}
		on:close={() => {
			if (viewing?.post?.id) document.getElementById(`post_${viewing.post.id}`)?.focus();
			viewing = undefined;
			history.back();
		}}
		on:previous={() => {
			let newIndex = Math.max(viewing.index - 1, 0);
			viewing = { index: newIndex, post: $results.posts[newIndex] };
		}}
		on:next={() => {
			let newIndex = Math.min(viewing.index + 1, $results.posts.length);
			viewing = { index: newIndex, post: $results.posts[newIndex] };

			if (newIndex > $results.posts.length - 3 && $results.posts.length !== $results.postCount) {
				dispatch('endreached');
			}
		}}
	/>
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
</style>
