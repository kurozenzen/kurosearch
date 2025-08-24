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
	import { formatVideoTime } from '$lib/logic/format-time';
	import { isSpace } from '$lib/logic/keyboard-utils';
	import { onDestroy, onMount } from 'svelte';
	import PlayButton from '../button-play/PlayButton.svelte';
	import VolumeControl from './VolumeControl.svelte';

	interface Props {
		src: string;
		poster: string;
		width: number;
		height: number;
		loop?: boolean;
		class?: string;
		onclick?: () => void;
	}

	let { src, poster, width, height, loop = false, onclick, ...rest }: Props = $props();

	let container: HTMLDivElement;
	let video: HTMLVideoElement | undefined = $state(undefined);

	let displayVideo = $state(false);

	let paused = $state(true);
	let loading = $state(false);

	let duration = $state(0);
	let currentTime = $state(0);
	let timeLeft = $derived(duration - currentTime);
	let percent = $derived((currentTime / duration) * 98 + 1);

	let intentHideOverlay = $state(false);
	let hideOverlay = $derived(!paused && !loading && intentHideOverlay);

	const togglePlaying = () => {
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
			togglePlaying();
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

	const toggleOverlay = () => {
		intentHideOverlay = !intentHideOverlay;
	};

	onMount(() => observer?.observe(container));
	onDestroy(() => observer?.unobserve(container));
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	bind:this={container}
	onkeydown={handleKeyDown}
	class="post-media player {rest.class}"
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
			onclick={toggleOverlay}
			ondblclick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				skip(e);
			}}
			preload="metadata"
			style="aspect-ratio: {width} / {height}"
		></video>
		<PlayButton
			playing={!video?.paused}
			{loading}
			class="center hidable {hideOverlay ? 'hide' : ''}"
			onclick={togglePlaying}
		/>
		<div class="video-controls">
			<span class:hide={hideOverlay} class="hidable">{formatVideoTime(timeLeft)}</span>
			<input
				bind:value={currentTime}
				type="range"
				min={0}
				max={duration}
				step={0.0166666}
				class="hidable"
				class:hide={hideOverlay}
				style="{`background-image: linear-gradient(90deg, var(--accent) ${percent}%, var(--background-2) ${percent}%);`}}"
			/>

			<VolumeControl class="volume-control {hideOverlay ? 'hide' : ''}" />
		</div>
	{/if}
</div>

<style>
	.player {
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

	.video-controls {
		grid-column: 1;
		grid-row: 3;
		display: flex;
		align-items: center;
		align-self: end;
		gap: var(--small-gap);
		padding: var(--small-gap);
		z-index: var(--z-media-controls);
	}

	span {
		font-size: 12px;
		background-color: #0008;
		border-radius: var(--tiny-gap);
		padding: var(--tiny-gap);
		color: white;
		user-select: none;
	}

	input[type='range'] {
		flex-grow: 1;
		appearance: none;
		-webkit-appearance: none;
		height: var(--line-height);
		margin: 0;
		align-self: flex-end;
		background-clip: content-box;
		padding-block: 14px;
		border-radius: 2px;
	}

	input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		content: '';
		height: var(--tiny-gap);
	}

	input[type='range']::-moz-range-progress {
		background-color: var(--accent);
	}

	input[type='range']::-ms-fill-lower {
		background-color: var(--accent);
	}

	input[type='range']::-webkit-slider-thumb,
	input[type='range']::-ms-thumb {
		height: 16px;
		width: 16px;
		border-radius: 8px;
		background-color: var(--accent);
	}

	input[type='range']::-moz-range-thumb {
		height: 16px;
		width: 16px;
		border-radius: 8px;
		background-color: var(--accent);
		border: none;
	}

	input[type='range']::-webkit-slider-thumb {
		margin-top: -6px;
	}

	.player :global(.center) {
		z-index: 15;
		grid-column: 1;
		grid-row: 2;
		justify-self: center;
	}

	.player :global(.hidable) {
		transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
	}

	:global(.hide) {
		opacity: 0;
	}
</style>
