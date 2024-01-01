<script context="module" lang="ts">
	export type ButtonType = 'primary' | 'secondary';
</script>

<script lang="ts">
	export let title: string;
	export let disabled = false;
	export let type: ButtonType = 'primary';
</script>

<button {title} class={type} on:click {disabled}>
	<slot />
</button>

<style>
	button {
		height: var(--box-height);
		padding-inline: var(--box-height);
		border-radius: var(--border-radius-full);
		text-align: center;
		text-transform: uppercase;
		white-space: nowrap;
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
