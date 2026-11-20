<script module lang="ts">
	import {
		autoplayFullscreenDelay,
		autoplayFullscreenEnabled,
		highResolutionEnabled
	} from '$lib/store';

	let duration = $derived(
		autoplayFullscreenEnabled.value ? autoplayFullscreenDelay.value : undefined
	);
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { keybindPlay } from '$lib/logic/keybinds/keyboard-utils';
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
		highResolutionEnabled.value
			? [post.sample_url, post.file_url]
			: [post.preview_url, post.sample_url]
	);

	let currentTime = $state(0);
	let paused = $state(!autoplayFullscreenEnabled.value);
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

		if (currentTime >= autoplayFullscreenDelay.value) {
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
		if (keybindPlay(event)) {
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
		if (autoplayFullscreenEnabled.value) {
			animationHandle = requestAnimationFrame(updateSlider);
		}
	});
	onDestroy(() => {
		cancelAnimationFrame(animationHandle);
	});
</script>

<svelte:window onkeydown={keybinds} />

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

<PostOverlay
	hidden={overlayHidden}
	mediaType="img"
	paused={autoplayFullscreenEnabled.value ? paused : undefined}
	{loading}
	{ontoggleplay}
	bind:currentTime
	{duration}
	{ondetails}
/>

<style>
	img {
		display: block;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
	}
</style>
