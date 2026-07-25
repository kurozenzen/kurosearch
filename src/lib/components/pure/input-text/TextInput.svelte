<script lang="ts">
	import { blurOnEnter, blurOnEsc } from '$lib/logic/keybinds/blur';
	import type { FullAutoFill } from 'svelte/elements';

	interface Props {
		placeholder?: string;
		value?: string;
		autocomplete?: FullAutoFill;
	}

	let { placeholder = '', value = $bindable(), autocomplete = 'off' }: Props = $props();
</script>

<input
	type="text"
	bind:value
	{placeholder}
	{autocomplete}
	onkeydown={blurOnEsc}
	onkeyup={blurOnEnter}
/>

<style>
	input {
		display: block;
		height: var(--box-height);
		padding-inline: var(--grid-gap);
		border-radius: var(--border-radius);
		background-color: var(--background-1);
	}
</style>
