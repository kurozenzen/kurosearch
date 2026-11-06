<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		id?: string;
	}

	let { children, id }: Props = $props();
</script>

<h3 {id}>{@render children()}</h3>

<style>
	h3 {
		color: var(--text-highlight);
		font-size: var(--text-size-h3);
	}
</style>
