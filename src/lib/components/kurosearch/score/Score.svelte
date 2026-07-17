<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';
	import type { MouseEventHandler } from 'svelte/elements';

	interface Props {
		post: kurosearch.Post;
	}

	let { post }: Props = $props();

	let isFavourite = $derived($favouritePostsStore.ids.has(post.id));
	let score = $derived(isFavourite ? post.score + 1 : post.score);

	const onclick: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		favouritePostsStore.toggleFavourite(post);
	};
</script>

<button
	data-testid="score"
	class="codicon codicon-heart"
	class:favourite={isFavourite}
	{onclick}
	tabindex="-1"
>
	{formatCount(score)}
</button>

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
