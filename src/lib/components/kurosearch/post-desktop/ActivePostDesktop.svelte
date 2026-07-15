<script lang="ts">
	import Comments from '$lib/components/kurosearch/post-comment/Comments.svelte';
	import Rating from '$lib/components/kurosearch/rating/Rating.svelte';
	import RelativeTime from '$lib/components/kurosearch/relative-time/RelativeTime.svelte';
	import Score from '$lib/components/kurosearch/score/Score.svelte';
	import ExternalSource from '$lib/components/kurosearch/source-external/ExternalSource.svelte';
	import KurosearchSource from '$lib/components/kurosearch/source-kurosearch/KurosearchSource.svelte';
	import Rule34Source from '$lib/components/kurosearch/source-rule34/Rule34Source.svelte';
	import PostDetailsTagList from '$lib/components/kurosearch/tag-list/PostDetailsTagList.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import { getGifSources, getVideoSources, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';
	import PostDetailsFull from '../post-details/PostDetailsFull.svelte';
	import { calculateAspectRatio } from '../post/ratio';
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';

	interface Props {
		post: kurosearch.Post;
		onclose: () => void;
	}

	let { post, onclose }: Props = $props();

	let clientAspectRatio = $derived(calculateAspectRatio(innerWidth.current, innerHeight.current));
	let postAspectRatio = $derived(calculateAspectRatio(post.width, post.height));
	let format = $derived.by(() => {
		if (postAspectRatio / clientAspectRatio > 0.7) return 'vertical';
		if (postAspectRatio < 0.4) return 'scrollable';
		return 'horizontal';
	});
</script>

<section id="active-post" class={format}>
	<IconButton class="button-close mixin-invisible" onclick={onclose}>
		<i class="codicon codicon-close"></i>
	</IconButton>

	{#if post.type === 'video'}
		{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
		<!-- svelte-ignore a11y_media_has_caption -->
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<video
			src={sources.animated}
			poster={sources.static}
			width={post.width}
			height={post.height}
			loop={$alwaysLoop || isLoop(post.tags)}
			controls
		/>
	{/if}
	{#if post.type === 'gif'}
		{@const sources = getGifSources(post.file_url, post.sample_url, post.preview_url)}
		<img src={sources.animated} alt="active post" />
	{/if}
	{#if post.type === 'image'}
		{#if format === 'scrollable'}
			<div id="media">
				<img src={post.file_url} alt="active post" />
			</div>
		{:else}
			<img src={post.file_url} alt="active post" />
		{/if}
	{/if}

	<PostDetailsFull {post} />
</section>

<style>
	#active-post {
		position: fixed;
		top: 0;
		left: 0;
		width: 100dvw;
		height: 100dvh;
		z-index: 99;
		display: flex;
		background-color: var(--background-0);

		&.vertical {
			flex-direction: column;
			overflow-y: scroll;

			img,
			video {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		&.horizontal,
		&.scrollable {
			justify-content: center;
		}
	}

	.horizontal img,
	.horizontal video {
		height: 100%;
		width: auto;
		object-fit: contain;
	}

	.horizontal #details,
	.scrollable #details {
		flex: 0 1 50vw;
		overflow-y: auto;
	}

	.scrollable #media {
		flex: 0 0 70vh;
		width: 70vh;
		overflow-y: scroll;
	}
	.scrollable img {
		width: 100%;
		height: unset;
	}

	:not(.vertical) #details {
		overflow-y: auto;
	}
</style>
