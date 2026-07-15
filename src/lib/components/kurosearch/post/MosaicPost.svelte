<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { getPostId } from '$lib/logic/id-utils';
	import { keybindFsEnter } from '$lib/logic/keybinds/keyboard-utils';
	import { isImage } from '$lib/logic/media-utils';
	import { calculateAspectRatio } from './ratio';

	const maxRatio = 1 / 3;
	const rowsPerSquare = 5;

	interface Props {
		post: kurosearch.Post;
		onclick?: () => void;
	}

	let { post, onclick }: Props = $props();

	let ratio = $derived(calculateAspectRatio(post.width, post.height));
	let rows = $derived(
		Math.max(Math.min(Math.round(rowsPerSquare / ratio), rowsPerSquare / maxRatio), 2)
	);
	let previewSrc = $derived(isImage(post.sample_url) ? post.sample_url : post.preview_url);

	const onkeydown = (event: KeyboardEvent) => {
		if (keybindFsEnter(event)) {
			event.preventDefault();
			event.stopPropagation();
			onclick?.();
		}
	};
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	id={getPostId(post.id)}
	class="post"
	style="grid-row: span {rows};"
	{onclick}
	{onkeydown}
	class:open
>
	<img src={previewSrc} alt="post" class="post-media" tabindex="-1" loading="lazy" />
	{#if post.type !== 'image'}
		<span class="type">{post.type === 'video' ? '▶' : 'GIF'}</span>
	{/if}
	<span class="score">{formatCount(post.score)}</span>
</div>

<style>
	img {
		object-fit: cover;
		object-position: top;
		display: block;
		width: 100%;
		height: 100%;
		grid-column: 1 / 4;
		grid-row: 1 / 4;
		max-height: 100vh;
		transition: all var(--default-transition-behaviour);
	}

	.post {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
		justify-content: space-between;
		background-color: var(--background-1);
		border-radius: 5px;
	}

	.score {
		grid-row: 3/4;
		grid-column: 3/4;
		background-color: #0008;
		padding: var(--tiny-gap);
		color: white;
		border-radius: var(--border-radius) 0 0 0;
	}

	.type {
		grid-row: 3/4;
		grid-column: 1/2;
		background-color: #0008;
		padding: var(--tiny-gap);
		color: white;
		border-radius: 0 var(--border-radius) 0 0;
	}
</style>
