<script lang="ts">
	import results from '$lib/store/results-store';
	import resultColumns from '$lib/store/result-columns-store';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';
	import { formatCount } from '$lib/logic/format-count';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';
	import MosaicPost from '../post/MosaicPost.svelte';
	import FullscreenPost from '../fullscreen-post/FullscreenPost.svelte';
	import { getPostId } from '$lib/logic/id-utils';

	let fullscreenIndex: undefined | number;

	const exitFullscreen = (event: CustomEvent<number>) => {
		const post = $results.posts[event.detail];
		const id = getPostId(post.id);
		document.getElementById(`post_${post.id}`)?.scrollIntoView();
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
