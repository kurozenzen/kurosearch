<script lang="ts">
	interface Props {
		value: number;
		max: number;
		type: 'video' | 'image';
	}

	let { value = $bindable(), max, type }: Props = $props();
	let percent = $derived((value / max) * 98 + 1);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="fullscreen-progress {type}"
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
		min="0"
		{max}
		style="{`background-image: linear-gradient(90deg, var(--accent) ${percent}%, var(--background-2) ${percent}%);`}}"
		onscroll={(e) => {
			e.stopPropagation();
			e.preventDefault();
		}}
	/>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		height: var(--line-height);
	}
	input {
		width: 100%;
	}

	input[type='range'] {
		appearance: none;
		-webkit-appearance: none;
		height: var(--line-height);
		margin: 0;
		background-clip: content-box;
		padding-block: 14px;
		border-radius: 2px;
		transition: transform var(--default-transition-behaviour);
	}

	input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		content: '';
		height: var(--tiny-gap);
	}

	input[type='range']::-moz-range-progress {
		background-color: var(--accent);
	}

	input[type='range']::-ms-fill-lower {
		background-color: var(--accent);
	}

	input[type='range']::-webkit-slider-thumb,
	input[type='range']::-ms-thumb {
		height: 16px;
		width: 16px;
		border-radius: 8px;
		background-color: var(--accent);
	}

	input[type='range']::-moz-range-thumb {
		height: 16px;
		width: 16px;
		border-radius: 8px;
		background-color: var(--accent);
		border: none;
	}

	input[type='range']::-webkit-slider-thumb {
		margin-top: -6px;
	}
</style>
