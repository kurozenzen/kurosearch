<script lang="ts">
	import ObsImg from '#lib/components/pure/media-observed/obs-img.svelte';
	import { observeGif } from '#lib/logic/gif-observer';
	import { getGifSources } from '#lib/logic/media-utils';
	import { gifPreloadEnabled } from '#lib/store';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';
	import { calculateAspectRatioCss } from '../post/ratio';

	interface Props {
		post: kurosearch.Post;
		onfullscreen?: () => void;
	}

	let { post, onfullscreen }: Props = $props();

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
</script>

<figure style="aspect-ratio: {calculateAspectRatioCss(post.width, post.height)}">
	<ObsImg
		class="post-media media-img"
		loading="lazy"
		src={paused ? sources.static : sources.animated}
		alt={post.id.toString()}
		width={post.width}
		height={post.height}
		onload={() => (loading = false)}
		{onclick}
	/>
	{#if gifPreloadEnabled.value}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			data-src={sources.animated}
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
</figure>

<style>
	figure {
		position: relative;
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
</style>
