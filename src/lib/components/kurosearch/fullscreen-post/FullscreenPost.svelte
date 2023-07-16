<script lang="ts">
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { createEventDispatcher } from 'svelte';
	import Gif from '../media-gif/Gif.svelte';
	import Details from '../details/Details.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';

	const dispatch = createEventDispatcher();

	export let post: kurosearch.Post;

	let zoomed = post.width / post.height < 0.33;
</script>

<Fullscreen on:close>
	<div>
		{#if post.type === 'image'}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img
				src={post.file_url}
				alt="Image of Post {post.id}"
				class:zoomed
				on:click={() => (zoomed = !zoomed)}
			/>
		{:else if post.type === 'video'}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video src={post.file_url} controls />
		{:else}
			<Gif {post} />
		{/if}
		<IconButton on:click={() => dispatch('close')} class="button-close">
			<i class="codicon codicon-close" />
		</IconButton>

		<i class="codicon codicon-chevron-down" />
	</div>
	<Details {post} />
</Fullscreen>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
	img,
	video {
		width: 100vw;
		height: 100vh;
		object-fit: contain;
	}

	img:hover {
		cursor: zoom-in;
	}

	div:has(.zoomed) {
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
		position: absolute;
		top: var(--grid-gap);
		left: var(--grid-gap);
		z-index: var(--z-media-controls);
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
