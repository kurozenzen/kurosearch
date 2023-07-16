<script>
	import { browser } from '$app/environment';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import { getPost } from '$lib/logic/api-client/posts/posts';

	const id = browser ? Number(window.location.hash.substring(1)) : undefined;
</script>

{#if id}
	{#await getPost(id)}
		<LoadingAnimation />
	{:then post}
		<img src={post.file_url} alt="full size" />
	{/await}
{/if}
