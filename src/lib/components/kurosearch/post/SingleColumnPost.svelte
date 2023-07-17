<script lang="ts">
	import Image from '../media-image/Image.svelte';
	import Video from '../media-video/Video.svelte';
	import Gif from '../media-gif/Gif.svelte';
	import Details from '../details/Details.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const toggleOpen = () => (open = !open);

	export let post: kurosearch.Post;
	export let open = false;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="post_{post.id}" class="post" class:open>
	{#if post.type === 'image'}
		<Image {post} on:click={toggleOpen} {open} />
	{:else if post.type === 'video'}
		<Video
			src={post.file_url}
			poster={post.sample_url}
			width={post.width}
			height={post.height}
			loop={post.tags.some((t) => t.name === 'loop')}
			on:click={toggleOpen}
		/>
	{:else}
		<Gif {post} on:click={toggleOpen} />
	{/if}
	<IconButton
		class="button-fullscreen"
		aria-label="Enter Fullscreen mode"
		on:click={() => dispatch('fullscreen')}
	>
		<i class="codicon codicon-screen-full" />
	</IconButton>
	{#if open}
		<Details {post} />
	{/if}
</div>

<style>
	div {
		position: relative;
		background-color: var(--background-1);
	}

	:global(.button-fullscreen) {
		position: absolute;
		top: 0;
		left: 0;
		z-index: var(--z-media-controls);
	}

	@media (min-width: 800px) {
		div {
			border-radius: var(--border-radius);
		}
	}
</style>
