<script lang="ts">
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import Gif from '../media-gif/Gif.svelte';
	import Details from '../details/Details.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';

	const dispatch = createEventDispatcher();
	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'f') {
			event.preventDefault();
			event.stopPropagation();
			dispatch('close');
		}
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			event.stopPropagation();
			dispatch('previous');
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			event.stopPropagation();
			dispatch('next');
		}
		if (event.key === ' ') {
			event.preventDefault();
			event.stopPropagation();
			console.log('play');
			if (media) {
				if (media.paused) media.play();
				else media.pause();
			}
			const playButton = document.querySelector('.fullscreen.circle') as HTMLElement;
			if (playButton) {
				playButton.click();
			}
		}
	};

	export let post: kurosearch.Post;

	let zoomed = post.width / post.height < 0.33;
	let media: HTMLVideoElement;

	onMount(() => {
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => document.removeEventListener('keydown', keybinds));
</script>

<Fullscreen on:close>
	<div>
		{#if post.type === 'image'}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img
				class="post-media"
				src={post.file_url}
				alt="Image of Post {post.id}"
				class:zoomed
				on:click={() => (zoomed = !zoomed)}
			/>
		{:else if post.type === 'video'}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video class="post-media" src={post.file_url} bind:this={media} controls />
		{:else}
			<Gif {post} />
		{/if}

		<i class="codicon codicon-chevron-down" />
	</div>
	<Details {post} />
	<IconButton on:click={() => dispatch('close')} class="button-close">
		<i class="codicon codicon-close" />
	</IconButton>

	<IconButton on:click={() => dispatch('previous')} class="button-previous">
		<i class="codicon codicon-chevron-left" />
	</IconButton>

	<IconButton on:click={() => dispatch('next')} class="button-next">
		<i class="codicon codicon-chevron-right" />
	</IconButton>
</Fullscreen>

<style>
	div {
		width: 100vw;
		height: 100vh;
		min-height: 100vh;
	}
	img,
	video {
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		z-index: var(--z-media);
	}

	img:hover {
		cursor: zoom-in;
	}

	div:has(.zoomed) {
		min-height: unset;
		height: unset;
	}

	img.zoomed {
		display: block;
		margin: auto;
		max-width: var(--body-width);
		height: auto;
		cursor: zoom-out;
	}

	:global(.button-close) {
		position: fixed;
		top: var(--grid-gap);
		left: var(--grid-gap);
		z-index: var(--z-dialog);
	}

	:global(.button-previous) {
		position: fixed;
		left: var(--grid-gap);
		top: 50%;
		transform: translateY(-50%);
		z-index: var(--z-dialog);
	}

	:global(.button-next) {
		position: fixed;
		right: var(--grid-gap);
		top: 50%;
		transform: translateY(-50%);
		z-index: var(--z-dialog);
	}

	.codicon-chevron-down {
		position: absolute;
		bottom: 2.75rem;
		left: 50%;
		z-index: var(--z-media-controls);
		transform: translateX(-50%);
		pointer-events: none;
	}
</style>
