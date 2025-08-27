<script lang="ts">
	import { observeGif } from '$lib/logic/gif-observer';
	import { isSpace } from '$lib/logic/keyboard-utils';
	import { getGifSources } from '$lib/logic/media-utils';
	import gifPreloadEnabled from '$lib/store/gif-preload-enabled-store';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';
	import { calculateAspectRatioCss } from '../post/ratio';

	interface Props {
		post: kurosearch.Post;
		onfullscreen?: () => void;
	}

	let { post, onfullscreen }: Props = $props();

	let media: HTMLImageElement;
	let paused = $state(true);
	let loading = $state(false);
	let overlayHidden = $state(true);

	const onclick = (e: Event) => {
		e.stopPropagation();
		overlayHidden = !overlayHidden;
	};

	const ontoggleplay = () => {
		loading = true;
		paused = !paused;
	};

	let sources = $derived(getGifSources(post.file_url, post.sample_url, post.preview_url));
	let animatedSource = $derived(sources.animated);
	let staticSource = $derived(sources.static);
	let data_src = $derived(paused ? staticSource : animatedSource);
	$effect(() => {
		if (media) {
			media.src = paused ? staticSource : animatedSource;
		}
	});
</script>

<div style="aspect-ratio: {calculateAspectRatioCss(post.width, post.height)}">
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<img
		bind:this={media}
		class="post-media media-img"
		loading="lazy"
		data-src={data_src}
		alt={post.id.toString()}
		width={post.width}
		height={post.height}
		tabindex="0"
		onkeydown={(event) => {
			if (isSpace(event) || event.key === 'k') {
				event.preventDefault();
				ontoggleplay();
			}
		}}
		onload={() => (loading = false)}
		use:observeGif
		{onclick}
	/>
	{#if $gifPreloadEnabled}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			data-src={animatedSource}
			loading="lazy"
			alt="animated source preload"
			class="animated-preload"
			use:observeGif
			{onclick}
		/>
	{/if}

	<PostOverlay
		mediaType="gif"
		hidden={overlayHidden}
		{onfullscreen}
		{paused}
		{loading}
		{ontoggleplay}
	/>
</div>

<style>
	div {
		position: relative;
	}

	.media-img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		contain: strict;
	}

	.animated-preload {
		position: absolute;
		top: 0;
		left: 0;
		user-select: none;
		pointer-events: none;
		width: 0;
		height: 0;
	}

	@container (min-width: 800px) {
		img {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}
</style>
