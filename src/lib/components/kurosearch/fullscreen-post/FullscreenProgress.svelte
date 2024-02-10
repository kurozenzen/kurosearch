<script lang="ts">
	export let value: number;
	export let max: number;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click|stopPropagation|preventDefault on:scroll|stopPropagation|preventDefault>
	<input type="range" bind:value step="0.001" {max} on:scroll|stopPropagation|preventDefault />
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
