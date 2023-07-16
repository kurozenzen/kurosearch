<script lang="ts">
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { createEventDispatcher } from 'svelte';
	import Gif from '../media-gif/Gif.svelte';
	import Details from '../details/Details.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';

	const dispatch = createEventDispatcher();

	export let post: kurosearch.Post;
</script>

<Fullscreen on:close>
	<div>
		{#if post.type === 'image'}
			<img src={post.file_url} alt="Image of Post {post.id}" />
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
		max-width: 100vw;
		max-height: 100vh;
	}
	img,
	video {
		width: 100vw;
		height: 100vh;
		object-fit: contain;
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
