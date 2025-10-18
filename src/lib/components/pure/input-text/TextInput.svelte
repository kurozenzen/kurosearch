<script lang="ts">
	interface Props {
		placeholder?: string;
		value?: string;
		autocomplete?: HTMLInputElement['autocomplete'];
		'aria-label'?: string;
		id?: string;
	}

	let { placeholder = '', value = $bindable(), autocomplete = 'off', ...rest }: Props = $props();
</script>

<input
	type="text"
	bind:value
	{placeholder}
	{autocomplete}
	id={rest.id}
	aria-label={rest['aria-label']}
/>

<style lang="scss">
	input {
		display: block;
		height: var(--box-height);
		padding-inline: var(--grid-gap);
		border-radius: var(--border-radius);
		background-color: var(--background-1);
	}
</style>
