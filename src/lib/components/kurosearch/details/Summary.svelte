<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import RelativeTime from '../relative-time/RelativeTime.svelte';
	import Score from '../score/Score.svelte';
	import { formatCount } from '$lib/logic/format-count';

	const dispatch = createEventDispatcher();

	export let post: kurosearch.Post;
	export let active: string | undefined;
	export let links: number;
</script>

<div class="summary">
	<RelativeTime value={post.change} />
	<span>•</span>
	<Score value={post.score} />
	<span class="divider" />
	<button
		class="codicon codicon-link"
		class:active={active === 'links'}
		on:click={() => dispatch('links')}
	>
		{formatCount(links)}
	</button>
	{#if post.comment_count}
		<button
			class="codicon codicon-comment"
			class:active={active === 'comments'}
			on:click={() => dispatch('comments')}
		>
			{formatCount(post.comment_count)}
		</button>
	{/if}
	<button
		class="codicon codicon-tag"
		class:active={active === 'tags'}
		on:click={() => dispatch('tags')}
	>
		{formatCount(post.tags.length)}
	</button>
</div>

<style>
	.summary {
		display: flex;
		align-items: center;
		overflow-x: auto;
		gap: var(--small-gap);
		background-color: var(--background-1);
	}

	span.divider {
		flex-grow: 1;
	}

	button {
		white-space: nowrap;
		display: inline-flex;
		gap: var(--tiny-gap);
		align-items: center;
		background-color: unset;
		background-color: var(--background-2);
		padding: var(--small-gap);
		border-radius: var(--border-radius);
	}

	button.active {
		background-color: var(--background-3);
	}

	button::before {
		font-size: 16px;
	}
</style>
