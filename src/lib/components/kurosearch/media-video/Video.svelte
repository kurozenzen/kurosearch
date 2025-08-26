<script module lang="ts">
	let playingVideo: HTMLVideoElement | undefined = $state(undefined);

	export function pausePlayingVideo() {
		if (playingVideo) {
			playingVideo.pause();
			playingVideo = undefined;
		}
	}

	const SKIP_TIME = 5;
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { isSpace } from '$lib/logic/keyboard-utils';
	import { onDestroy, onMount } from 'svelte';
	import { getVolume } from './VolumeControl.svelte';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';

	interface Props {
		src: string;
		poster: string;
		width: number;
		height: number;
		loop?: boolean;
		class?: string;
		onclick?: () => void;
		onfullscreen?: () => void;
	}

	let {
		src,
		poster,
		width,
		height,
		loop = false,
		onclick,
		onfullscreen,
		...rest
	}: Props = $props();

	let container: HTMLDivElement;
	let video: HTMLVideoElement | undefined = $state(undefined);

	let displayVideo = $state(false);

	let paused = $state(true);
	let loading = $state(false);

	let duration = $state(0);
	let currentTime = $state(0);

	const ontoggleplay = () => {
		if (video) {
			if (video.paused) {
				video.play();
				playingVideo = video;
			} else {
				video.pause();
			}
		}
	};

	const skipBackward = () => {
		if (video) {
			video.currentTime = Math.max(0, video.currentTime - SKIP_TIME);
		}
	};
	const skipForward = () => {
		if (video) {
			video.currentTime = Math.min(video.duration, video.currentTime + SKIP_TIME);
		}
	};

	const skip = (event: MouseEvent) => {
		if (event.offsetX < (event.target as HTMLVideoElement).clientWidth / 2) {
			skipBackward();
		} else {
			skipForward();
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (isSpace(event) || event.key === 'k') {
			event.preventDefault();
			event.stopPropagation();
			ontoggleplay();
		} else if (event.key === 'ArrowLeft' || event.key === 'j') {
			event.preventDefault();
			event.stopPropagation();
			skipBackward();
		} else if (event.key === 'ArrowRight' || event.key === 'l') {
			event.preventDefault();
			event.stopPropagation();
			skipForward();
		}
	};

	const observer = browser
		? new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							displayVideo = true;
						} else {
							if (video) {
								video.pause();
								video.addEventListener('error', () => (displayVideo = false), { once: true });
								video.src = '';
							}
						}
					}
				},
				{ rootMargin: '0px' }
			)
		: null;

	onMount(() => observer?.observe(container));
	onDestroy(() => observer?.unobserve(container));
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	bind:this={container}
	onkeydown={handleKeyDown}
	class={rest.class}
	style="aspect-ratio:{width}/{height}"
	{onclick}
>
	{#if displayVideo}
		<!-- svelte-ignore a11y_media_has_caption -->
		<video
			tabindex="0"
			{poster}
			{loop}
			{src}
			bind:this={video}
			bind:paused
			bind:currentTime
			bind:duration
			onwaiting={() => (loading = true)}
			onplaying={() => (loading = false)}
			onpause={() => (loading = false)}
			onended={() => {
				if (!loop) {
					loading = false;
				}
			}}
			ondblclick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				skip(e);
			}}
			preload="metadata"
			style="aspect-ratio: {width} / {height}"
			volume={getVolume()}
		></video>
		<PostOverlay
			mediaType="video"
			{onfullscreen}
			{paused}
			{loading}
			{ontoggleplay}
			bind:currentTime
			{duration}
		/>
	{/if}
</div>

<style>
	div {
		width: 100%;
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto 1fr;
		z-index: var(--z-media);
	}

	video {
		width: 100%;
		grid-column: 1;
		grid-row: 1 / span 3;
		contain: strict;
		object-fit: contain;
	}

	@container (min-width: 800px) {
		video {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}
</style>
