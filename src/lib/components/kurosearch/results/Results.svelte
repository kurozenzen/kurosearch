<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { getPostId } from '$lib/logic/id-utils';
	import resultColumns from '$lib/store/result-columns-store';
	import results from '$lib/store/results-store';
	import { onDestroy, onMount } from 'svelte';
	import FullscreenPost from '../fullscreen-post/FullscreenPost.svelte';
	import MosaicPost from '../post/MosaicPost.svelte';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';

	let fullscreenIndex: undefined | number;

	const exit = (index: number) => {
		const post = $results.posts[index];
		const id = getPostId(post.id);
		document.getElementById(id)?.scrollIntoView();
		fullscreenIndex = undefined;
	};

	const exitFullscreen = (event: CustomEvent<number>) => {
		const post = $results.posts[event.detail];
		const id = getPostId(post.id);
		document.getElementById(id)?.scrollIntoView();
		fullscreenIndex = undefined;
	};
</script>

<div>
	<span>{formatCount($results.postCount)} posts</span>
	<SortFilterConfig on:sortfilterupdate />
</div>

{#if $resultColumns === '1'}
	<section class="single-column">
		{#each $results.posts as post, index}
			<SingleColumnPost
				{post}
				on:fullscreen={() => {
					fullscreenIndex = index;
					location.hash = 'fullscreen';
				}}
			/>
		{/each}
	</section>
{:else}
	<section class="multi-column" style="grid-template-columns: repeat({$resultColumns}, 1fr); ">
		{#each $results.posts as post, index}
			<MosaicPost
				{post}
				on:click={() => {
					fullscreenIndex = index;
					location.hash = 'fullscreen';
				}}
			/>
		{/each}
	</section>
{/if}

{#if fullscreenIndex !== undefined}
	<FullscreenPost index={fullscreenIndex} on:close={exitFullscreen} on:endreached />
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

	.single-column {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	.multi-column {
		width: 100%;
		display: grid;
		gap: var(--small-gap);
		grid-auto-rows: auto;
	}
</style>
