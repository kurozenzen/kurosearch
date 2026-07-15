<script lang="ts">
	import { getPostId } from '$lib/logic/id-utils';
	import { pauseVideo, targetVideo } from '$lib/store/active-video.svelte';
	import resultColumns from '$lib/store/result-columns-store';
	import results from '$lib/store/results-store';
	import { onMount } from 'svelte';
	import FullscreenPost from '../post-fullscreen/FullscreenPost.svelte';
	import MosaicPost from '../post/MosaicPost.svelte';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';
	import { on } from 'svelte/events';
	import { keybindResultsNext, keybindResultsPrev } from '$lib/logic/keybinds/keyboard-utils';
	import { clamp } from '$lib/logic/math';

	interface Props {
		onsortfilterupdate: () => void;
		onendreached: () => void;
	}

	let { onendreached }: Props = $props();

	let focusIndex = $state<number | undefined>(undefined);
	let fullscreenIndex = $state<undefined | number>(undefined);
	let fullscreenCurrentTime = $state<undefined | number>(undefined);

	const exitFullscreen = async (index: number) => {
		fullscreenIndex = undefined;
		fullscreenCurrentTime = undefined;
		await focusPost(index, 'instant');
	};

	const onfullscreen = (index: number, currentTime?: number) => {
		pauseVideo();
		fullscreenIndex = index;
		fullscreenCurrentTime = currentTime;
	};

	$effect(() => {
		if (fullscreenIndex !== undefined) {
			history.pushState({ ...history.state, fullscreen: true }, '');
		} else {
			if (history.state?.fullscreen) {
				history.back();
			}
		}
	});

	const findCurrentPostIndex = () => {
		let element = document.activeElement;
		while (element && !element.classList.contains('post')) {
			element = element.parentElement;
		}
		if (element) {
			const id = element.id;
			return $results.posts.findIndex((post) => getPostId(post.id) === id);
		}
		return undefined;
	};

	const nextFocus = () => {
		if (focusIndex === undefined) {
			focusIndex = findCurrentPostIndex();
		}
		return focusIndex == undefined ? 0 : clamp(focusIndex + 1, 0, $results.posts.length - 1);
	};
	const prevFocus = () => {
		if (focusIndex === undefined) {
			focusIndex = findCurrentPostIndex();
		}
		return focusIndex == undefined ? 0 : clamp(focusIndex - 1, 0, $results.posts.length - 1);
	};

	const focusPost = async (index: number, behavior: ScrollBehavior = 'smooth') => {
		const postList = document.getElementsByClassName('post');
		const postElement = postList[index] as HTMLElement;
		await postElement.scrollIntoView({ block: 'start', behavior });
		postElement.focus({ preventScroll: true, focusVisible: true });

		setTimeout(() => {
			let video = postElement.querySelector('video');
			if (video) {
				targetVideo(video);
			}
		}, 0);
	};

	onMount(() =>
		on(window, 'keydown', (event) => {
			if (keybindResultsNext(event)) {
				focusIndex = nextFocus();
				focusPost(focusIndex);
			}
			if (keybindResultsPrev(event)) {
				focusIndex = prevFocus();
				focusPost(focusIndex);
			}
		})
	);
</script>

{#if $resultColumns === '1'}
	<ol class="single-column">
		{#each $results.posts as post, index (post.id)}
			<SingleColumnPost {post} onfullscreen={(currentTime) => onfullscreen(index, currentTime)} />
		{/each}
	</ol>
{:else}
	<ol class="multi-column" style="--nr-columns: {$resultColumns}; ">
		{#each $results.posts as post, index (post.id)}
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
