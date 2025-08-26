<script lang="ts">
	import FullscreenVideo from './FullscreenVideo.svelte';
	import FullscreenImage from './FullscreenImage.svelte';
	import FullscreenGif from './FullscreenGif.svelte';
	import { calculateAspectRatio } from '../post/ratio';
	import FullscreenComic from './FullscreenComic.svelte';

	interface Props {
		post: kurosearch.Post;
		ondetails: () => void;
		onended?: () => void;
	}

	let { post, onended, ondetails }: Props = $props();
</script>

<div>
	{#if post.type === 'video'}
		<FullscreenVideo {post} {onended} {ondetails} />
	{:else if post.type === 'gif'}
		<FullscreenGif {post} {onended} {ondetails} />
	{:else if post.width / post.height < 0.4}
		<FullscreenComic {post} {onended} {ondetails} />
	{:else}
		<FullscreenImage {post} {onended} {ondetails} />
	{/if}
</div>

<style>
	div {
		height: 100vh;
		width: 100vw;
		contain: strict;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
</style>
