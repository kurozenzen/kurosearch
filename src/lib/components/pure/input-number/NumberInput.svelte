<script lang="ts">
	import { blurOnEnter, blurOnEsc } from '#lib/logic/keybinds/blur';
	import type { InputProps } from '../types';

	interface Props extends InputProps {
		value: number;
		min: number;
		max: number;
		step: number;
	}

	let {
		id,
		name,
		value = $bindable(),
		min,
		max,
		step,
		disabled = false,
		...rest
	}: Props = $props();

	let internalValue: string = $state(`${value}`);

	$effect(() => {
		let n = Number(internalValue);
		if (!isNaN(n)) {
			value = n;
		}
	});

	$effect(() => {
		internalValue = `${value}`;
	});
</script>

<input
	{id}
	{name}
	type="number"
	{min}
	{max}
	{step}
	bind:value={internalValue}
	onkeyup={blurOnEnter}
	onkeydown={blurOnEsc}
	aria-label={rest['aria-label']}
	class="mixin-shape-item mixin-hover mixin-outline"
	{disabled}
/>

<style>
	input[type='number'] {
		width: 90px;
	}
</style>
