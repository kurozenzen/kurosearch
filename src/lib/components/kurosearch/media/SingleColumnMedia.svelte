<script lang="ts">
	import PostImage from '$lib/components/pure/smart-image/PostImage.svelte';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import { alwaysLoop } from '$lib/store';
	import Gif from '../media-gif/Gif.svelte';
	import Video from '../media-video/Video.svelte';

	interface Props {
		post: kurosearch.Post;
		onfullscreen?: (currentTime?: number) => void;
	}

	let { post, onfullscreen }: Props = $props();
</script>

{#if post.type === 'image'}
	<PostImage {post} {onfullscreen} />
{:else if post.type === 'video'}
	{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
	<Video
		src={sources.animated}
		poster={sources.static}
		width={post.width}
		height={post.height}
		loop={alwaysLoop.value || isLoop(post.tags)}
		{onfullscreen}
	/>
{:else}
	<Gif {post} {onfullscreen} />
{/if}
