<script lang="ts">
	import SingleColumnPost from '$lib/components/kurosearch/post/SingleColumnPost.svelte';
	import SimpleTag from '$lib/components/kurosearch/tag-simple/SimpleTag.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';

	const tagCounts = $derived.by(() => {
		const tagCountsUnsorted = $favouritePostsStore.posts.reduce(
			(acc, post) => {
				post.tags.forEach((tag) => {
					if (!(tag.name in acc)) {
						acc[tag.name] = { ...tag, inFavourites: 0 };
					}
					acc[tag.name].inFavourites += 1;
				});
				return acc;
			},
			{} as Record<string, kurosearch.Tag & { inFavourites: number }>
		);

		return Object.values(tagCountsUnsorted)
			.filter((tag) => tag.count > 100 || tag.type === 'artist')
			.filter((tag) => tag.inFavourites > 1)
			.sort((a, b) => b.inFavourites / b.count - a.inFavourites / a.count)
			.slice(0, 20);
	});
</script>

<svelte:head>
	<title>kurosearch - Favourites</title>
	<meta name="description" content="Your favourite posts." />
</svelte:head>

<Heading1>Favourites</Heading1>

<Heading3>Info</Heading3>
{#if $favouritePostsStore.ids.size == 0}
	<span>You haven't got any favourites yet</span>
{:else if $favouritePostsStore.ids.size === 1}
	<span>You have exactly one favourite post</span>
{:else}
	<span>You have {$favouritePostsStore.ids.size} favourite posts</span>
{/if}

{#if $favouritePostsStore.posts.length > 10}
	<Heading3>Tags</Heading3>
	<span>The following tags are more common than usual among your favourites:</span>
	<ol class="tags">
		{#each tagCounts as tag}
			<SimpleTag {tag} />
		{/each}
	</ol>
{/if}

{#if $favouritePostsStore.posts.length > 0}
	<Heading3>Posts</Heading3>
	<ol class="single-column">
		{#each $favouritePostsStore.posts as post (post.id)}
			<SingleColumnPost {post} onfullscreen={() => {}} />
		{/each}
	</ol>
{/if}

<style>
	.tags {
		margin-block-start: var(--small-gap);
		display: flex;
		flex-wrap: wrap;
		gap: var(--small-gap);
	}

	.single-column {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>
