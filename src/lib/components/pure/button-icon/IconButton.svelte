<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	interface Props {
		id?: string;
		children?: Snippet;
		onclick?: MouseEventHandler<HTMLButtonElement>;
		'aria-label'?: string;
		class?: string;
	}

	let { id, children, onclick, ...rest }: Props = $props();
</script>

<button type="button" {id} class={rest.class} aria-label={rest['aria-label']} {onclick}>
	{@render children?.()}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--line-height);
		height: var(--line-height);
		border-radius: var(--border-radius-full);
		border: none;
		color: var(--text);
		background-color: transparent;
		font-size: var(--text-size-large);
		vertical-align: middle;
	}

	@media (hover: hover) {
		button {
			transition: all var(--default-transition-behaviour);
		}

		button:hover {
			color: var(--text-highlight);
			background-color: var(--background-2);
		}
	}
</style>
