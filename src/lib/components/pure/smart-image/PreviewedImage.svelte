<script lang="ts">
	import {
		calculateAspectRatio,
		calculateAspectRatioCss
	} from '$lib/components/kurosearch/post/ratio';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';
	import { createEventDispatcher } from 'svelte';
	import ObservedImage from './ObservedImage.svelte';

	const dispatch = createEventDispatcher();

	export let post: kurosearch.Post;

	const onclick = () => {
		open = !open;
		dispatch('click');
	};

	let open: boolean = false;

	$: previewSrc = post.preview_url;
	$: actualSrc = highResolutionEnabled ? post.file_url : post.sample_url;
	$: alt = post.id.toString();
	$: ratio = calculateAspectRatio(post.width, post.height);
	$: expandable = ratio < 0.4;
	$: cssRation = calculateAspectRatioCss(post.width, post.height);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class:expandable class:open {onclick} style="aspect-ratio: {cssRation};">
	<ObservedImage src={previewSrc} {alt} width={post.width} height={post.height} />
	<ObservedImage src={actualSrc} {alt} width={post.width} height={post.height} />
</div>

<style>
	div {
		position: relative;
	}

	.expandable:not(.open) {
		width: 100%;
		max-height: 100vh;
		overflow: hidden;
		position: relative;
	}

	.expandable:not(.open)::before {
		position: absolute;
		z-index: 100;
		text-align: center;
		width: 100%;
		content: 'Expand';
		padding: var(--grid-gap);
		background: linear-gradient(0deg, var(--background-0) 0%, transparent 100%);
		user-select: none;
		bottom: 0;
		color: var(--text-highlight);
	}
</style>
