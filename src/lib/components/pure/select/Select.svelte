<script lang="ts">
	import type { InputProps } from '../types';

	interface Props extends InputProps {
		options: Record<string, string>;
		value: string;
	}

	let { id, options, value = $bindable(), disabled }: Props = $props();
</script>

<select {id} bind:value class="mixin-shape-item mixin-hover mixin-outline" {disabled}>
	{#each Object.entries(options) as [value, label]}
		<option {value}>{label}</option>
	{/each}
</select>

<style>
	select {
		display: inline-flex;
		align-items: center;
	}

	option {
		background-color: var(--background-0);
		color: var(--text);
	}
</style>
