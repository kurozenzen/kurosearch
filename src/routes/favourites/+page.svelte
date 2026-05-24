<script lang="ts">
	import SingleColumnPost from '$lib/components/kurosearch/post/SingleColumnPost.svelte';
	import SimpleTag from '$lib/components/kurosearch/tag-simple/SimpleTag.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import PageGeneric from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import Preference from '$lib/components/pure/preference/Preference.svelte';
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

	let message = $derived.by(() => {
		if ($favouritePostsStore.ids.size == 0) {
			return "You haven't got any favourites yet";
		} else if ($favouritePostsStore.ids.size === 1) {
			return 'You have exactly one favourite post';
		} else {
			return `You have ${$favouritePostsStore.ids.size} favourite posts`;
		}
	});
</script>

<svelte:head>
	<title>kurosearch - Favourites</title>
	<meta name="description" content="Your favourite posts." />
</svelte:head>

<PageGeneric title="Favourites">
	<Preference title="Info" description={message}></Preference>

	{#if $favouritePostsStore.posts.length > 0}
		<Preference
			title="Tags"
			description="The following tags are more common than usual among your favourites:"
		>
			<ol class="tags">
				{#each tagCounts as tag}
					<SimpleTag {tag} />
				{/each}
			</ol>
		</Preference>

		<Preference title="Posts" description="All your favourite posts are listed here.">
			<ol class="single-column">
				{#each $favouritePostsStore.posts as post (post.id)}
					<SingleColumnPost {post} onfullscreen={() => {}} />
				{/each}
			</ol>
		</Preference>
	{/if}
</PageGeneric>

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
