<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		onclick: () => void;
		children: Snippet;
	}

	let { onclick, children, ...rest }: Props = $props();
</script>

<button type="button" class="mixin-shape-item mixin-invisible mixin-hover {rest.class}" {onclick}>
	{@render children()}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		padding-inline: var(--grid-gap);
		border-radius: var(--border-radius);
	}
</style>
