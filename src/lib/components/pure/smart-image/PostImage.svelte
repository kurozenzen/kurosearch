<script lang="ts">
	import PostOverlay from '$lib/components/kurosearch/post-overlay/PostOverlay.svelte';
	import {
		calculateAspectRatio,
		calculateAspectRatioCss
	} from '$lib/components/kurosearch/post/ratio';
	import { clearsrc } from '$lib/logic/use/clearsrc';
	import { screenintersection } from '$lib/logic/use/screenintersection';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';

	interface Props {
		post: kurosearch.Post;
		onclick?: () => void;
		onfullscreen?: () => void;
	}

	let { post, onclick, onfullscreen }: Props = $props();

	let visible = $state(false);
	let open = $state(false);
	let overlayHidden = $state(true);
	let actualLoaded = $state(false);
	let imgElement: HTMLImageElement | undefined = $state();

	let previewSrc = $derived(post.preview_url);
	let actualSrc = $derived(highResolutionEnabled ? post.file_url : post.sample_url);
	let alt = $derived(post.id.toString());
	let ratio = $derived(calculateAspectRatio(post.width, post.height));
	let canOpen = $derived(ratio < 0.4);
	let cssRation = $derived(calculateAspectRatioCss(post.width, post.height));

	$effect(() => {
		actualSrc;
		if (imgElement && imgElement.complete) {
			actualLoaded = true;
		} else {
			actualLoaded = false;
		}
	});

	const onIntersectionChange = (isIntersecting: boolean) => {
		visible = isIntersecting;
	};

	const onclickinternal = () => {
		open = !open;
		onclick?.();
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	{@attach screenintersection(0, onIntersectionChange)}
	class:can-open={canOpen}
	class:open
	onclick={onclickinternal}
	style="aspect-ratio: {cssRation};"
>
	{#if visible}
		<img
			{@attach clearsrc}
			class="post-media preview"
			class:loaded={actualLoaded}
			loading="lazy"
			src={previewSrc}
			{alt}
			width={post.width}
			height={post.height}
		/>
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<img
			bind:this={imgElement}
			{@attach clearsrc}
			class="post-media main-image"
			class:loaded={actualLoaded}
			loading="lazy"
			tabindex="0"
			src={actualSrc}
			{alt}
			width={post.width}
			height={post.height}
			onload={() => (actualLoaded = true)}
		/>
	{/if}

	<PostOverlay mediaType="img" {onfullscreen} hidden={overlayHidden} />
</div>

<style>
	div {
		position: relative;
		overflow: hidden;
	}

	.can-open:not(.open) {
		width: 100%;
		max-height: 100vh;
		overflow: hidden;
	}

	.can-open:not(.open)::before {
		position: absolute;
		z-index: 100;
		text-align: center;
		width: 100%;
		content: 'Show more';
		padding: var(--grid-gap);
		background: linear-gradient(0deg, black 0%, transparent 100%);
		user-select: none;
		bottom: 0;
		color: white;
	}

	img {
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		contain: strict;
	}

	.main-image {
		opacity: 0;
		transition: opacity 0.3s ease-out;
		z-index: var(--z-media);
	}

	.main-image.loaded {
		opacity: 1;
	}

	.preview {
		filter: blur(10px);
		transform: scale(1.05);
		transition: opacity 0.3s ease-out;
		z-index: calc(var(--z-media) - 1);
	}

	.preview.loaded {
		opacity: 0;
		pointer-events: none;
	}

	@container (min-width: 800px) {
		img {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}
</style>
