<script lang="ts">
	import PlayButton from '../button-play/PlayButton.svelte';
	import { isSpace, clickOnEnter } from '$lib/logic/keyboard-utils';
	import { getGifSources } from '$lib/logic/media-utils';
	import { calculateAspectRatioCss } from '../post/ratio';
	import { observeGif } from '$lib/logic/gif-observer';
	import gifPreloadEnabled from '$lib/store/gif-preload-enabled-store';

	interface Props {
		post: kurosearch.Post;
		onclick?: () => void;
	}

	let { post, onclick }: Props = $props();

	let media: HTMLImageElement;
	let playing = $state(false);
	let loading = $state(false);

	let sources = $derived(getGifSources(post.file_url, post.sample_url, post.preview_url));
	let animatedSource = $derived(sources.animated);
	let staticSource = $derived(sources.static);
	let data_src = $derived(playing ? animatedSource : staticSource);
	$effect(() => {
		if (media) {
			media.src = playing ? animatedSource : staticSource;
		}
	});
</script>

<div class="container" style="aspect-ratio: {calculateAspectRatioCss(post.width, post.height)}">
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<img
		class="post-media media-img"
		loading="lazy"
		data-src={data_src}
		alt={post.id.toString()}
		width={post.width}
		height={post.height}
		bind:this={media}
		tabindex="0"
		{onclick}
		onkeydown={(event) => {
			clickOnEnter(event);
			if (isSpace(event)) {
				event.preventDefault();
				loading = true;
				playing = !playing;
			}
		}}
		onload={() => (loading = false)}
		use:observeGif
	/>
	{#if $gifPreloadEnabled}
		<img
			data-src={animatedSource}
			loading="lazy"
			alt="animated source preload"
			class="animated-preload"
			use:observeGif
		/>
	{/if}

	<PlayButton
		bind:playing
		bind:loading
		class="center"
		onclick={() => {
			loading = true;
			playing = !playing;
		}}
	/>
</div>

<style>
	.animated-preload {
		position: absolute;
		user-select: none;
		pointer-events: none;
		width: 0;
		height: 0;
	}
	.media-img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		contain: strict;
		grid-area: 1/1/4/4;
	}

	.container {
		position: relative;
		z-index: var(--z-media);
		width: 100%;
		height: 100%;
	}

	.container :global(.center) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: var(--z-media-controls);
	}

	@container (min-width: 800px) {
		img {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}
</style>
