<script>
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import Gif from '$lib/components/kurosearch/media-gif/Gif.svelte';
	import Video from '$lib/components/kurosearch/media-video/Video.svelte';
	import Comments from '$lib/components/kurosearch/post-comment/Comments.svelte';
	import PostDetailsFull from '$lib/components/kurosearch/post-details/PostDetailsFull.svelte';
	import Rating from '$lib/components/kurosearch/rating/Rating.svelte';
	import RelativeTime from '$lib/components/kurosearch/relative-time/RelativeTime.svelte';
	import Score from '$lib/components/kurosearch/score/Score.svelte';
	import ExternalSource from '$lib/components/kurosearch/source-external/ExternalSource.svelte';
	import Rule34Source from '$lib/components/kurosearch/source-rule34/Rule34Source.svelte';
	import PostDetailsTagList from '$lib/components/kurosearch/tag-list/PostDetailsTagList.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import PostImage from '$lib/components/pure/smart-image/PostImage.svelte';
	import { getPost } from '$lib/logic/api-client/posts/posts';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';

	let idString = $derived(browser ? page.url.searchParams.get('id') : null);
	let id = $derived(idString ? parseInt(idString) : null);
</script>

<svelte:head>
	<title>kurosearch - Post {id}</title>
	<meta name="description" content="View a single post." />
</svelte:head>

<div>
	{#if id === null}
		<span>Invalid post ID</span>
	{:else}
		{#await getPost(id)}
			<LoadingAnimation />
		{:then post}
			{#if post === undefined}
				<span>Post not found</span>
			{:else}
				{#if post.type === 'image'}
					<PostImage {post} />
				{:else if post.type === 'video'}
					{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
					{@const animatedSource = sources.animated}
					{@const staticSource = sources.static}
					<Video
						src={animatedSource}
						poster={staticSource}
						width={post.width}
						height={post.height}
						loop={$alwaysLoop || isLoop(post.tags)}
					/>
				{:else}
					<Gif {post} />
				{/if}

				<PostDetailsFull {post} />
			{/if}
		{/await}
	{/if}
</div>

<style>
	div {
		background-color: var(--background-1);
		border-radius: var(--border-radius);
	}
</style>
