<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { getSourcesForPost } from '$lib/logic/svelte/sources.svelte';
	import Comments from '../post-comment/Comments.svelte';
	import Sources from '../post/Sources.svelte';
	import RelativeTime from '../relative-time/RelativeTime.svelte';
	import Score from '../score/Score.svelte';
	import PostDetailsTagList from '../tag-list/PostDetailsTagList.svelte';

	interface Props {
		post: kurosearch.Post;
	}

	let { post }: Props = $props();

	let openTab: string | undefined = $state(undefined);

	const ontabselected = (tab: string) => {
		openTab = openTab === tab ? undefined : tab;
	};

	let links = $derived(getSourcesForPost(post));
</script>

{#snippet button(tab: string, icon: string, count: number)}
	{@const open = openTab === tab}
	<button
		type="button"
		role="tab"
		name={tab}
		aria-selected={open}
		aria-controls={tab}
		class="mixin-shape-item mixin-secondary mixin-hover mixin-icon-text {icon}"
		class:active={open}
		onclick={() => ontabselected(tab)}
	>
		{formatCount(count)}
	</button>
{/snippet}

<div class="summary">
	<RelativeTime value={post.change} />
	<Score {post} />
	{#if post.comment_count}
		{@render button('comments', 'codicon codicon-comment', post.comment_count)}
	{/if}
	{@render button('links', 'codicon codicon-link', links.length)}
	{@render button('tags', 'codicon codicon-tag', post.tags.length)}
</div>

{#if openTab === 'tags'}
	<PostDetailsTagList tags={post.tags} />
{:else if openTab === 'comments'}
	<Comments id={post.id} />
{:else if openTab === 'links'}
	<Sources {post} />
{/if}

<style>
	.summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--small-gap);
		padding-inline: var(--small-gap);

		button {
			place-self: end;
		}

		:global(button:first-of-type) {
			margin-right: auto;
		}
	}

	button.active {
		background-color: var(--background-3);
		color: var(--text-highlight);
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
