<script module lang="ts">
	export type ButtonType = 'primary' | 'secondary';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		title: string;
		disabled?: boolean;
		type?: ButtonType;
		onclick: () => void;
		children: Snippet;
		class: string;
	}

	let { id, title, disabled = false, children, onclick, ...rest }: Props = $props();
</script>

<button
	type="button"
	{id}
	{title}
	class="mixin-shape-box mixin-hover {rest.class}"
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

	button:disabled {
		background-color: var(--background-2);
	}
</style>
