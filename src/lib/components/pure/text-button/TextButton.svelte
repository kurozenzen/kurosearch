<script module lang="ts">
	export type ButtonType = 'primary' | 'secondary';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		title: string;
		disabled?: boolean;
		type?: ButtonType;
		onclick: () => void;
		children: Snippet;
		reducepadding?: boolean;
	}

	let {
		id,
		title,
		disabled = false,
		type = 'primary',
		children,
		onclick,
		reducepadding = false
	}: Props = $props();
</script>

<button type="button" {id} {title} class={type} class:reducepadding {onclick} {disabled}>
	{@render children()}
</button>

<style>
	button {
		height: var(--box-height);
		padding-inline: var(--box-height);
		border-radius: var(--border-radius);
		text-align: center;
		text-transform: uppercase;
		white-space: nowrap;
	}

	button.reducepadding {
		height: var(--line-height);
		padding-inline: 1rem;
	}

	button:disabled {
		background-color: var(--background-2);
	}

	button.primary:not(:disabled) {
		color: var(--text-accent);
		background-color: var(--accent);
	}

	button.secondary:not(:disabled) {
		color: var(--text);
		background-color: var(--background-1);
	}

	@media (hover: hover) {
		button {
			transition: background-color var(--default-transition-behaviour);
		}

		button.primary:not(:disabled):hover {
			background-color: var(--accent-light);
		}

		button.secondary:not(:disabled):hover {
			background-color: var(--background-2);
		}

		button:disabled:hover {
			background-color: var(--background-2);
			cursor: not-allowed;
		}
	}
</style>
