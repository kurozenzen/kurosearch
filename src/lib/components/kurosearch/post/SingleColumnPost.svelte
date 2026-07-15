<script lang="ts">
	import PostImage from '$lib/components/pure/smart-image/PostImage.svelte';
	import { getPostId } from '$lib/logic/id-utils';
	import {
		isInputFocused,
		keybindFsEnter,
		keybindPostComments,
		keybindPostFavourite,
		keybindPostLinks,
		keybindPostTags
	} from '$lib/logic/keybinds/keyboard-utils';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';
	import Gif from '../media-gif/Gif.svelte';
	import Video from '../media-video/Video.svelte';
	import PostDetailsTab from '../post-details/PostDetailsTab.svelte';

	interface Props {
		post: kurosearch.Post;
		onfullscreen: (currentTime?: number) => void;
	}

	let { post, onfullscreen }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<li
	tabindex="0"
	id={getPostId(post.id)}
	class="post"
	onkeydown={(event) => {
		if (isInputFocused()) {
			return;
		}
		if (!(event.target instanceof HTMLElement)) {
			return;
		}
		if (keybindFsEnter(event)) {
			event.preventDefault();
			event.stopPropagation();
			onfullscreen();
		}
		if (keybindPostLinks(event)) {
			event.target.querySelector<HTMLElement>('button[data-tab="links"]')?.click();
		}
		if (keybindPostComments(event)) {
			event.target.querySelector<HTMLElement>('button[data-tab="comments"]')?.click();
		}
		if (keybindPostTags(event)) {
			event.target.querySelector<HTMLElement>('button[data-tab="tags"]')?.click();
		}
		if (keybindPostFavourite(event)) {
			favouritePostsStore.toggleFavourite(post);
		}
	}}
>
	<div class="media">
		{#if post.type === 'image'}
			<PostImage {post} {onfullscreen} />
		{:else if post.type === 'video'}
			{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
			<Video
				src={sources.animated}
				poster={sources.static}
				width={post.width}
				height={post.height}
				loop={$alwaysLoop || isLoop(post.tags)}
				{onfullscreen}
			/>
		{:else}
			<Gif {post} {onfullscreen} />
		{/if}
	</div>

	<PostDetailsTab {post} />
</li>

<style>
	.post {
		position: relative;
		container-type: inline-size;
	}
</style>
