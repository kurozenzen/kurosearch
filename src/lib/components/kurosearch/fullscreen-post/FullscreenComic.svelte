<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';

	interface Props {
		post: kurosearch.Post;
		postId?: number;
		ondetails: () => void;
		onended?: () => void;
	}

	let { post, ondetails }: Props = $props();

	let sources = $derived(
		highResolutionEnabled ? [post.sample_url, post.file_url] : [post.preview_url, post.sample_url]
	);

	let loading = $state(true);

	let open: boolean = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="scrollable" class:open onclick={() => (open = !open)}>
	<img
		src={sources[1]}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
		onload={() => (loading = false)}
	/>
	<img
		class="preview"
		src={sources[0]}
		alt="[{post.type}] post #{post.id}"
		title="[{post.type}] post #{post.id}"
	/>
	{#if loading}
		<LoadingAnimation />
	{/if}
	<IconButton variant="half-background" onclick={ondetails} class="details-button">
		<i class="codicon codicon-tag"></i>
	</IconButton>
</div>

<style>
	.scrollable {
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

	.scrollable :global(.details-button) {
		position: fixed;
		right: var(--small-gap);
		bottom: 45px;
	}

	.scrollable :global(svg) {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
