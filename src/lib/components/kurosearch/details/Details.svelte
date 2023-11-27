<script lang="ts">
	import { getComments } from '$lib/logic/api-client/ApiClient';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import Comment from '$lib/components/kurosearch/comment/Comment.svelte';
	import RelativeTime from '$lib/components/kurosearch/relative-time/RelativeTime.svelte';
	import Score from '$lib/components/kurosearch/score/Score.svelte';
	import ExternalSource from '$lib/components/kurosearch/source-external/ExternalSource.svelte';
	import Rule34Source from '$lib/components/kurosearch/source-rule34/Rule34Source.svelte';
	import Rating from '../rating/Rating.svelte';
	import PostDetailsTagList from '../tag-list/PostDetailsTagList.svelte';
	import KurosearchSource from '../source-kurosearch/KurosearchSource.svelte';

	export let post: kurosearch.Post;

	let tab = 'tags';
</script>

<div class="details">
	<div class="summary">
		<Rating value={post.rating} />
		<span>•</span>
		<Score value={post.score} />
		<span>•</span>
		<RelativeTime value={post.change} />
		<span>•</span>
		<KurosearchSource url="/post?id={post.id}&src={encodeURIComponent(post.file_url)}" />
		<span>•</span>
		<Rule34Source url={post.file_url} />
		{#if post.source}
			<span>•</span>
			<ExternalSource source={post.source} />
		{/if}
	</div>
	<div class="tabs">
		<button
			on:click={() => {
				tab = 'tags';
			}}
			class:active={tab === 'tags'}
			class="codicon codicon-tag"
		>
			<span>{post.tags.length} tags</span>
		</button>
		<button
			on:click={() => {
				tab = 'comments';
			}}
			class:active={tab === 'comments'}
			class="codicon codicon-comment-discussion"
		>
			<span>{post.comment_count || 'No'} comments</span>
		</button>
	</div>
	{#if tab === 'tags'}
		<PostDetailsTagList tags={post.tags} />
	{:else}
		{#await getComments(post.id)}
			<LoadingAnimation />
		{:then comments}
			{#if comments.length > 0}
				<ul class="comments">
					{#each comments as comment}
						<Comment {comment} />
					{/each}
				</ul>
			{:else}
				<span class="no-comments">Comments for this post are not available</span>
			{/if}
		{/await}
	{/if}
</div>

<style>
	.details {
		display: flex;
		flex-direction: column;
		padding: var(--grid-gap);
		animation: slide-down 0.2s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.summary {
		display: flex;
		align-items: center;
		overflow-x: auto;
		gap: var(--small-gap);
		padding-block-end: var(
			--small-gap
		); /* a bit hacky to split the gap here but it places the scrollbar nicely*/
		margin-block-end: var(--small-gap);
	}

	.comments {
		padding-block-start: var(--grid-gap);
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	.no-comments {
		padding-block-start: calc(var(--grid-gap) * 2);
		padding-block-end: var(--grid-gap);
		text-align: center;
	}

	@keyframes slide-down {
		from {
			transform: translateY(-100px);
		}

		to {
			transform: translateY(0px);
		}
	}

	span {
		white-space: nowrap;
	}

	.tabs {
		display: flex;
		gap: var(--small-gap);
	}

	button {
		white-space: nowrap;
		background: unset;
		color: var(--text);
		height: var(--line-height);
		border-radius: var(--line-height);
		transition: all 0.2s linear;
		padding-inline: var(--grid-gap);
		display: inline-flex;
		align-items: center;
	}

	button::before {
		margin-inline-end: var(--small-gap);
	}

	button.active,
	button.active::before {
		color: var(--text-highlight);
		background-color: var(--background-2);
	}
</style>
