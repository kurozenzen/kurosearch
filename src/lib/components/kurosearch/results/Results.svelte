<script lang="ts">
	import { getPostId } from '$lib/logic/id-utils';
	import { videoStore } from '$lib/store/active-video-store';
	import resultColumns from '$lib/store/result-columns-store';
	import results from '$lib/store/results-store';
	import FullscreenPost from '../fullscreen-post/FullscreenPost.svelte';
	import MosaicPost from '../post/MosaicPost.svelte';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';

	interface Props {
		onsortfilterupdate: () => void;
		onendreached: () => void;
	}

	let { onendreached }: Props = $props();

	let fullscreenIndex: undefined | number = $state(undefined);
	let fullscreenCurrentTime: undefined | number = $state(undefined);
	let pushedFullscreenState = false;

	const exitFullscreen = (postIndex: number) => {
		const post = $results.posts[postIndex];
		const id = getPostId(post.id);
		document.getElementById(id)?.scrollIntoView();
		fullscreenIndex = undefined;
	};

	const onfullscreen = (index: number, currentTime?: number) => {
		videoStore.pause();
		fullscreenIndex = index;
		fullscreenCurrentTime = currentTime;
	};

	$effect(() => {
		if (fullscreenIndex !== undefined) {
			history.pushState({ ...history.state, fullscreen: true }, '');
			pushedFullscreenState = true;
		} else {
			if (history.state?.fullscreen) {
if (pushedFullscreenState) {
					history.back();
				} else {
					// state was preserved from before a refresh — clear it without navigating back
					history.replaceState({ ...history.state, fullscreen: false }, '');
				}
				pushedFullscreenState = false;
			}
		}
	});
</script>

{#if $resultColumns === '1'}
	<ol class="single-column">
		{#each $results.posts as post, index}
			<SingleColumnPost {post} onfullscreen={(currentTime) => onfullscreen(index, currentTime)} />
		{/each}
	</ol>
{:else}
	<ol class="multi-column" style="--nr-columns: {$resultColumns}; ">
		{#each $results.posts as post, index}
			<MosaicPost {post} onclick={() => onfullscreen(index)} />
		{/each}
	</ol>
{/if}

{#if fullscreenIndex !== undefined}
	<FullscreenPost
		index={fullscreenIndex}
		onclose={exitFullscreen}
		{onendreached}
		startAt={fullscreenCurrentTime}
	/>
{/if}

<style>
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
