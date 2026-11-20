<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		class?: ClassValue;
		title: string;
		onclick: (event: MouseEvent) => void;
		children?: Snippet;
	}

	let { title, onclick, children, ...rest }: Props = $props();
</script>

<button
	type="button"
	{title}
	{onclick}
	class={['mixin-tag-shape mixin-accent mixin-hover', rest.class]}
>
	{@render children?.()}
</button>

<style>
	button {
		--size: var(--line-height-small);
		width: var(--size);
		padding: var(--tiny-gap);
	}
</style>
