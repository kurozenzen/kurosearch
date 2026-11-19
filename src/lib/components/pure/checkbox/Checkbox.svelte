<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { InputProps } from '../types';

	interface Props extends InputProps {
		checked: boolean;
		id: string;
		children: Snippet;
	}

	let { checked = $bindable(), id, disabled, children }: Props = $props();
</script>

<label for={id}>
	<input type="checkbox" {id} bind:checked {disabled} />
	{@render children()}
</label>

<style>
	label {
		display: flex;
		align-items: center;
		gap: var(--grid-gap);
	}
</style>
