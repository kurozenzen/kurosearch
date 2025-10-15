<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { getPostId } from '$lib/logic/id-utils';
	import { isEnter } from '$lib/logic/keyboard-utils';
	import { calculateAspectRatio } from './ratio';
	import { blurEnabled } from '$lib/store/blur-enabled-store';

	interface Props {
		post: kurosearch.Post;
		onclick?: (event: MouseEvent) => void;
	}

	let { post, onclick }: Props = $props();

	const maxRatio = 1 / 3;
	const rowsPerSquare = 5;

	let ratio = $derived(calculateAspectRatio(post.width, post.height));
	let rows = $derived(
		Math.max(Math.min(Math.round(rowsPerSquare / ratio), rowsPerSquare / maxRatio), 2)
	);

	const isImage = (src: string) =>
		src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png') || src.endsWith('.webp');

	let previewSrc = $derived(isImage(post.sample_url) ? post.sample_url : post.preview_url);

	const handleKeydown = (event: KeyboardEvent) => {
		if (isEnter(event) || event.key === 'f') {
			(event.currentTarget as HTMLDivElement).click();
		}
	};
</script>

<button
	type="button"
	id={getPostId(post.id)}
	class="post"
	style="grid-row: span {rows};"
	{onclick}
	onkeydown={handleKeydown}
	aria-label="View post {post.id}, {post.type}, score: {formatCount(post.score)}"
>
	<img
		src={previewSrc}
		alt="Post {post.id}, score: {formatCount(post.score)}"
		class="post-media"
		class:blurred={$blurEnabled}
		tabindex="-1"
		loading="lazy"
	/>
	{#if post.type !== 'image'}
		<span class="type">{post.type === 'video' ? '▶' : 'GIF'}</span>
	{/if}
	<span class="score">{formatCount(post.score)}</span>
</button>

<style lang="scss">
	img {
		pointer-events: none;
		object-fit: cover;
		object-position: top;
		display: block;
		width: 100%;
		height: 100%;
		grid-column: 1 / 4;
		grid-row: 1 / 4;
		max-height: 100vh;
		transition: all var(--default-transition-behaviour);

		&.blurred {
			filter: blur(20px);
		}
	}

	.post {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
		justify-content: space-between;
		background-color: var(--background-1);
		border-radius: 5px;
		contain: content;
		border: none;
		padding: 0;
		cursor: pointer;
		width: 100%;
		text-align: left;
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
