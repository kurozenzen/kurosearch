<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import PostDetailsFull from '../post-details/PostDetailsFull.svelte';

	interface Props {
		post: kurosearch.Post;
		onreturn: () => void;
	}

	let { post, onreturn }: Props = $props();
</script>

<IconButton onclick={onreturn} class="mixin-invisible fs-button-return">
	<i class="codicon codicon-chevron-left"></i>
</IconButton>

<PostDetailsFull {post} class="fullscreen-details" />

<style>
	:global(.fullscreen-details) {
		padding-block-start: calc(2 * var(--line-height) + 3 * var(--grid-gap)) !important;
		width: 100vw;
		height: 100vh;
		flex-shrink: 0;
		flex-grow: 0;
		contain: strict;
		overflow-y: scroll;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	:global(.fs-button-return) {
		position: absolute;
		top: calc(2 * var(--grid-gap) + var(--line-height));
		left: calc(100vw + var(--grid-gap));
		z-index: var(--z-media-controls);
	}
</style>
