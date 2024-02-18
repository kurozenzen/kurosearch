<script lang="ts">
	import { formatCreatedAt } from '$lib/logic/format-relative-time';

	export let comment: kurosearch.Comment;
</script>

<div>
	<span class="author">{comment.author}</span>
	<span class="created-at">{formatCreatedAt(comment.createdAt)}</span>
	<span class="content">{comment.content}</span>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--tiny-gap);
	}

	.author {
		color: var(--text-highlight);
		font-weight: bold;
	}

	.created-at {
		padding: 1px;
		font-size: var(--text-size-small);
		color: var(--text-muted);
	}

	.content {
		grid-column: span 2;
	}
</style>
