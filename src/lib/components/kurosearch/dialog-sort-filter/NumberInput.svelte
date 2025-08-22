<script lang="ts">
	import { isEnter } from '$lib/logic/keyboard-utils';

	interface Props {
		value: number;
		min: number;
		max: number;
		step: number;
	}

	let { value = $bindable(), min, max, step }: Props = $props();

	let internalValue: string = $state(`${value}`);

	const blurOnEnter = (event: KeyboardEvent) =>
		isEnter(event) && (event.target as HTMLElement)?.blur();

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

<input type="number" {min} {max} {step} bind:value={internalValue} onkeyup={blurOnEnter} />

<style>
	input[type='number'] {
		height: var(--line-height);
		box-sizing: border-box;
		background-color: transparent;
		border-radius: var(--border-radius);
		padding-inline: var(--small-gap);
		border: 2px solid var(--background-1);
		width: 90px;
	}
</style>
