<script lang="ts">
	import { getVideoSources } from '$lib/logic/media-utils';
	import { videoObserver } from '$lib/logic/video-observer';
	import { onDestroy, onMount } from 'svelte';
	import { getVolume } from '../media-video/VolumeControl.svelte';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';

	interface Props {
		post: kurosearch.Post;
		ondetails: () => void;
		onended?: () => void;
	}

	let { post, onended, ondetails }: Props = $props();

	let video: HTMLVideoElement;

	let sources = $derived(getVideoSources(post.file_url, post.sample_url, post.preview_url));

	let currentTime = $state(0);
	let paused = $state(false);
	let loading = $state(false);
	let duration: number = $state(1);
	let overlayHidden = $state(true);

	const onclick = (e: Event) => {
		e.stopPropagation();
		overlayHidden = !overlayHidden;
	};

	const ontoggleplay = () => {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	};

	const keybinds = (event: KeyboardEvent) => {
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
	};

	onMount(() => {
		videoObserver.observe(video);
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		videoObserver.unobserve(video);
		document.removeEventListener('keydown', keybinds);
	});
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video
	src={sources.animated}
	poster={sources.static}
	title="[VIDEO] post #{post.id}"
	preload="metadata"
	autoplay
	bind:this={video}
	bind:currentTime
	bind:paused
	bind:duration
	onwaiting={() => (loading = true)}
	onplaying={() => (loading = false)}
	{onended}
	oncontextmenu={(e) => {
		e.preventDefault();
		e.stopPropagation();
	}}
	volume={getVolume()}
	{onclick}
>
</video>

<PostOverlay
	hidden={overlayHidden}
	mediaType="video"
	{paused}
	{loading}
	{ontoggleplay}
	bind:currentTime
	{duration}
	{ondetails}
/>

<style>
	video {
		display: block;
		width: 100vw;
		height: 100vh;
		contain: strict;
		object-fit: contain;
		z-index: var(--z-media);
	}
</style>
