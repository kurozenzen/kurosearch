<script lang="ts">
	import { isValidUrl } from '$lib/logic/url-utils';
	import Comments from '../post-comment/Comments.svelte';
	import Summary from '../post-summary/Summary.svelte';
	import Sources from '../post/Sources.svelte';
	import PostDetailsTagList from '../tag-list/PostDetailsTagList.svelte';

	interface Props {
		post: kurosearch.Post;
	}

	let { post }: Props = $props();

	let openTab: string | undefined = $state(undefined);

	const ontabselected = (tab: string) => {
		openTab = openTab === tab ? undefined : tab;
	};

	const links = [
		new URL(`${window.location.origin}/post?id=${post.id}`),
		new URL(`https://rule34.xxx/index.php?page=post&s=view&id=${post.id}`),
		new URL(post.file_url),
		...(post.source
			? post.source
					.split(' ')
					.filter((x) => isValidUrl(x))
					.map((x) => new URL(x))
			: [])
	];
</script>

<div class="details">
	<Summary {post} active={openTab} links={links.length} {ontabselected} />
	{#if openTab === 'tags'}
		<PostDetailsTagList tags={post.tags} />
	{:else if openTab === 'comments'}
		<Comments {post} />
	{:else if openTab === 'links'}
		<Sources {post} />
	{/if}
</div>

<style>
	.details {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
		padding: var(--small-gap);
		background-color: var(--background-1);
	}

	@container (min-width: 800px) {
		.details {
			border-radius: 0 0 var(--border-radius-large) var(--border-radius-large);
		}
	}

	@keyframes slide-down {
		from {
			transform: translateY(-100px);
		}

		to {
			transform: translateY(0px);
		}
	}
</style>
