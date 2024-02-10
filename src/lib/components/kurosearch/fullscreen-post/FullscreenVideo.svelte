<script lang="ts">
	import { getVideoSources } from '$lib/logic/media-utils';
	import { videoObserver } from '$lib/logic/video-observer';
	import { onDestroy, onMount } from 'svelte';
	import FullscreenProgress from './FullscreenProgress.svelte';

	export let post: kurosearch.Post;

	let video: HTMLVideoElement | undefined;

	$: sources = getVideoSources(post.file_url, post.sample_url, post.preview_url);
	$: animatedSource = sources.animated;
	$: staticSource = sources.static;

	let currentTime = 0;
	let paused = false;
	let duration: number;

	const keybinds = (event: KeyboardEvent) => {
		if (video) {
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				event.stopPropagation();
				video.currentTime = Math.max(0, video.currentTime - 5);
			}
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				event.stopPropagation();
				video.currentTime = Math.min(video.duration, video.currentTime + 5);
			}
			if (event.key === 'Space') {
				event.preventDefault();
				event.stopPropagation();
				paused = !paused;
			}
		}
	};

	onMount(() => {
		if (video) {
			videoObserver?.observe(video);
		}
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		if (video) {
			videoObserver?.unobserve(video);
		}
		document.removeEventListener('keydown', keybinds);
	});
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
	src={animatedSource}
	poster={staticSource}
	title="[VIDEO] post #{post.id}"
	preload="metadata"
	autoplay
	bind:this={video}
	bind:currentTime
	bind:paused
	bind:duration
	on:click={(e) => (e.target.paused ? e.target.play() : e.target.pause())}
	on:ended
	on:contextmenu|preventDefault={() => {}}
/>

<FullscreenProgress bind:value={currentTime} max={duration} />

<style>
	video {
		display: flex;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		contain: paint;

		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
</style>
