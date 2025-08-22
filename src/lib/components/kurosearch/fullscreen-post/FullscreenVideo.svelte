<script lang="ts">
	import { getVideoSources } from '$lib/logic/media-utils';
	import { videoObserver } from '$lib/logic/video-observer';
	import { onDestroy, onMount } from 'svelte';
	import FullscreenProgress from './FullscreenProgress.svelte';
	import { formatVideoTime } from '$lib/logic/format-time';

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
></video>

{#if currentTime !== undefined && duration !== undefined}
	<span>{formatVideoTime(currentTime)} / {formatVideoTime(duration)}</span>
{/if}

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
</style>
