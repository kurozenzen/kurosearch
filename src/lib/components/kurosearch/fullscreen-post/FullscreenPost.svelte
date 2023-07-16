<script lang="ts">
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import Image from '../media-image/Image.svelte';
	import Video from '../media-video/Video.svelte';
	import Gif from '../media-gif/Gif.svelte';
	import Details from '../details/Details.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';

	const dispatch = createEventDispatcher();

	export let post: kurosearch.Post;
</script>

<Fullscreen on:close>
	<div class="container">
		<div class="header">
			<IconButton on:click={() => dispatch('close')}><i class="codicon codicon-close" /></IconButton
			>
		</div>
		{#if post.type === 'image'}
			<Image {post} open />
		{:else if post.type === 'video'}
			<Video
				src={post.file_url}
				poster={post.sample_url}
				width={post.width}
				height={post.height}
				loop={post.tags.some((t) => t.name == 'loop')}
			/>
		{:else}
			<Gif {post} />
		{/if}
		<Details {post} />
	</div>
</Fullscreen>

<style>
	.container {
		width: 100%;
		max-width: var(--body-width);
	}

	.header {
		display: flex;
		margin-block-end: var(--grid-gap);
	}
</style>
