<script lang="ts">
	import { formatVideoTime } from '$lib/logic/format-time';
	import { isSpace } from '$lib/logic/keyboard-utils';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import PlayButton from '../button-play/PlayButton.svelte';

	interface Props {
		src: string;
		poster: string;
		width: number;
		height: number;
		loop?: boolean;
		class?: string;
		onclick?: () => void;
	}

	const SKIP_TIME = 5;

	let { src, poster, width, height, loop = false, onclick, ...rest }: Props = $props();

	let container: HTMLDivElement;
	let video: HTMLVideoElement | undefined = $state(undefined);

	let playing = $state(false);
	let loading = $state(false);
	let currentTime = $state(0);
	let duration = $state(0);
	let displayVideo = $state(false);
	let intentHideOverlay = $state(false);

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
										playing = false;
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

	let timeLeft = $derived(duration - currentTime);
	let paused = $derived(!playing);
	let percent = $derived((currentTime / duration) * 98 + 1);
	let hideOverlay = $derived(playing && !loading && intentHideOverlay);

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
					playing = false;
				}
			}}
			onclick={toggleOverlay}
			ondblclick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				skip(e);
			}}
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
			onclick={togglePlaying}
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
