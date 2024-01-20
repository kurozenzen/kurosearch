<script lang="ts">
	import { postObserver } from '$lib/logic/post-observer';
	import { onDestroy, onMount } from 'svelte';
	import PlayButton from '../button-play/PlayButton.svelte';
	import { isSpace, clickOnEnter } from '$lib/logic/keyboard-utils';
	import { getGifSources } from '$lib/logic/media-utils';
	import { base } from '$app/paths';

	export let post: kurosearch.Post;

	let media: HTMLImageElement;
	let playing = false;
	let loading = false;

	$: sources = getGifSources(post.file_url, post.sample_url, post.preview_url);
	$: animatedSource = sources.animated;
	$: staticSource = sources.static;
	$: data_src = playing ? animatedSource : staticSource;
	$: {
		if (media) {
			media.src = playing ? animatedSource : staticSource;
		}
	}

	onMount(() => postObserver?.observe(media));
	onDestroy(() => postObserver?.unobserve(media));
</script>

<div class="container" style={`aspect-ratio: ${post.width} / ${post.height}`}>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img
		class="post-media media-img"
		loading="lazy"
		data-src={data_src}
		alt={post.id.toString()}
		width={post.width}
		height={post.height}
		bind:this={media}
		tabindex="0"
		on:click
		on:keydown={(event) => {
			clickOnEnter(event);
			if (isSpace(event)) {
				event.preventDefault();
				loading = true;
				playing = !playing;
			}
		}}
		on:load={() => (loading = false)}
		on:error={(event) => {
			loading = false;
			event.target.src = `${base}/assets/failed-to-load.svg`;
		}}
	/>

	<PlayButton bind:playing bind:loading class="center" />
</div>

<style>
	.media-img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		/* contain: strict; */
		border-radius: var(--border-radius);
		grid-area: 1/1/4/4;
	}

	.container {
		position: relative;
		z-index: var(--z-media);
		border-radius: var(--border-radius);
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
</style>
