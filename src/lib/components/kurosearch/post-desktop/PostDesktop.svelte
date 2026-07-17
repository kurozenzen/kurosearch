<script lang="ts">
	import playSrc from '$lib/assets/play.svg?url';
	import { getPostId } from '$lib/logic/id-utils';
	import { keybindFsEnter, keybindPostFavourite } from '$lib/logic/keybinds/keyboard-utils';
	import { isImage } from '$lib/logic/media-utils';
	import type { KeyboardEventHandler } from 'svelte/elements';
	import { calculateAspectRatio } from '../post/ratio';
	import RelativeTime from '../relative-time/RelativeTime.svelte';
	import Score from '../score/Score.svelte';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';

	const maxRatio = 1 / 2;
	const rowsPerSquare = 3;

	const postTypeLabel = (post: kurosearch.Post) => {
		switch (post.type) {
			case 'image':
				return ratio < 0.4 ? 'com' : 'img';
			case 'video':
				return 'vid';
			case 'gif':
				return 'gif';
			default:
				return '???';
		}
	};

	interface Props {
		post: kurosearch.Post;
		onclick?: (event: MouseEvent) => void;
	}

	let { post, onclick }: Props = $props();

	let ratio = $derived(calculateAspectRatio(post.width, post.height));
	let rows = $derived(
		Math.max(Math.min(Math.round(rowsPerSquare / ratio), rowsPerSquare / maxRatio), 2)
	);
	let previewSrc = $derived(isImage(post.sample_url) ? post.sample_url : post.preview_url);

	const onkeydown: KeyboardEventHandler<HTMLElement> = (event) => {
		if (keybindFsEnter(event)) {
			event.preventDefault();
			event.stopPropagation();
			(event.target as HTMLElement).click();
		}
		if (keybindPostFavourite(event)) {
			event.preventDefault();
			event.stopPropagation();
			favouritePostsStore.toggleFavourite(post);
		}
	};
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<li
	id={getPostId(post.id)}
	class="post"
	style="grid-row: span {rows};"
	{onclick}
	{onkeydown}
	role="button"
	tabindex="0"
>
	<img src={previewSrc} alt="post" class="post-media" tabindex="-1" loading="lazy" />
	{#if post.type === 'video'}
		<div class="indicator">
			<img src={playSrc} alt="Play video" width="16" height="32" style:margin-left="4px" />
		</div>
	{/if}
	{#if post.type === 'gif'}
		<div class="indicator">GIF</div>
	{/if}
	<div class="summary">
		<span class="label">{postTypeLabel(post)}</span>
		<p class="spacer"></p>
		<Score {post} />
		<span>•</span>
		<RelativeTime value={post.change} />
	</div>
</li>

<style>
	.post {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: 1fr auto 1fr auto;

		overflow: hidden;
		width: 100%;
		height: 100%;

		background-color: var(--background-1);
		border-radius: var(--border-radius);
	}

	.post-media {
		grid-column: 1 / 4;
		grid-row: 1 / 4;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		overflow: hidden;
	}

	.indicator {
		grid-column: 2 / 3;
		grid-row: 2 / 3;

		--size: 48px;

		border-radius: var(--size);
		width: var(--size);
		height: var(--size);

		display: flex;
		align-items: center;
		justify-content: center;

		color: #000;
		background-color: #fff;

		user-select: none;

		font-weight: bold;

		img {
			margin-left: 4px;
		}
	}

	.summary {
		grid-column: 1 / 4;
		grid-row: 4 / 5;

		display: flex;
		align-items: center;
		gap: var(--small-gap);
		padding: var(--grid-gap);
	}

	.label {
		text-transform: uppercase;
	}

	.spacer {
		flex-grow: 1;
	}
</style>
