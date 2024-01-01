<script lang="ts">
	import Image from '../media-image/Image.svelte';
	import Video from '../media-video/Video.svelte';
	import Gif from '../media-gif/Gif.svelte';
	import Details from '../details/Details.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';
	import { getPostId } from '$lib/logic/id-utils';
	import { replaceHost } from '$lib/logic/url-utils';
	import imageServerUrl from '$lib/store/image-server-url-store';

	const dispatch = createEventDispatcher();
	const toggleOpen = () => (open = !open);

	export let post: kurosearch.Post;
	export let open = false;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	id={getPostId(post.id)}
	class="post"
	class:open
	on:keydown={(event) => {
		if (event.key === 'f') {
			dispatch('fullscreen');
		}
	}}
>
	{#if post.type === 'image'}
		<Image {post} on:click={toggleOpen} {open} />
	{:else if post.type === 'video'}
		{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
		{@const animatedSource = replaceHost(sources.animated, $imageServerUrl)}
		{@const staticSource = replaceHost(sources.static, $imageServerUrl)}
		<Video
			src={animatedSource}
			poster={staticSource}
			width={post.width}
			height={post.height}
			loop={$alwaysLoop || isLoop(post.tags)}
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
