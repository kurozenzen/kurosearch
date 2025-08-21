<script lang="ts">
	import { formatVideoTime } from '$lib/logic/format-time';
	import { isSpace } from '$lib/logic/keyboard-utils';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import PlayButton from '../button-play/PlayButton.svelte';

	const SKIP_TIME = 5;

	export let src: string;
	export let poster: string;
	export let width: number;
	export let height: number;
	export let loop: boolean;

	let container: HTMLDivElement;
	let video: HTMLVideoElement;

	let playing = false;
	let loading = false;
	let currentTime = 0;
	let duration = 0;
	let displayVideo = false;
	let intentHideOverlay = false;

	const skipBackward = () => {
		currentTime = Math.max(0, currentTime - SKIP_TIME);
	};
	const skipForward = () => {
		currentTime = Math.min(duration, currentTime + SKIP_TIME);
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
			playing = !playing;
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
								playing = false;
								loading = false;
								video.addEventListener(
									'error',
									() => {
										displayVideo = false;
									},
									{ once: true }
								);
								video.src = '';
							}
						}
					}
				},
				{ rootMargin: '0px' }
			)
		: null;

	$: timeLeft = duration - currentTime;
	$: playing = displayVideo && playing;
	$: paused = !playing;
	$: percent = (currentTime / duration) * 98 + 1;
	$: hideOverlay = playing && !loading && intentHideOverlay;

	const togglePlaying = () => {
		playing = !playing;
		loading = true;
		intentHideOverlay = playing;
	};
	const toggleOverlay = () => {
		intentHideOverlay = !intentHideOverlay;
	};

	onMount(() => observer?.observe(container));
	onDestroy(() => observer?.unobserve(container));
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	bind:this={container}
	on:keydown={handleKeyDown}
	class="post-media player {$$props.class}"
	style="aspect-ratio:{width}/{height}"
	on:click
>
	{#if displayVideo}
		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			tabindex="0"
			{poster}
			{loop}
			{src}
			bind:this={video}
			bind:paused
			bind:currentTime
			bind:duration
			on:waiting={() => (loading = true)}
			on:playing={() => (loading = false)}
			on:pause={() => (loading = false)}
			on:ended={() => {
				if (!loop) {
					loading = false;
					playing = false;
				}
			}}
			on:click={toggleOverlay}
			on:dblclick|stopPropagation|preventDefault={skip}
			preload="metadata"
			style={`aspect-ratio: ${width} / ${height}`}
		></video>
		<span class:hide={intentHideOverlay} class="hidable">{formatVideoTime(timeLeft)}</span>
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
		<PlayButton
			{playing}
			{loading}
			class={`center hidable ${hideOverlay ? 'hide' : ''}`}
			on:click={togglePlaying}
		/>
	{/if}
</div>

<style>
	div {
		width: 100%;
		position: relative;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: 1fr auto 1fr;
		z-index: var(--z-media);
	}
	video {
		width: 100%;
		grid-area: 1/1/4/4;
		contain: strict;
		object-fit: contain;
	}

	@container (min-width: 800px) {
		video {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}

	span {
		z-index: 15;
		grid-area: 3/3/4/4;
		place-self: end;
		margin-bottom: 26px;
		margin-inline: 12px;
		font-size: 12px;
		background-color: #0008;
		border-radius: var(--tiny-gap);
		padding: var(--tiny-gap);
		color: white;
		user-select: none;
	}

	input[type='range'] {
		appearance: none;
		-webkit-appearance: none;
		height: 26px;
		z-index: 15;
		margin: 0;
		grid-area: 3/1/4/4;
		align-self: flex-end;
		background-clip: content-box;
		padding-block: 12px;
		margin-inline: 8px;
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
		grid-area: 2/2/3/3;
	}

	.player :global(.hidable) {
		transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
	}

	:global(.hide) {
		opacity: 0;
	}
</style>
