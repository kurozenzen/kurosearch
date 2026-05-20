<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		href: string;
		newtab?: boolean;
		className?: string;
		children: Snippet;
	}

	let { title, href, children, newtab = false, className = '' }: Props = $props();
</script>

<a
	{title}
	{href}
	target={newtab ? '_blank' : '_self'}
	class="mixin-circle mixin-invisible mixin-hover {className}"
>
	{@render children()}
</a>

<style>
	a {
		--size: var(--line-height);

		/* Centering */
		display: inline-flex;
		align-items: center;
		justify-content: center;

		color: var(--text);
	}
</style>
