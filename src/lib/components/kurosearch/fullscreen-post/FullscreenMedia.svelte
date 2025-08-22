<script lang="ts">
	import FullscreenVideo from './FullscreenVideo.svelte';
	import FullscreenImage from './FullscreenImage.svelte';

	interface Props {
		post: kurosearch.Post;
		onended?: () => void;
	}

	let { post, onended }: Props = $props();
</script>

<div>
	{#if post.type === 'video'}
		<FullscreenVideo {post} {onended} />
	{:else}
		<FullscreenImage {post} {onended} />
	{/if}
</div>

<style>
	div {
		height: 100vh;
		width: 100vw;
	}
</style>
