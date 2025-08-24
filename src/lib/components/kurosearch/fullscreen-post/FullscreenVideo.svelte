<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import { formatVideoTime } from '$lib/logic/format-time';
	import { getVideoSources } from '$lib/logic/media-utils';
	import { videoObserver } from '$lib/logic/video-observer';
	import { onDestroy, onMount } from 'svelte';
	import VolumeControl, { getVolume } from '../media-video/VolumeControl.svelte';
	import FullscreenProgress from './FullscreenProgress.svelte';

	interface Props {
		post: kurosearch.Post;
		ondetails: () => void;
		onended?: () => void;
	}

	let { post, onended, ondetails }: Props = $props();

	let video: HTMLVideoElement | undefined;

	let sources = $derived(getVideoSources(post.file_url, post.sample_url, post.preview_url));

	let currentTime = $state(0);
	let paused = $state(false);
	let duration: number | undefined = $state(1);
	let timeLeft = $derived(duration - currentTime);

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
	onclick={() => {
		if (video) {
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		}
	}}
	{onended}
	oncontextmenu={(e) => {
		e.preventDefault();
		e.stopPropagation();
	}}
	volume={getVolume()}
>
</video>

<div class="fs-controls" class:tucked={!paused}>
	<span>{formatVideoTime(timeLeft)}</span>
	<FullscreenProgress bind:value={currentTime} max={duration} type="video" />
	<VolumeControl class="fs-volume-button" />
	<IconButton variant="half-background" onclick={ondetails} class="fs-video-details-button">
		<i class="codicon codicon-tag"></i>
	</IconButton>
</div>

<style>
	video {
		display: block;
		width: 100vw;
		height: 100vh;
		contain: strict;
		object-fit: contain;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		z-index: var(--z-media);
	}

	.fs-controls {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100vw;

		display: flex;
		padding: var(--small-gap);
		gap: var(--small-gap);
		box-sizing: border-box;

		align-items: center;

		z-index: var(--z-media-controls);
	}

	span {
		grid-column: 1 / span 1;
		grid-row: 1 / span 1;

		align-self: center;
		justify-self: start;
		font-size: 12px;
		background-color: #0008;
		border-radius: var(--tiny-gap);
		padding: var(--tiny-gap);
		color: white;
		user-select: none;
	}

	:global(.fs-controls .video) {
		grid-column: 1 / span 2;
		grid-row: 2;
		flex-grow: 1;
	}

	:global(.fs-controls .fs-volume-button) {
		grid-column: 3;
		grid-row: 1 / span 2;
	}

	:global(.fs-controls .fs-video-details-button) {
		grid-column: 4;
		grid-row: 1 / span 2;
	}

	:global(.fs-controls .fullscreen-progress) {
		transition: transform var(--default-transition-behaviour);
	}

	:global(.fs-controls button) {
		transition: opacity var(--default-transition-behaviour);
	}

	:global(.fs-controls.tucked .fullscreen-progress) {
		transform: translateY(calc(var(--small-gap) + 50% - 2px));
	}

	:global(.fs-controls.tucked button) {
		opacity: 0;
	}
</style>
