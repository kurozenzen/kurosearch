<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		title: string;
		href: string;
		newtab?: boolean;
		class?: ClassValue;
		children?: Snippet;
	}

	let { title, href, children, newtab = false, ...rest }: Props = $props();
</script>

<a
	{title}
	{href}
	target={newtab ? '_blank' : '_self'}
	class={['mixin-circle mixin-invisible mixin-hover', rest.class]}
>
	{@render children?.()}
</a>

<style>
	a {
		--size: var(--line-height);
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
</style>
