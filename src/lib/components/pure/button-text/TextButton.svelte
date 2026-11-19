<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { InputProps } from '../types';
	import type { ClassValue } from 'svelte/elements';

	interface Props extends InputProps {
		title: string;
		onclick: () => void;
		children: Snippet;
		class: ClassValue;
	}

	let { id, title, disabled = false, children, onclick, ...rest }: Props = $props();
</script>

<button
	type="button"
	{id}
	{title}
	class={['mixin-shape-box mixin-hover', rest.class]}
	{onclick}
	{disabled}
>
	{@render children()}
</button>

<style>
	button {
		padding-inline: var(--box-height);
		text-align: center;
		text-transform: uppercase;
		white-space: nowrap;
	}
</style>
