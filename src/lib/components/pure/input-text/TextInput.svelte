<script lang="ts">
	interface Props {
		placeholder?: string;
		value?: string;
		autocomplete?: string;
	}

	let { placeholder = '', value = $bindable(), autocomplete = 'off' }: Props = $props();
</script>

<input type="text" bind:value {placeholder} {autocomplete} />

<style>
	input {
		display: block;
		height: var(--box-height);
		padding-inline: var(--grid-gap);
		border-radius: var(--border-radius);
		background-color: var(--background-1);
	}
</style>
