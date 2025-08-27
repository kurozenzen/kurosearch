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
			document.addEventListener('keydown', keybinds);
		}
	});
	onDestroy(() => {
		cancelAnimationFrame(animationHandle);
		document.removeEventListener('keydown', keybinds);
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<img
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
	src={sources[0]}
	alt="[{post.type}] post #{post.id}"
	title="[{post.type}] post #{post.id}"
	{onclick}
/>

{#if $autoplayFullscreenEnabled}
	<PostOverlay
		hidden={overlayHidden}
		mediaType="img"
		{paused}
		{loading}
		{ontoggleplay}
		bind:currentTime
		{duration}
		{ondetails}
	/>
{/if}

<style>
	img {
		display: flex;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		contain: strict;
	}
</style>
