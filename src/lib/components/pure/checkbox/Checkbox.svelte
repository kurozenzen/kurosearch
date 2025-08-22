<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		checked: boolean;
		id: string;
		children: Snippet;
	}

	let { checked = $bindable(), id, children }: Props = $props();
</script>

<label for={id}>
	<input type="checkbox" {id} bind:checked />
	{@render children()}
</label>

<style>
	label {
		display: flex;
		align-items: center;
		gap: var(--grid-gap);
	}
</style>
