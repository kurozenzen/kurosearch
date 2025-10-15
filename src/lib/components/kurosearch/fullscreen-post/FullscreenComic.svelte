<script lang="ts">
	import { getContext } from 'svelte';
	import IconButton from '$lib/components/pure/button/IconButton.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';
	import { blurEnabled } from '$lib/store/blur-enabled-store';

	interface Props {
		post: kurosearch.Post;
		postId?: number;
	}

	let { post }: Props = $props();

	// Get callbacks from context instead of props to avoid drilling
	const { ondetails } = getContext<{
		ondetails: () => void;
		onended?: () => void;
	}>('fullscreen-callbacks');

	let sources = $derived(
		highResolutionEnabled ? [post.sample_url, post.file_url] : [post.preview_url, post.sample_url]
	);

	let loading = $state(true);

	let open: boolean = $state(false);
</script>

<button type="button" class="scrollable" class:open onclick={() => (open = !open)}>
	<img
		src={sources[1]}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
		class:blurred={$blurEnabled}
		onload={() => (loading = false)}
	/>
	<img
		class="preview"
		class:blurred={$blurEnabled}
		src={sources[0]}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
	/>
	{#if loading}
		<LoadingAnimation />
	{/if}
	<IconButton icon="tag" variant="half-background" onclick={ondetails} class="details-button" />
</button>

<style lang="scss">
	.scrollable {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		text-align: center;
		width: 100vw;
		height: 100vh;
		overflow-y: hidden;
	}

	.scrollable.open {
		overflow-y: scroll;
	}

	img {
		width: 100%;
		height: auto;

		&.blurred {
			filter: blur(20px);
		}
	}

	.preview {
		position: absolute;
	}

	.scrollable:not(.open)::before {
		position: absolute;
		z-index: 100;
		text-align: center;
		width: 100%;
		content: 'Show more';
		padding: var(--grid-gap);
		background: linear-gradient(0deg, var(--background-0) 0%, transparent 100%);
		user-select: none;
		bottom: 0;
		color: var(--text-highlight);
	}
</style>
