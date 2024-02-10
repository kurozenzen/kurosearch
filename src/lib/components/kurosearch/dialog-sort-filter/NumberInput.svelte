<script lang="ts">
	import { isEnter } from '$lib/logic/keyboard-utils';

	export let value: number;
	export let min: number;
	export let max: number;
	export let step: number;

	let internalValue: string;

	const blurOnEnter = (event: KeyboardEvent) =>
		isEnter(event) && (event.target as HTMLElement)?.blur();

	const parseNumber = (str: string) => {
		let n = Number(str);
		if (!isNaN(n)) {
			value = n;
		}
	};

	const toString = (n: number) => (internalValue = `${n}`);

	$: parseNumber(internalValue);
	$: toString(value);
</script>

<input type="number" {min} {max} {step} bind:value={internalValue} on:keyup={blurOnEnter} />

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
