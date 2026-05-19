<script lang="ts">
	import { getPostId } from '$lib/logic/id-utils';
	import { isEnter } from '$lib/logic/keyboard-utils';
	import { isImage } from '$lib/logic/media-utils';
	import { calculateAspectRatio } from '../post/ratio';
	import RelativeTime from '../relative-time/RelativeTime.svelte';
	import Score from '../score/Score.svelte';

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
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<li
	id={getPostId(post.id)}
	class="post"
	class:open
	style="grid-row: span {rows};"
	{onclick}
	onkeydown={(event) => {
		if (isEnter(event) || event.key === 'f') {
			(event.target as HTMLDivElement)?.click();
		}
	}}
>
	<a href={post.file_url} target="_blank" rel="noopener noreferrer">
		<img src={previewSrc} alt="post" class="post-media" tabindex="-1" loading="lazy" />
	</a>
	<div class="summary">
		<span class="label">{postTypeLabel(post)}</span>
		<p class="spacer"></p>
		<Score value={post.score} />
		<span>•</span>
		<RelativeTime value={post.change} />
	</div>
</li>

<style>
	.post {
		display: flex;
		flex-direction: column;
		background-color: var(--background-1);
		border-radius: var(--border-radius);
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	a {
        display: contents;
	}

    img {
        object-fit: contain;
        object-position: top;
        width: 100%;
        flex-grow: 1;
        min-width: 0;
        overflow: hidden;
    }

	.summary {
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
