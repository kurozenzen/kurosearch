<script lang="ts">
	import FullscreenVideo from './FullscreenVideo.svelte';
	import FullscreenImage from './FullscreenImage.svelte';

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
	{:else}
		<FullscreenImage {post} {onended} {ondetails}/>
	{/if}
</div>

<style>
	div {
		height: 100vh;
		width: 100vw;
	}
</style>
