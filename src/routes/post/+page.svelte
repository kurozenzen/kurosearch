<script>
	import { browser } from '$app/environment';
	import Details from '$lib/components/kurosearch/details/Details.svelte';
	import Gif from '$lib/components/kurosearch/media-gif/Gif.svelte';
	import Image from '$lib/components/kurosearch/media-image/Image.svelte';
	import Video from '$lib/components/kurosearch/media-video/Video.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import { getPost } from '$lib/logic/api-client/posts/posts';
	import { isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';

	const url = browser ? new URL(location.href) : undefined;
	const id = url && url.searchParams.has('id') ? Number(url.searchParams.get('id')) : undefined;
	const src = url && url.searchParams.get('src');

	$: ext = src?.split('.')?.at(-1) ?? '';
</script>

<svelte:head>
	<title>kurosearch - Post {id}</title>
	{#if src}
		<meta property="og:image" content={src} />
		<meta property="og:image:secure_url" content={src} />
		<meta property="og:image:type" content="image/{ext}" />
		<meta property="og:image:alt" content="Post {id}" />
	{/if}
</svelte:head>

<div>
	{#if id}
		{#await getPost(id)}
			<LoadingAnimation />
		{:then post}
			{#if post.type === 'image'}
				<Image {post} open />
			{:else if post.type === 'video'}
				<Video
					src={post.file_url}
					poster={post.sample_url}
					width={post.width}
					height={post.height}
					loop={$alwaysLoop || isLoop(post.tags)}
				/>
			{:else}
				<Gif {post} />
			{/if}
			<Details {post} />
		{/await}
	{/if}
</div>

<style>
	div {
		background-color: var(--background-1);
		border-radius: var(--border-radius);
	}
</style>
