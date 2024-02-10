<script lang="ts">
	import { formatTagname } from '$lib/logic/format-tag';
	import { MODIFIER_NAMES } from '$lib/logic/tag-modifier-data';

	export let tag: kurosearch.SearchableTag;
</script>

<button type="button" class={MODIFIER_NAMES[tag.modifier]} on:click on:contextmenu|preventDefault>
	{formatTagname(tag.name)}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		gap: var(--tiny-gap);
		background-color: var(--background-2);
		color: var(--text-accent);
		height: var(--line-height-small);
		border-radius: var(--line-height-small);
		font-size: var(--text-size-small);
		padding-left: 12px;
		padding-right: 12px;
		user-select: none;
	}

	.exclude {
		text-decoration: line-through;
	}

	.optional {
		font-style: italic;
	}

	@media (hover: hover) {
		button {
			transition: background-color var(--default-transition-behaviour);
		}

		button:hover {
			background-color: var(--background-3);
		}
	}
</style>
