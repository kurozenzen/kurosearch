<script lang="ts">
	import ModifiedTag from '../tag-modified/ModifiedTag.svelte';

	interface Props {
		supertag: kurosearch.Supertag;
		onremove: () => void;
		onedit: () => void;
	}

	let { supertag, onremove, onedit }: Props = $props();
</script>

<li>
	<h3>{supertag.name}</h3>
	<small>{Object.keys(supertag.tags).length} tags</small>
	<button type="button" class="codicon codicon-edit" onclick={onedit} aria-label="Edit Supertag">
	</button>
	<button
		type="button"
		class="codicon codicon-close"
		onclick={onremove}
		aria-label="Delete Supertag"
	>
	</button>
	<span>{supertag.description || supertag.name}</span>
	<ol>
		{#each supertag.tags as tag}
			<ModifiedTag {tag} />
		{/each}
	</ol>
</li>

<style>
	li {
		display: grid;
		grid-template-columns: auto 1fr auto auto;
		gap: var(--small-gap);
		align-items: center;
		border-radius: var(--border-radius-small);
		transition: color var(--default-transition-behaviour);
	}

	li:not(:first-of-type) {
		border-radius: 0 0 var(--border-radius-small) var(--border-radius-small);
		border-block-start: 1px solid var(--background-2);
		padding-block-start: var(--grid-gap);
	}

	li:not(:last-of-type) {
		padding-block-end: var(--grid-gap);
	}

	h3 {
		font-weight: normal;
		font-size: var(--text-size-large);
		color: var(--text-highlight);
	}

	small {
		font-size: var(--text-size-small);
	}

	span {
		grid-area: 2/1/3/4;
	}

	ol {
		grid-area: 3/1/4/4;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	button {
		color: var(--text);
		height: var(--line-height-small);
		width: var(--line-height-small);
		line-height: var(--line-height-small);
		border-radius: var(--line-height-small);
	}

	@media (hover: hover) {
		button:hover {
			color: var(--text-highlight);
		}
	}
</style>
