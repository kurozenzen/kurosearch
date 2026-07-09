<script module lang="ts">
	import autoplayFullscreenDelay from '$lib/store/autoplay-fullscreen-delay-store';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';

	let enabled = false;
	let delay = 15;

	let duration: number | undefined = $state(undefined);

	autoplayFullscreenEnabled.subscribe((value) => {
		enabled = value;
		duration = enabled ? delay : undefined;
	});
	autoplayFullscreenDelay.subscribe((value) => {
		delay = value;
		duration = enabled ? delay : undefined;
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<script lang="ts">
	import { browser } from '$app/environment';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';
	import { onDestroy, onMount } from 'svelte';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';
	import { on } from 'svelte/events';

	interface Props {
		post: kurosearch.Post;
		postId?: number;
		ondetails: () => void;
		onended?: () => void;
	}

	let { post, postId = -1, onended, ondetails }: Props = $props();

	let sources = $derived(
		highResolutionEnabled ? [post.sample_url, post.file_url] : [post.preview_url, post.sample_url]
	);

	let currentTime = $state(0);
	let paused = $state(!$autoplayFullscreenEnabled);
	let loading = $state(true);
	let imgElement: HTMLImageElement | undefined = $state();

	let overlayHidden = $state(true);
	const onclick = (e: Event) => {
		e.stopPropagation();
		overlayHidden = !overlayHidden;
	};

	let animationHandle: number;

	let lastFrameTime = Date.now();

	const updateSlider = () => {
		// frame times
		const currentFrameTime = Date.now();
		const difference = currentFrameTime - lastFrameTime;
		lastFrameTime = currentFrameTime;

		if (!paused && !loading) {
			currentTime += difference / 1000;
		}

		if (currentTime >= $autoplayFullscreenDelay) {
			onended?.();
			currentTime = 0;
		}

		animationHandle = requestAnimationFrame(updateSlider);
	};

	const ontoggleplay = () => {
		paused = !paused;
	};

	$effect(() => {
		sources;
		if (imgElement && imgElement.complete) {
			loading = false;
		} else {
			loading = true;
		}
	});

	$effect(() => {
		if (postId !== post.id) {
			postId = post.id;
			currentTime = 0;
		}
	});

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
		}
		return on(window, 'keydown', keybinds);
	});
	onDestroy(() => {
		cancelAnimationFrame(animationHandle);
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div class="media-container">
	<img
		bind:this={imgElement}
		class="main-image"
		class:loaded={!loading}
		src={sources[1]}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
		use:pauseoffscreen
		onload={() => (loading = false)}
		{onclick}
	/>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<img
		class="preview"
		class:loaded={!loading}
		src={sources[0]}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
		{onclick}
	/>
</div>

<PostOverlay
	hidden={overlayHidden}
	mediaType="img"
	paused={$autoplayFullscreenEnabled ? paused : undefined}
	{loading}
	{ontoggleplay}
	bind:currentTime
	{duration}
	{ondetails}
/>

<style>
	.media-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
	}

	.main-image {
		opacity: 0;
		transition: opacity 0.3s ease-out;
		z-index: 2;
	}

	.main-image.loaded {
		opacity: 1;
	}

	.preview {
		filter: blur(15px);
		transform: scale(1.05);
		transition: opacity 0.3s ease-out;
		z-index: 1;
	}

	.preview.loaded {
		opacity: 0;
		pointer-events: none;
	}
</style>
