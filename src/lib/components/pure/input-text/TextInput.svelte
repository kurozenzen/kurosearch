<script lang="ts">
	import { blurOnEnter, blurOnEsc } from '#lib/logic/keybinds/blur';
	import type { ClassValue, FullAutoFill } from 'svelte/elements';
	import type { InputProps } from '../types';

	interface Props extends InputProps {
		class: ClassValue;
		placeholder?: string;
		value?: string;
		autocomplete?: FullAutoFill;
	}

	let {
		id,
		placeholder = '',
		value = $bindable(),
		autocomplete = 'off',
		disabled,
		...rest
	}: Props = $props();
</script>

<input
	class={['mixin-shape-item mixin-hover', rest.class]}
	{id}
	type="text"
	bind:value
	{placeholder}
	{autocomplete}
	onkeydown={blurOnEsc}
	onkeyup={blurOnEnter}
	{disabled}
/>
