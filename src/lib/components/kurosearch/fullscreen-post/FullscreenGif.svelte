<script module lang="ts">
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import autoplayFullscreenDelay from '$lib/store/autoplay-fullscreen-delay-store';

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

<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import { getGifSources } from '$lib/logic/media-utils';
	import { browser } from '$app/environment';
	import { blurEnabled } from '$lib/store/blur-enabled-store';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';

	interface Props {
		post: kurosearch.Post;
		postId?: number;
	}

	let { post, postId = -1 }: Props = $props();

	// Get callbacks from context instead of props to avoid drilling
	const { ondetails, onended } = getContext<{
		ondetails: () => void;
		onended?: () => void;
	}>('fullscreen-callbacks');

	let sources = $derived(getGifSources(post.file_url, post.sample_url, post.preview_url));

	let currentTime = $state(0);
	let paused = $state(!$autoplayFullscreenEnabled);
	let loading: boolean = $state($autoplayFullscreenEnabled);

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

{#if !paused}
	<button type="button" {onclick} class="image-button">
		<img
			src={sources.animated}
			alt="[{post.type}] post #{post.id}"
			title="[{post.type}] post #{post.id}"
			class:blurred={$blurEnabled}
			onload={() => (loading = false)}
			use:pauseoffscreen
		/>
	</button>
{/if}

<button type="button" {onclick} class="image-button">
	<img
		src={sources.static}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
		class:blurred={$blurEnabled}
	/>
</button>

<PostOverlay
	hidden={overlayHidden}
	mediaType="gif"
	{paused}
	{loading}
	{ontoggleplay}
	bind:currentTime
	{duration}
	{ondetails}
/>

<style lang="scss">
	.image-button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		width: 100vw;
		height: 100vh;
	}

	img {
		display: flex;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		contain: strict;
		pointer-events: none;

		&.blurred {
			filter: blur(20px);
		}
	}
</style>
