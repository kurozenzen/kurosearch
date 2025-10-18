<script lang="ts">
	import savedPosts from '$lib/store/saved-posts-store';
	import SingleColumnPost from '$lib/components/kurosearch/post/SingleColumnPost.svelte';
	import { getPost } from '$lib/logic/api-client/posts/posts';
	import { getIndexedPost } from '$lib/indexeddb/idb';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';

	let posts: kurosearch.Post[] = $state([]);
	let loading = $state(false);
	let error = $state<string | undefined>(undefined);

	$effect(() => {
		const savedPostsList = $savedPosts.posts;

		if (savedPostsList.length === 0) {
			posts = [];
			loading = false;
			error = undefined;
			return;
		}

		loading = true;
		error = undefined;

		Promise.all(
			savedPostsList.map(async (savedPost) => {
				try {
					// Check IndexedDB first
					const cachedPost = await getIndexedPost(savedPost.id);
					if (cachedPost !== undefined) {
						return cachedPost;
					}
					// Fall back to API request if not in cache
					return await getPost(savedPost.id);
				} catch (err) {
					console.error(`Failed to load post ${savedPost.id}:`, err);
					// Return null for failed posts, we'll filter them out
					return null;
				}
			})
		)
			.then((resolvedPosts) => {
				// Filter out failed posts (null values)
				posts = resolvedPosts.filter((p): p is kurosearch.Post => p !== null);
				loading = false;
			})
			.catch((err) => {
				console.error('Failed to load saved posts:', err);
				error = 'Failed to load saved posts. Please try again.';
				loading = false;
			});
	});
</script>

<Heading1>Saved Posts</Heading1>

{#if loading}
	<LoadingAnimation />
{:else if error}
	<section>
		<h1>Error</h1>
		<p>{error}</p>
	</section>
{:else}
	<section>
		{#each posts as post (post.id)}
			<SingleColumnPost {post} onfullscreen={() => {}} />
		{:else}
			<h1>Seems you don't have any saved posts yet...</h1>
			<p>
				Click the
				<button
					type="button"
					class="codicon codicon-bookmark"
					onclick={(e) => {
						e.stopPropagation();
					}}
					aria-label="saved posts button"
				>
				</button>
				button under a post to save it!
			</p>
		{/each}
	</section>
{/if}

<style lang="scss">
	p {
		margin-top: 1rem;
	}

	button {
		white-space: nowrap;
		display: inline-flex;
		gap: var(--tiny-gap);
		align-items: center;
		background-color: var(--background-2);
		padding: var(--small-gap);
		border-radius: var(--border-radius);
		border: 2px solid transparent;
		position: relative;
		overflow: hidden;
		transition: border-color 100ms ease-out;

		&:hover {
			background-color: var(--background-3);
		}

		&.codicon-bookmark:hover {
			border-color: gold;
			color: gold;
			background-image: linear-gradient(
				110deg,
				transparent 0%,
				transparent 35%,
				rgba(255, 215, 0, 0.35) 50%,
				transparent 65%,
				transparent 100%
			);
			background-repeat: no-repeat;
			background-size: 220% 100%;
			background-position: -140% 0;
			animation: bookmark-shimmer 500ms ease-out 1;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
				background-image: none;
			}
		}

		&::before {
			font-size: 16px;
		}
	}

	@keyframes bookmark-shimmer {
		to {
			background-position: 140% 0;
		}
	}
</style>
