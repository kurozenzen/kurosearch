<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import RelativeTime from '../relative-time/RelativeTime.svelte';
	import Score from '../score/Score.svelte';

	interface Props {
		post: kurosearch.Post;
		active?: string;
		links: number;
		ontabselected: (tab: string) => void;
	}

	let { post, active, links, ontabselected }: Props = $props();
</script>

{#snippet button(tab: string, icon: string, count: number)}
	<button
		type="button"
		data-tab={tab}
		class="mixin-shape-item mixin-secondary mixin-hover {icon}"
		class:active={active === tab}
		onclick={(e) => {
			e.stopPropagation();
			ontabselected(tab);
		}}
	>
		{formatCount(count)}
	</button>
{/snippet}

<div class="summary">
	<RelativeTime value={post.change} />
	<span>•</span>
	<Score {post} />
	<span class="divider"></span>
	{@render button('links', 'codicon codicon-link', links)}
	{#if post.comment_count}
		{@render button('comments', 'codicon codicon-comment', post.comment_count)}
	{/if}
	{@render button('tags', 'codicon codicon-tag', post.tags.length)}
</div>

<style>
	.summary {
		display: flex;
		align-items: center;
		gap: var(--small-gap);
	}

	.divider {
		flex-grow: 1;
	}

	button {
		white-space: nowrap;
		display: inline-flex;
		align-items: center;
		gap: var(--tiny-gap);

		&.active {
			background-color: var(--background-3);
			color: var(--text-highlight);
		}
	}
</style>
