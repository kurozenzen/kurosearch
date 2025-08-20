<script lang="ts">
	import { getComments } from '$lib/logic/api-client/ApiClient';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import Comment from '$lib/components/kurosearch/post-comment/Comment.svelte';
	import apiKey from '$lib/store/api-key-store';
	import userId from '$lib/store/user-id-store';

	export let post: kurosearch.Post;
</script>

{#await getComments(post.id, $apiKey, $userId)}
	<LoadingAnimation />
{:then comments}
	{#if comments.length > 0}
		<ul class="comments">
			{#each comments as comment}
				<Comment {comment} />
			{/each}
		</ul>
	{:else}
		<p class="no-comments">
			Comments for this post are not available. <br />This can happen if comments have been deleted.
		</p>
	{/if}
{/await}

<style>
	.comments {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
		animation: slide-down 0.2s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.no-comments {
		text-align: center;
	}
</style>
