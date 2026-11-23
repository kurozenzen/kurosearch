<script lang="ts">
	import { getPostId } from '#lib/logic/id-utils';
	import {
		isInputFocused,
		keybindFsEnter,
		keybindPostComments,
		keybindPostFavourite,
		keybindPostLinks,
		keybindPostTags
	} from '#lib/logic/keybinds/keyboard-utils';
	import { favouritePostsStore } from '#lib/store/favourite-posts.state.svelte';
	import SingleColumnMedia from '../media/SingleColumnMedia.svelte';
	import PostDetailsTab from '../post-details/PostDetailsTab.svelte';

	interface Props {
		post: kurosearch.Post;
		onfullscreen: (currentTime?: number) => void;
	}

	let { post, onfullscreen }: Props = $props();

	const keybinds = (event: KeyboardEvent) => {
		if (isInputFocused()) {
			return;
		}
		if (!(event.target instanceof HTMLElement)) {
			return;
		}
		if (keybindFsEnter(event)) {
			event.preventDefault();
			event.stopPropagation();
			onfullscreen();
		}
		if (keybindPostLinks(event)) {
			event.target?.querySelector<HTMLElement>('button[data-tab="links"]')?.click();
		}
		if (keybindPostComments(event)) {
			event.target?.querySelector<HTMLElement>('button[data-tab="comments"]')?.click();
		}
		if (keybindPostTags(event)) {
			event.target?.querySelector<HTMLElement>('button[data-tab="tags"]')?.click();
		}
		if (keybindPostFavourite(event)) {
			favouritePostsStore.toggleFavourite(post);
		}
	};
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<article id={getPostId(post.id)} onkeydown={keybinds} class="mixin-primary" tabindex="-1">
	<SingleColumnMedia {post} {onfullscreen} />
	<PostDetailsTab {post} />
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
		padding-block-end: var(--small-gap);
		contain: content;
		overflow: hidden;

		> :global(:not(figure)) {
			padding-inline: var(--small-gap);
		}
	}

	@container (min-width: 800px) {
		article {
			border-radius: var(--border-radius-large);
		}
	}
</style>
