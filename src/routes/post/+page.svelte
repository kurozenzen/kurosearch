<script>
	import { browser } from '$app/environment';
	import Gif from '$lib/components/kurosearch/media-gif/Gif.svelte';
	import Video from '$lib/components/kurosearch/media-video/Video.svelte';
	import Comments from '$lib/components/kurosearch/post-comment/Comments.svelte';
	import Rating from '$lib/components/kurosearch/rating/Rating.svelte';
	import RelativeTime from '$lib/components/kurosearch/relative-time/RelativeTime.svelte';
	import Score from '$lib/components/kurosearch/score/Score.svelte';
	import ExternalSource from '$lib/components/kurosearch/source-external/ExternalSource.svelte';
	import Rule34Source from '$lib/components/kurosearch/source-rule34/Rule34Source.svelte';
	import PostDetailsTagList from '$lib/components/kurosearch/tag-list/PostDetailsTagList.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import PreviewedImage from '$lib/components/pure/smart-image/PreviewedImage.svelte';
	import { getPost } from '$lib/logic/api-client/posts/posts';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';

	const url = browser ? new URL(location.href) : undefined;
	const id = url && url.searchParams.has('id') ? Number(url.searchParams.get('id')) : undefined;
	const src = url && url.searchParams.get('src');

	$: ext = decodeURIComponent(src?.split('.')?.at(-1) ?? '');
</script>

<svelte:head>
	<title>kurosearch - Post</title>
	{#if src}
		<meta property="og:image" content={src} />
		<meta property="og:image:secure_url" content={src} />
		<meta property="og:image:type" content="image/{ext}" />
		<meta property="og:image:alt" content="Post {id}" />
	{/if}
	<meta name="description" content="View a single post." />
</svelte:head>

<div>
	{#if id}
		{#await getPost(id)}
			<LoadingAnimation />
		{:then post}
			{#if post.type === 'image'}
				<PreviewedImage {post} />
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
			<section>
				<div class="flex-row">
					<Rating value={post.rating} />
					<span>•</span>
					<span>{post.type.toUpperCase()}</span>
					<span>•</span>
					<Score value={post.score} />
					<span>•</span>
					<RelativeTime value={post.change} />
				</div>

				<h3>Tags</h3>
				<PostDetailsTagList tags={post.tags} />

				<h3>Links</h3>
				<div class="flex-row">
					<ExternalSource source="https://rule34.xxx/index.php?page=post&s=view&id={post.id}" />
					<span>•</span>
					<Rule34Source url={post.file_url} />
					{#if post.source}
						<span>•</span>
						<ExternalSource source={post.source} />
					{/if}
				</div>

				<h3>Comments</h3>
				<Comments {post} />
			</section>
		{/await}
	{/if}
</div>

<style>
	h3 {
		color: var(--text-highlight);
	}
	div {
		background-color: var(--background-1);
		border-radius: var(--border-radius);
	}
	section {
		display: flex;
		flex-direction: column;
		padding: var(--grid-gap);
		gap: var(--grid-gap);
	}

	.flex-row {
		display: flex;
		align-items: center;
		gap: var(--small-gap);
		overflow-x: auto;
	}
</style>
