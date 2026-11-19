<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		class?: ClassValue;
		onclick: () => void;
		children: Snippet;
	}

	let { onclick, children, ...rest }: Props = $props();
</script>

<button
	type="button"
	class={['mixin-shape-item mixin-invisible mixin-hover', rest.class]}
	{onclick}
>
	{@render children()}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		padding-inline: var(--grid-gap);
		border-radius: var(--border-radius-small);
		text-wrap: nowrap;
	}
</style>
