<script lang="ts">
	import SingleColumnPost from '$lib/components/kurosearch/post/SingleColumnPost.svelte';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';
</script>

<svelte:head>
	<title>kurosearch - Favourites</title>
	<meta name="description" content="Your favourite posts." />
</svelte:head>

{#if $favouritePostsStore.posts.length === 0}
	<span>You haven't got any favourites yet.</span>
{:else}
	<ol class="single-column">
		{#each $favouritePostsStore.posts as post (post.id)}
			<SingleColumnPost {post} onfullscreen={() => {}} />
		{/each}
	</ol>
{/if}

<style>
	.single-column {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>
