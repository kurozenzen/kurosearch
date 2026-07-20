<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import { keybindFsLeave, keybindPostFavourite } from '$lib/logic/keybinds/keyboard-utils';
	import { getGifSources, getVideoSources, isComic, isLoop } from '$lib/logic/media-utils';
	import alwaysLoop from '$lib/store/always-loop-store';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import { innerHeight, innerWidth } from 'svelte/reactivity/window';
	import PostDetailsFull from '../post-details/PostDetailsFull.svelte';
	import { calculateAspectRatio } from '../post/ratio';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';

	interface Props {
		post: kurosearch.Post;
		onclose: () => void;
	}

	let { post, onclose }: Props = $props();

	let clientAspectRatio = $derived(calculateAspectRatio(innerWidth.current, innerHeight.current));
	let postAspectRatio = $derived(calculateAspectRatio(post.width, post.height));
	let format = $derived.by(() => {
		if (postAspectRatio / clientAspectRatio > 0.7) return 'vertical';
		if (isComic(postAspectRatio)) return 'scrollable';
		return 'horizontal';
	});

	onMount(() =>
		on(window, 'keydown', (event) => {
			if (keybindFsLeave(event)) {
				onclose();
			}
			if (keybindPostFavourite(event)) {
				event.preventDefault();
				event.stopPropagation();
				favouritePostsStore.toggleFavourite(post);
			}
		})
	);
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

	.scrollable #media {
		flex: 0 0 70vh;
		width: 70vh;
		overflow-y: scroll;
	}
	.scrollable img {
		width: 100%;
		height: unset;
	}
</style>
