<script lang="ts">
	export let placeholder: string;
	export let value: string;
	export let autocomplete = 'off';
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
