<script lang="ts">
	import Comments from './Comments.svelte';

	import Image from '../media-image/Image.svelte';
	import Video from '../media-video/Video.svelte';
	import Gif from '../media-gif/Gif.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';
	import { getPostId } from '$lib/logic/id-utils';
	import Summary from '../details/Summary.svelte';
	import PostDetailsTagList from '../tag-list/PostDetailsTagList.svelte';
	import FullscreenButton from './FullscreenButton.svelte';

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
			on:tags={() => selectTab('tags')}
			on:comments={() => selectTab('comments')}
		/>

		{#if openTab === 'tags'}
			<PostDetailsTagList tags={post.tags} />
		{:else if openTab === 'comments'}
			<Comments {post} />
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
			border-radius: 0 0 var(--border-radius) var(--border-radius);
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
