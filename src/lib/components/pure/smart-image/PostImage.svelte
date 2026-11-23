<script lang="ts">
	import PostOverlay from '#lib/components/kurosearch/post-overlay/PostOverlay.svelte';
	import { calculateAspectRatio } from '#lib/components/kurosearch/post/ratio';
	import { observer } from '#lib/logic/attachments/observer';
	import { calculateSrcSet, isComic } from '#lib/logic/media-utils';
	import { dataSaver } from '#lib/store';
	import ObsImg from '../media-observed/obs-img.svelte';

	interface Props {
		post: kurosearch.Post;
		onfullscreen?: () => void;
	}

	let { post, onfullscreen }: Props = $props();

	let open = $state(false);
	let ratio = $derived(calculateAspectRatio(post.width, post.height));
	let canOpen = $derived(isComic(ratio));
	let loading = $state(true);

	const onclick = (event: MouseEvent) => {
		if (canOpen) {
			open = !open;
			if (!open && event.target instanceof HTMLElement) {
				event.target?.scrollIntoView();
			}
		}
	};
</script>

<figure class:can-open={canOpen} class:open class:loading-sweep={loading}>
	<ObsImg
		srcset={calculateSrcSet(post, ratio, dataSaver.value)}
		sizes="(max-width: 800px) 100vw, 800px"
		alt="Post #{post.id.toString()}"
		{onclick}
		onload={() => {
			loading = false;
		}}
		loading="lazy"
		decoding="async"
		width={post.width}
		height={post.height}
	/>

	<PostOverlay mediaType="img" {onfullscreen} hidden />
</figure>

<style>
	figure {
		position: relative;
	}

	.can-open {
		&:not(.open) {
			width: 100%;
			height: 100%;
			max-height: 100vh;
			overflow: hidden;

			&::before {
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
		}
	}
</style>
