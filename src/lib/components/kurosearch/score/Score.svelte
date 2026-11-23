<script lang="ts">
	import { formatCount } from '#lib/logic/format-count';
	import { favouritePostsStore } from '#lib/store/favourite-posts.state.svelte';

	interface Props {
		post: kurosearch.Post;
	}

	let { post }: Props = $props();

	let isFavourite = $derived(favouritePostsStore.ids.has(post.id));
	let score = $derived(isFavourite ? post.score + 1 : post.score);

	const onclick = () => {
		favouritePostsStore.toggleFavourite(post);
	};
</script>

<button class="mixin-icon-text codicon codicon-heart" class:favourite={isFavourite} {onclick}>
	{formatCount(score)}
</button>

<style>
	button {
		color: var(--text);
		transition: all var(--default-transition-behaviour);
	}

	.favourite {
		color: var(--accent);
	}

	button::before {
		font-size: var(--text-size-large);
	}

	@media (hover: hover) {
		button:hover {
			color: var(--text-highlight);
		}
	}
</style>
