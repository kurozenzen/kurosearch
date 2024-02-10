<script lang="ts">
	import FullscreenVideo from './FullscreenVideo.svelte';
	import FullscreenImage from './FullscreenImage.svelte';

	export let post: kurosearch.Post;
</script>

<div>
	{#if post.type === 'video'}
		<FullscreenVideo {post} on:ended />
	{:else}
		<FullscreenImage {post} on:ended />
	{/if}
</div>

<style>
	div {
		height: 100vh;
		width: 100vw;
	}
</style>
