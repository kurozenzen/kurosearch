<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div>
	{@render children?.()}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: var(--grid-gap);
		align-items: center;
	}
</style>
