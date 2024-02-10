<script lang="ts">
	import { formatActiveTag } from '$lib/logic/format-tag';
	import { MODIFIER_NAMES } from '$lib/logic/tag-modifier-data';
	import { TAG_TYPES_WITH_ICONS } from '$lib/logic/tag-type-data';

	export let tag: kurosearch.ModifiedTag;
	export let active: boolean = false;

	$: icon = TAG_TYPES_WITH_ICONS[tag.type] ?? 'no-icon';
</script>

<button
	type="button"
	class:active
	class="{MODIFIER_NAMES[tag.modifier]} {icon}"
	title="Click to remove tag"
	on:click
	on:contextmenu|preventDefault
>
	{formatActiveTag(tag)}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		gap: var(--tiny-gap);
		height: var(--line-height-small);
		/* border-radius: var(--line-height-small); */
		border-radius: var(--border-radius);
		font-size: var(--text-size-small);
		padding-left: 6px;
		padding-right: 12px;
		user-select: none;
		contain: content;
	}

	button:not(.active) {
		background-color: var(--background-2);
		color: var(--text);
	}

	button.active {
		background-color: var(--accent);
		color: var(--text-accent);
	}

	button.no-icon {
		padding-left: 12px;
	}

	@media (hover: hover) {
		button {
			transition: background-color var(--default-transition-behaviour);
		}

		button:not(.active):hover {
			background-color: var(--background-3);
		}

		button.active:hover {
			background-color: var(--accent-light);
		}
	}

	button:not(.active):active {
		background-color: var(--background-2);
	}

	button.active:active {
		background-color: var(--accent);
	}

	.exclude {
		text-decoration: line-through;
	}

	.optional {
		font-style: italic;
	}
</style>
