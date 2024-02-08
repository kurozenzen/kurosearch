<script lang="ts">
	import Sources from './Sources.svelte';

	import Comments from './Comments.svelte';

	import Image from '../media-image/Image.svelte';
	import Video from '../media-video/Video.svelte';
	import Gif from '../media-gif/Gif.svelte';
	import { createEventDispatcher } from 'svelte';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';
	import { getPostId } from '$lib/logic/id-utils';
	import Summary from '../details/Summary.svelte';
	import PostDetailsTagList from '../tag-list/PostDetailsTagList.svelte';
	import FullscreenButton from './FullscreenButton.svelte';
	import { isValidUrl } from '$lib/logic/url-utils';

	const dispatch = createEventDispatcher();

	export let post: kurosearch.Post;
	export let openTab: string | undefined = undefined;

	const selectTab = (tab: string) => {
		if (openTab === tab) {
			openTab = undefined;
		} else {
			openTab = tab;
		}
	};

	const links = [
		new URL(`https://kurosearch.com/post?id=${post.id}&src=${encodeURIComponent(post.file_url)}`),
		new URL(`https://rule34.xxx/index.php?page=post&s=view&id=${post.id}`),
		...post.source
			.split(' ')
			.filter((x) => isValidUrl(x))
			.map((x) => new URL(x))
	];
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	id={getPostId(post.id)}
	class="post"
	class:openTab
	on:keydown={(event) => {
		if (event.key === 'f') {
			dispatch('fullscreen');
		}
	}}
>
	<div>
		{#if post.type === 'image'}
			<Image {post} />
		{:else if post.type === 'video'}
			{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
			<Video
				src={sources.animated}
				poster={sources.static}
				width={post.width}
				height={post.height}
				loop={$alwaysLoop || isLoop(post.tags)}
			/>
		{:else}
			<Gif {post} />
		{/if}
	</div>

	<FullscreenButton on:click={() => dispatch('fullscreen')} />

	<div class="details">
		<Summary
			active={openTab}
			{post}
			links={links.length}
			on:tags={() => selectTab('tags')}
			on:comments={() => selectTab('comments')}
			on:links={() => selectTab('links')}
		/>

		{#if openTab === 'tags'}
			<PostDetailsTagList tags={post.tags} />
		{:else if openTab === 'comments'}
			<Comments {post} />
		{:else if openTab === 'links'}
			<Sources {links} />
		{/if}
	</div>
</div>

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
			--radius: calc(2 * var(--border-radius));
			border-radius: 0 0 var(--radius) var(--radius);
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
