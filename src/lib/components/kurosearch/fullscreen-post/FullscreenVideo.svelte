<script module lang="ts">
	let volume: number = $state(1);
</script>

<script lang="ts">
	import { getVideoSources } from '$lib/logic/media-utils';
	import { videoObserver } from '$lib/logic/video-observer';
	import { onDestroy, onMount } from 'svelte';
	import FullscreenProgress from './FullscreenProgress.svelte';
	import { formatVideoTime } from '$lib/logic/format-time';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';

	interface Props {
		post: kurosearch.Post;
		onended?: () => void;
	}

	let { post, onended }: Props = $props();

	let video: HTMLVideoElement | undefined;

	let sources = $derived(getVideoSources(post.file_url, post.sample_url, post.preview_url));

	let currentTime = $state(0);
	let paused = $state(false);
	let duration: number | undefined = $state(undefined);
	let isVolumeVisible = $state(false);

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
	{volume}
></video>

{#if currentTime !== undefined && duration !== undefined}
	<span>{formatVideoTime(currentTime)} / {formatVideoTime(duration)}</span>
{/if}

{#if isVolumeVisible}
	<input
		class="volume-slider"
		type="range"
		min="0"
		max="1"
		step="0.01"
		bind:value={volume}
		onclick={(e) => {
			e.stopPropagation();
			e.preventDefault();
		}}
	/>
{/if}

<IconButton
	id="volume-button"
	variant="half-background"
	onclick={() => {
		isVolumeVisible = !isVolumeVisible;
	}}
>
	🔊
</IconButton>

<FullscreenProgress bind:value={currentTime} max={duration} type="video" />

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

	span {
		position: absolute;
		bottom: 3rem;
		left: var(--grid-gap);

		font-size: 12px;
		background-color: #0008;
		border-radius: var(--tiny-gap);
		padding: var(--tiny-gap);
		color: white;
		user-select: none;
	}

	:global(#volume-button) {
		position: absolute;
		bottom: 1rem;
		right: calc(2 * var(--grid-gap) + var(--line-height));
		z-index: var(--z-media-controls);
	}

	.volume-slider {
		writing-mode: vertical-lr;
		display: flex;
		justify-content: center;
		position: absolute;
		transform: rotate(180deg);
		bottom: calc(2 * var(--grid-gap) + var(--line-height));
		right: calc(2 * var(--grid-gap) + var(--line-height));
		width: var(--line-height);
		z-index: var(--z-media-controls);
	}
</style>
