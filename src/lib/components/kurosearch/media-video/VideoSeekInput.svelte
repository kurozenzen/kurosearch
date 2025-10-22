<script lang="ts">
	interface Props {
		currentTime: number;
		bufferedTime: number;
		duration: number;
		class?: string;
	}

	let { currentTime = $bindable(), bufferedTime, duration, ...rest }: Props = $props();

	let percentCurrentTime = $derived((currentTime / duration) * 98 + 1);
	let percentBuffered = $derived((bufferedTime / duration) * 98 + 1);
</script>

<input
	bind:value={currentTime}
	type="range"
	min={0}
	max={duration}
	step={0.01}
	style="--current-time: {percentCurrentTime}%; --buffered-time: {percentBuffered}%"
	class={rest.class}
	aria-label="Video seek input"
/>

<style>
	input[type='range'] {
		--current-time: 0% default;
		--buffered-time: 0% default;
		flex-grow: 1;
		appearance: none;
		-webkit-appearance: none;
		height: calc(2 * var(--line-height));
		margin: 0;
		align-self: flex-end;
		background-clip: content-box;
		padding-block: calc(14px + var(--line-height)) 14px;
		margin-top: calc(-14px - var(--line-height));
		border-radius: 2px;

		touch-action: manipulation; /* FIREFOX: Prevent all touch gestures except scroll down */

		background-image: linear-gradient(
			90deg,
			var(--accent) var(--current-time),
			#888 var(--current-time),
			#888 var(--buffered-time),
			var(--background-2) var(--buffered-time)
		);
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
