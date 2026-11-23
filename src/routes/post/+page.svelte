<script>
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import LayoutMobile from '$lib/components/kurosearch/layout-mobile/LayoutMobile.svelte';
	import SingleColumnMedia from '$lib/components/kurosearch/media/SingleColumnMedia.svelte';
	import PostDetailsFull from '$lib/components/kurosearch/post-details/PostDetailsFull.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import { getPost } from '$lib/logic/api-client/posts/posts';

	let idString = $derived(browser ? page.url.searchParams.get('id') : null);
	let id = $derived(idString ? parseInt(idString) : null);
</script>

<svelte:head>
	<title>kurosearch - Post {id}</title>
	<meta name="description" content="View a single post." />
</svelte:head>

<LayoutMobile>
	{#if id === null}
		<span>Invalid post ID</span>
	{:else}
		{#await getPost(id)}
			<LoadingAnimation />
		{:then post}
			{#if post === undefined}
				<span>Post not found</span>
			{:else}
				<SingleColumnMedia {post} />
				<PostDetailsFull {post} />
			{/if}
		{/await}
	{/if}
</LayoutMobile>
=

<style>
	article {
		background-color: var(--background-1);
		border-radius: var(--border-radius-small);
	}
</style>
