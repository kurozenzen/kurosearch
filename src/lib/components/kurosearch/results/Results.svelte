<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { getPostId } from '$lib/logic/id-utils';
	import resultColumns from '$lib/store/result-columns-store';
	import results from '$lib/store/results-store';
	import FullscreenPost from '../fullscreen-post/FullscreenPost.svelte';
	import MosaicPost from '../post/MosaicPost.svelte';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';

	let fullscreenIndex: undefined | number;

	const exitFullscreen = (event: CustomEvent<number>) => {
		const post = $results.posts[event.detail];
		const id = getPostId(post.id);
		document.getElementById(id)?.scrollIntoView();
		fullscreenIndex = undefined;
	};

	$: {
		if (fullscreenIndex !== undefined) {
			history.pushState({ ...history.state, fullscreen: true }, '');
		} else {
			if (history.state?.fullscreen) {
				history.back();
			}
		}
	}
</script>

<div>
	<span>{formatCount($results.postCount)} posts</span>
	<SortFilterConfig on:sortfilterupdate />
</div>

{#if $resultColumns === '1'}
	<ol class="single-column">
		{#each $results.posts as post, index}
			<SingleColumnPost
				{post}
				on:fullscreen={() => {
					fullscreenIndex = index;
				}}
			/>
		{/each}
	</ol>
{:else}
	<ol class="multi-column" style="--nr-columns: {$resultColumns}; ">
		{#each $results.posts as post, index}
			<MosaicPost
				{post}
				on:click={() => {
					fullscreenIndex = index;
				}}
			/>
		{/each}
	</ol>
{/if}

{#if fullscreenIndex !== undefined}
	<FullscreenPost index={fullscreenIndex} on:close={exitFullscreen} on:endreached />
{/if}

<style>
	div {
		width: 100%;
		height: var(--line-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	@media (width <= calc(800px + 2rem)) {
		div {
			padding-inline: var(--small-gap);
		}
	}

	.single-column {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	.multi-column {
		--nr-columns: 1;
		width: 100%;
		display: grid;
		gap: var(--small-gap);
		grid-template-columns: repeat(var(--nr-columns), 1fr);
		grid-auto-rows: calc(min(var(--body-width), 100vw) / 5 / var(--nr-columns));
	}
</style>
