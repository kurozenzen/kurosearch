<script lang="ts">
	import PostImage from '$lib/components/pure/smart-image/PostImage.svelte';
	import { getPostId } from '$lib/logic/id-utils';
	import { getVideoSources, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';
	import Gif from '../media-gif/Gif.svelte';
	import Video from '../media-video/Video.svelte';
	import PostDetails from '../post-details/PostDetails.svelte';

	interface Props {
		post: kurosearch.Post;
		onfullscreen: (currentTime?: number) => void;
	}

	let { post, onfullscreen }: Props = $props();
</script>

<li id={getPostId(post.id)} class="post">
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="post-container"
		role="group"
		tabindex="0"
		onkeydown={(event) => {
			if (event.key === 'f') {
				onfullscreen();
			}
		}}
		aria-label="Post - press F for fullscreen"
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

		<PostDetails {post} />
	</div>
</li>

<style lang="scss">
	.post {
		position: relative;
		container-type: inline-size;
		list-style: none;
	}

	.post-container {
		outline: none;

		&:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
	}

	@container (min-width: 800px) {
		.post {
			border-radius: var(--border-radius-large);
			overflow: hidden;
		}
	}

	.media {
		line-height: 0;
	}
</style>
