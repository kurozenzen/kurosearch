<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue, MouseEventHandler } from 'svelte/elements';
	import type { InputProps } from '../types';

	interface Props extends InputProps {
		children?: Snippet;
		onclick?: MouseEventHandler<HTMLButtonElement>;
		class: ClassValue;
	}

	let { id, children, onclick, disabled, ...rest }: Props = $props();
</script>

<button
	type="button"
	{id}
	class={['mixin-circle mixin-hover', rest.class]}
	aria-label={rest['aria-label']}
	onclick={(e) => {
		e.stopPropagation();
		onclick?.(e);
	}}
	{disabled}
>
	{@render children?.()}
</button>

<style>
	button {
		--size: var(--line-height);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: none;
		font-size: var(--text-size-large);
		vertical-align: middle;
	}
</style>
