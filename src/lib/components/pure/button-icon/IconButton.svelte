<script module lang="ts">
	export type ButtonVariant = 'transparent' | 'with-background' | 'half-background';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	interface Props {
		id?: string;
		children?: Snippet;
		onclick?: MouseEventHandler<HTMLButtonElement>;
		'aria-label'?: string;
		class: string;
	}

	let { id, children, onclick, ...rest }: Props = $props();
</script>

<button
	type="button"
	{id}
	class="mixin-circle mixin-hover {rest.class}"
	aria-label={rest['aria-label']}
	onclick={(e) => {
		e.stopPropagation();
		onclick?.(e);
	}}
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
