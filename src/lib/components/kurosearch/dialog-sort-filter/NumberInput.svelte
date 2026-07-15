<script lang="ts">
	import { blurOnEnter, blurOnEsc } from '$lib/logic/keybinds/blur';

	interface Props {
		value: number;
		min: number;
		max: number;
		step: number;
		'aria-label'?: string;
	}

	let { value = $bindable(), min, max, step, ...rest }: Props = $props();

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
	type="number"
	{min}
	{max}
	{step}
	bind:value={internalValue}
	onkeyup={blurOnEnter}
	onkeydown={blurOnEsc}
	aria-label={rest['aria-label']}
	class="mixin-shape-item"
/>

<style>
	input[type='number'] {
		box-sizing: border-box;
		background-color: transparent;
		padding-inline: var(--small-gap);
		border: 2px solid var(--background-1);
		width: 90px;
	}
</style>
