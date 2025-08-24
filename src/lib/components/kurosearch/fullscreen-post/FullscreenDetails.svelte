<script lang="ts">
	import { resolve } from '$app/paths';
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
	}

	let { post }: Props = $props();

	let tagsByType = $derived(
		post.tags.reduce(
			(result, tag) => {
				if (result[tag.type] === undefined) {
					result[tag.type] = [];
				}

				result[tag.type].push(tag);

				return result;
			},
			{} as Record<string, kurosearch.Tag[]>
		)
	);
</script>

<div class="details">
	<img class="preview" src={post.sample_url} alt="preview" />
	<h1>Post <b>#{post.id}</b></h1>
	<div class="flex-row">
		<Rating value={post.rating} />
		<span>•</span>
		<span>{post.type.toUpperCase()}</span>
		<span>•</span>
		<Score value={post.score} />
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
	<div>
		{#each Object.entries(tagsByType) as [type, tags]}
			<h3>{type}</h3>
			<PostDetailsTagList {tags} />
		{/each}
		<h3>Comments</h3>
		<Comments {post} />
	</div>
</div>

<style>
	.details {
		padding-block: 10vh;
		padding-inline: var(--grid-gap);
		width: 100vw;
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	h1 {
		font-weight: normal;
		text-align: center;
	}

	h3 {
		padding-block: var(--grid-gap);
		text-transform: capitalize;
	}

	.preview {
		height: 20vh;
		width: 20vh;
		object-fit: cover;
		margin: auto;
		border-radius: var(--border-radius);
	}

	.flex-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--small-gap);
	}
</style>
