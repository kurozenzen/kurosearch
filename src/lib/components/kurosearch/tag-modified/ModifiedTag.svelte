<script lang="ts">
	import { formatTagname } from '$lib/logic/format-tag';
	import { MODIFIER_NAMES } from '$lib/logic/tag-modifier-data';

	interface Props {
		tag: kurosearch.SearchableTag;
		onclick?: () => void;
		oncontextmenu?: () => void;
	}

	let { tag, onclick, oncontextmenu }: Props = $props();
</script>

<button
	type="button"
	class="mixin-tag-shape mixin-secondary mixin-hover {MODIFIER_NAMES[tag.modifier]}"
	{onclick}
	oncontextmenu={(e) => {
		e.preventDefault();
		oncontextmenu?.();
	}}
>
	{formatTagname(tag.name)}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		gap: var(--tiny-gap);
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
</style>
