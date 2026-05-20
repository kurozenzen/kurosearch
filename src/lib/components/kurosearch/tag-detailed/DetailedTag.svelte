<script lang="ts">
	import { formatActiveTag } from '$lib/logic/format-tag';
	import { MODIFIER_NAMES } from '$lib/logic/tag-modifier-data';
	import { TAG_TYPES_WITH_ICONS } from '$lib/logic/tag-type-data';

	interface Props {
		tag: kurosearch.ModifiedTag;
		active?: boolean;
		onclick?: (event: MouseEvent) => void;
		oncontextmenu?: (event: MouseEvent) => void;
	}

	let { tag, active = false, onclick, oncontextmenu }: Props = $props();

	let icon = $derived(TAG_TYPES_WITH_ICONS[tag.type] ?? 'no-icon');
</script>

<button
	type="button"
	class="mixin-tag-shape mixin-hover {MODIFIER_NAMES[tag.modifier]} {icon}"
	title="Click to remove tag"
	class:mixin-secondary={!active}
	class:mixin-accent={active}
	onclick={(e) => {
		e.preventDefault();
		e.stopPropagation();
		onclick?.(e);
	}}
	oncontextmenu={(e) => {
		e.preventDefault();
		e.stopPropagation();
		oncontextmenu?.(e);
	}}
>
	{formatActiveTag(tag)}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		gap: var(--tiny-gap);
		font-size: var(--text-size-small);
		padding-left: 6px;
		padding-right: 12px;
		user-select: none;
		contain: content;
	}

	.no-icon {
		padding-left: 12px;
	}

	.exclude {
		text-decoration: line-through;
	}

	.optional {
		font-style: italic;
	}
</style>
