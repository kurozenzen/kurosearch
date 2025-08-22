<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import { formatTagname } from '$lib/logic/format-tag';

	interface Props {
		suggestion: kurosearch.Suggestion;
		selected?: boolean;
		onclick: (suggestion: kurosearch.Suggestion) => void;
	}

	let { suggestion, selected = false, onclick }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<li
	role="button"
	tabindex="0"
	onclick={() => onclick(suggestion)}
	title={suggestion.label}
	class:selected
>
	<i class={suggestion.type === 'supertag' ? 'codicon codicon-star-full' : 'codicon codicon-tag'}>
	</i>
	<span class="tag-name">{formatTagname(suggestion.label)}</span>
	<span class="tag-count">{formatCount(suggestion.count)}</span>
</li>

<style>
	li {
		display: grid;
		align-items: center;
		height: var(--line-height-small);
		grid-template-columns: 32px 1fr auto;
		gap: 8px;
		font-size: var(--text-size);
		padding-inline: 6px;
		user-select: none;
	}

	li:focus,
	.selected {
		background-color: var(--background-2);
		outline: none;
	}

	.tag-name {
		grid-column: 2;
		white-space: nowrap;
		overflow: hidden;
	}

	@media (hover: hover) {
		li {
			transition: background-color var(--default-transition-behaviour);
		}

		li:hover {
			background-color: var(--background-2);
		}
	}
</style>
