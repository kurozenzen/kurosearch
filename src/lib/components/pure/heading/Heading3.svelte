<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<h3>{@render children()}</h3>

<style>
	h3 {
		color: var(--text-highlight);
		font-size: var(--text-size-h3);
		padding-block-start: 4rem;
		padding-block-end: var(--grid-gap);
	}
</style>
