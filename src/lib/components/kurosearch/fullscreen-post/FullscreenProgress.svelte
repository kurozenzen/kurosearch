<script lang="ts">
	interface Props {
		value: number;
		max: number;
	}

	let { value = $bindable(), max }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	onclick={(e) => {
		e.stopPropagation();
		e.preventDefault();
	}}
	onscroll={(e) => {
		e.stopPropagation();
		e.preventDefault();
	}}
>
	<input
		type="range"
		bind:value
		step="0.001"
		{max}
		onscroll={(e) => {
			e.stopPropagation();
			e.preventDefault();
		}}
	/>
</div>

<style>
	div {
		position: absolute;
		display: flex;
		align-items: center;
		left: var(--grid-gap);
		bottom: 0;
		box-sizing: border-box;
		width: calc(100vw - 3 * var(--grid-gap) - var(--line-height));
		z-index: var(--z-media-controls);
		height: calc(2 * var(--grid-gap) + var(--line-height));
	}

	input {
		width: 100%;
	}

	input[type='range']::-webkit-slider-thumb,
	input[type='range']::-ms-thumb {
		background-color: var(--accent);
	}

	/* input[type='range']::-moz-range-thumb {
		background-color: var(--accent);
		border: none;
	} */
</style>
