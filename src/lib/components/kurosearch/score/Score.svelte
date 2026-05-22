<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';

	interface Props {
		post: kurosearch.Post;
	}

	let { post }: Props = $props();

	let isFavourite = $derived($favouritePostsStore.ids.has(post.id));
	let score = $derived(isFavourite ? post.score + 1 : post.score);
</script>

<button
	data-testid="score"
	class="codicon codicon-heart"
	class:favourite={isFavourite}
	onclick={() => favouritePostsStore.toggleFavourite(post)}>{formatCount(score)}</button
>

<style>
	button {
		white-space: nowrap;
		display: inline-flex;
		gap: var(--tiny-gap);
		align-items: center;
		background-color: transparent;
		color: var(--text);
		transition: all var(--default-transition-behaviour);
	}

	.favourite {
		color: var(--accent);
	}

	button::before {
		font-size: 16px;
	}

	@media (hover: hover) {
		button:hover {
			color: var(--text-highlight);
		}
	}
</style>
