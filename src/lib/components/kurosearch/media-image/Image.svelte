<script lang="ts">
	import { base } from '$app/paths';
	import { clickOnEnter } from '$lib/logic/keyboard-utils';
	import { postObserver } from '$lib/logic/post-observer';
	import { onDestroy, onMount } from 'svelte';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';

	export let post: kurosearch.Post;
	export let open: boolean;

	$: ratio = post.width / post.height;
	$: expandable = ratio < 0.33;
	$: src = highResolutionEnabled ? post.file_url : post.sample_url;

	let media: HTMLImageElement;

	onMount(() => {
		postObserver?.observe(media);
	});
	onDestroy(() => {
		postObserver?.unobserve(media);
	});
</script>

<div class:expandable class:open>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img
		bind:this={media}
		class="post-media"
		loading="lazy"
		data-src={src}
		alt={post.id.toString()}
		style={`aspect-ratio: ${post.width} / ${post.height}`}
		width={post.width}
		height={post.height}
		tabindex="0"
		on:click
		on:keydown={clickOnEnter}
		on:error={(event) => (event.target.src = `${base}/assets/failed-to-load.svg`)}
	/>
</div>

<style>
	img {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		contain: strict;
		z-index: var(--z-media);
		border-radius: var(--border-radius);
	}

	.expandable:not(.open) {
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
		pointer-events: none;
		bottom: 0;
		color: var(--text-highlight);
	}
</style>
