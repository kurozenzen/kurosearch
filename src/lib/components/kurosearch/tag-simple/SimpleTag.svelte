<script lang="ts">
	import { formatTagname } from '$lib/logic/format-tag';
	import { TAG_TYPES_WITH_ICONS } from '$lib/logic/tag-type-data';

	export let tag: kurosearch.Tag;
	export let active: boolean = false;

	$: icon = TAG_TYPES_WITH_ICONS[tag.type] ?? 'no-icon';
</script>

<button type="button" title="Click to add tag" on:click class:active class={icon}>
	{formatTagname(tag.name)}
</button>

<style>
	button {
		--background-color: var(--background-2);
		--background-color-hover: var(--background-3);
		display: inline-flex;
		align-items: center;
		gap: var(--tiny-gap);
		background-color: var(--background-color);
		color: var(--text);
		height: 24px;
		border-radius: var(--border-radius);
		font-size: var(--text-size-small);
		user-select: none;
		padding-inline: 6px 12px;
	}

	.no-icon {
		padding-inline: 12px;
	}

	button.active {
		color: var(--text-accent);
		--background-color: var(--accent);
		--background-color-hover: var(--accent-light);
	}

	button.supertag {
		color: var(--text-accent);
		--background-color: var(--accent);
		border: dashed 2px var(--text-accent);
	}

	.codicon-edit {
		--background-color: var(--artist-background);
		--background-color-hover: var(--artist-background-hover);
	}

	.codicon-person {
		--background-color: var(--character-background);
		--background-color-hover: var(--character-background-hover);
	}

	.codicon-folder {
		--background-color: var(--copyright-background);
		--background-color-hover: var(--copyright-background-hover);
	}

	.codicon-info {
		--background-color: var(--metadata-background);
		--background-color-hover: var(--metadata-background-hover);
	}

	@media (hover: hover) {
		button {
			transition: background-color var(--default-transition-behaviour);
		}

		button:not(.supertag):hover {
			background-color: var(--background-color-hover);
		}
	}

	button:not(.supertag):active {
		background-color: var(--background-1);
	}
</style>
