<script lang="ts">
	import PreviewedImage from '$lib/components/pure/smart-image/PreviewedImage.svelte';
	import { getPostId } from '$lib/logic/id-utils';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import { isValidUrl } from '$lib/logic/url-utils';
	import alwaysLoop from '$lib/store/always-loop-store';
	import openTagsOnPostClick from '$lib/store/tags-shortcut-store';
	import Gif from '../media-gif/Gif.svelte';
	import Video, { pausePlayingVideo } from '../media-video/Video.svelte';
	import Comments from '../post-comment/Comments.svelte';
	import Summary from '../post-summary/Summary.svelte';
	import PostDetailsTagList from '../tag-list/PostDetailsTagList.svelte';
	import FullscreenButton from './FullscreenButton.svelte';
	import Sources from './Sources.svelte';

	interface Props {
		post: kurosearch.Post;
		openTab?: string;
		onfullscreen: () => void;
	}

	let { post, openTab = undefined, onfullscreen }: Props = $props();

	const onfullscreeninteral = () => {
		pausePlayingVideo();
		onfullscreen();
	};

	const selectTab = (tab: string) => {
		openTab = openTab === tab ? undefined : tab;
	};

	const openImmediate = () => {
		if ($openTagsOnPostClick) {
			// TODO: remove this when tags shortcut is removed
			selectTab('tags');
		}
	};

	const links = [
		new URL(`${window.location.origin}/post?id=${post.id}`),
		new URL(`https://rule34.xxx/index.php?page=post&s=view&id=${post.id}`),
		new URL(post.file_url),
		...(post.source
			? post.source
					.split(' ')
					.filter((x) => isValidUrl(x))
					.map((x) => new URL(x))
			: [])
	];
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<li
	id={getPostId(post.id)}
	class="post"
	class:openTab
	onkeydown={(event) => {
		if (event.key === 'f') {
			onfullscreeninteral();
		}
	}}
>
	<div>
		{#if post.type === 'image'}
			<PreviewedImage {post} onclick={openImmediate} />
		{:else if post.type === 'video'}
			{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
			<Video
				src={sources.animated}
				poster={sources.static}
				width={post.width}
				height={post.height}
				loop={$alwaysLoop || isLoop(post.tags)}
				onclick={openImmediate}
			/>
		{:else}
			<Gif {post} onclick={openImmediate} />
		{/if}
	</div>

	<FullscreenButton onclick={onfullscreeninteral} />

	<div class="details">
		<Summary
			active={openTab}
			{post}
			links={links.length}
			ontags={() => selectTab('tags')}
			oncomments={() => selectTab('comments')}
			onlinks={() => selectTab('links')}
		/>

		{#if openTab === 'tags'}
			<PostDetailsTagList tags={post.tags} />
		{:else if openTab === 'comments'}
			<Comments {post} />
		{:else if openTab === 'links'}
			<Sources {links} />
		{/if}
	</div>
</li>

<style>
	.post {
		position: relative;
		container-type: inline-size;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
		padding: var(--small-gap);
		background-color: var(--background-1);
	}

	@container (min-width: 800px) {
		.details {
			border-radius: 0 0 var(--border-radius-large) var(--border-radius-large);
		}
	}

	@keyframes slide-down {
		from {
			transform: translateY(-100px);
		}

		to {
			transform: translateY(0px);
		}
	}
</style>
