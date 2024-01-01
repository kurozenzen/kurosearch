<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { getPostId } from '$lib/logic/id-utils';
	import { isEnter } from '$lib/logic/keyboard-utils';
	import { replaceHost } from '$lib/logic/url-utils';
	import imageServerUrl from '$lib/store/image-server-url-store';

	export let post: kurosearch.Post;

	let max = 3;
	let rows = Math.min(Math.round(post.height / post.width) * max, max * 3);

	const isImage = (src: string) =>
		src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png') || src.endsWith('.webp');

	$: previewSrc = replaceHost(isImage(post.sample_url) ? post.sample_url : post.preview_url, $imageServerUrl);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	id={getPostId(post.id)}
	class="post"
	style="grid-row: span {rows};"
	on:click
	on:keydown={(event) => {
		if (isEnter(event) || event.key === 'f') {
			event.target?.click();
		}
	}}
	class:open
>
	<img src={previewSrc} alt="post" class="post-media" tabindex="-1" loading="lazy" />
	<span class="score">{formatCount(post.score)}</span>
	{#if post.type !== 'image'}
		<span class="type">{post.type === 'video' ? '▶' : 'GIF'}</span>
	{/if}
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
		contain: content;
	}

	.score {
		grid-row: 3/4;
		grid-column: 1/2;
		background-color: #0008;
		padding: var(--tiny-gap);
		color: white;
		border-radius: 0 var(--border-radius) 0 0;
	}

	.type {
		grid-row: 3/4;
		grid-column: 3/4;
		background-color: #0008;
		padding: var(--tiny-gap);
		color: white;
		border-radius: var(--border-radius) 0 0 0;
	}
</style>
