<script lang="ts">
	import { setContext } from 'svelte';
	import FullscreenComic from './FullscreenComic.svelte';
	import FullscreenGif from './FullscreenGif.svelte';
	import FullscreenImage from './FullscreenImage.svelte';
	import FullscreenVideo from './FullscreenVideo.svelte';

	interface Props {
		post: kurosearch.Post;
		ondetails: () => void;
		onended?: () => void;
		startAt?: number;
	}

	let { post, onended, ondetails, startAt }: Props = $props();

	// Provide callbacks via context to avoid prop drilling through media type components
	setContext('fullscreen-callbacks', { ondetails, onended });
</script>

<div>
	{#if post.type === 'video'}
		<FullscreenVideo {post} {startAt} />
	{:else if post.type === 'gif'}
		<FullscreenGif {post} />
	{:else if post.width / post.height < 0.4}
		<FullscreenComic {post} />
	{:else}
		<FullscreenImage {post} />
	{/if}
</div>

<style lang="scss">
	div {
		height: 100vh;
		width: 100vw;
		contain: strict;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
</style>
