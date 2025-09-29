<script module lang="ts">
	export type ButtonType = 'primary' | 'secondary';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';

	interface TextButtonProps {
		id?: string;
		title: string;
		disabled?: boolean;
		type?: ButtonType;
		onclick?: () => void;
		children?: Snippet;
		reducepadding?: boolean;
	}

	let {
		id,
		title,
		disabled = false,
		type = 'primary',
		children,
		onclick,
		reducepadding = false
	}: TextButtonProps = $props();

	// Map TextButton's type prop to Button's variant prop
	let variant = $derived(type as 'primary' | 'secondary');

	// Map reducepadding to Button's size prop
	let size: 'small' | 'medium' = $derived(reducepadding ? 'small' : 'medium');
</script>

<Button
	{id}
	{title}
	aria-label={title}
	{disabled}
	aria-disabled={disabled}
	{variant}
	{size}
	{onclick}
>
	{@render children?.()}
</Button>
