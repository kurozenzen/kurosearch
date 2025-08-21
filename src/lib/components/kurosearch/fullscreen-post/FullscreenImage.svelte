<script lang="ts">
	import FullscreenProgress from './FullscreenProgress.svelte';
	import autoplayFullscreenDelay from '$lib/store/autoplay-fullscreen-delay-store';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import { getGifSources } from '$lib/logic/media-utils';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	const dispatch = createEventDispatcher();

	export let post: kurosearch.Post;
	export let postId = -1;

	const getSources = (type: string, file_url: string, sample_url: string, preview_url: string) => {
		if (type === 'gif') {
			const gifSources = getGifSources(file_url, sample_url, preview_url);
			return [gifSources.static, gifSources.animated];
		}

		return highResolutionEnabled ? [sample_url, file_url] : [preview_url, sample_url];
	};

	$: [previewSrc, fullSrc] = getSources(
		post.type,
		post.file_url,
		post.sample_url,
		post.preview_url
	);

	let currentTime = 0;
	let lastFrameTime = Date.now();
	let currentFrameTime = Date.now();
	let difference: number;
	let paused = true;
	let animationHandle: number;

	const updateSlider = () => {
		// frame times
		currentFrameTime = Date.now();
		difference = currentFrameTime - lastFrameTime;
		lastFrameTime = currentFrameTime;

		if (!paused) {
			currentTime += difference / 1000;
		}

		if (currentTime >= $autoplayFullscreenDelay) {
			dispatch('ended');
			currentTime = 0;
		}

		animationHandle = requestAnimationFrame(updateSlider);
	};

	const togglePaused = () => {
		paused = !paused;
	};

	$: {
		if (post.id !== postId) {
			postId = post.id;
			currentTime = 0;
		}
	}

	const keybinds = (event: KeyboardEvent) => {
		if (event.code === 'Space' || event.key === 'k') {
			event.preventDefault();
			event.stopPropagation();
			paused = !paused;
		}
	};

	const observer = browser
		? new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.target) {
							paused = !entry.isIntersecting;
						}
					}
				},
				{ rootMargin: '0px', threshold: 0.5 }
			)
		: null;

	const pauseoffscreen = (target: HTMLElement) => {
		observer?.observe(target);

		return {
			destroy() {
				observer?.unobserve(target);
			}
		};
	};

	onMount(() => {
		if ($autoplayFullscreenEnabled) {
			animationHandle = requestAnimationFrame(updateSlider);
			document.addEventListener('keydown', keybinds);
		}
	});
	onDestroy(() => {
		cancelAnimationFrame(animationHandle);
		document.removeEventListener('keydown', keybinds);
	});

	const preload = (src: string) => {
		return new Promise((resolve) => {
			paused = true;
			let img = new Image();
			img.onload = (e) => {
				resolve(e);
				paused = false;
			};
			img.src = src;
		});
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

{#await preload(fullSrc)}
	<img
		src={previewSrc}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
		on:contextmenu|preventDefault={() => {}}
		on:click={togglePaused}
	/>
	<div>
		<LoadingAnimation />
	</div>
{:then _}
	<img
		src={fullSrc}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
		on:contextmenu|preventDefault={() => {}}
		on:click={togglePaused}
		use:pauseoffscreen
	/>
{/await}

{#if $autoplayFullscreenEnabled}
	<FullscreenProgress bind:value={currentTime} max={$autoplayFullscreenDelay} />
{/if}

<style>
	img {
		display: flex;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		contain: paint;

		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	div {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #0008;
		width: 48px;
		height: 48px;
		border-radius: 24px;
	}
</style>
