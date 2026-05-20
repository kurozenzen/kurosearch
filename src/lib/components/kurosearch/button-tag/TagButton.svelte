<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		onclick: (event: MouseEvent) => void;
		children: Snippet;
	}

	let { title, onclick, children }: Props = $props();
</script>

<button type="button" {title} {onclick} class="mixin-tag-shape mixin-accent mixin-hover">
	{@render children()}
</button>

<style>
	button {
		--size: var(--line-height-small);
		width: var(--size);
		padding: var(--tiny-gap);
	}
</style>
