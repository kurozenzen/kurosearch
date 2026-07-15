<script lang="ts">
	import { partitionTagsByType } from '$lib/logic/tag-utils';
	import Comments from '../post-comment/Comments.svelte';
	import Rating from '../rating/Rating.svelte';
	import RelativeTime from '../relative-time/RelativeTime.svelte';
	import Score from '../score/Score.svelte';
	import ExternalSource from '../source-external/ExternalSource.svelte';
	import KurosearchSource from '../source-kurosearch/KurosearchSource.svelte';
	import Rule34Source from '../source-rule34/Rule34Source.svelte';
	import PostDetailsTagList from '../tag-list/PostDetailsTagList.svelte';

	interface Props {
		post: kurosearch.Post;
		class?: string;
	}

	let { post, ...rest }: Props = $props();

	let tagsByType = $derived(partitionTagsByType(post.tags));
</script>

<div class="details {rest.class}">
	<h1>Post <b>#{post.id}</b></h1>
	<div class="flex-row">
		<Rating value={post.rating} />
		<span>•</span>
		<span class="post-type">{post.type}</span>
		<span>•</span>
		<Score {post} />
		<span>•</span>
		<RelativeTime value={post.change} />
	</div>
	<div class="flex-row">
		<KurosearchSource id={post.id} />
		<span>•</span>
		<ExternalSource source="https://rule34.xxx/index.php?page=post&s=view&id={post.id}" />
		<span>•</span>
		<Rule34Source url={post.file_url} />
		{#if post.source}
			<span>•</span>
			<ExternalSource source={post.source} />
		{/if}
	</div>
	<div class="tags">
		{#each Object.entries(tagsByType) as [type, tags] (type)}
			<div>
				<h3>{type}</h3>
				<PostDetailsTagList {tags} />
			</div>
		{/each}
	</div>

	<h3>Comments</h3>
	<Comments id={post.id} />
</div>

<style>
	.details {
		display: flex;
		flex-direction: column;
		padding: var(--grid-gap);
		gap: var(--grid-gap);
	}

	h3 {
		color: var(--text-highlight);
	}

	.flex-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--small-gap);
	}

	.tags {
		display: flex;
		gap: var(--grid-gap);
		flex-wrap: wrap;

		div {
			display: flex;
			flex-direction: column;
			gap: var(--small-gap);

			h3 {
				text-transform: capitalize;
			}
		}
	}

	.post-type {
		text-transform: uppercase;
	}
</style>
