<script lang="ts">
	interface Props {
		class?: string;
		onclick?: () => void;
	}

	let { onclick, ...rest }: Props = $props();
</script>

<button
	type="button"
	title="Enter Fullscreen mode"
	{onclick}
	aria-label="Enter Fullscreen mode"
	class={rest.class}
>
	<i class="codicon codicon-screen-full"></i>
</button>

<style>
	button {
		/* Layout */
		display: flex;
		align-items: center;
		justify-content: center;

		/* Look */
		width: var(--line-height);
		height: var(--line-height);
		border-radius: var(--border-radius-full);
		border: none;
		color: white;
		background-color: #0008;

		/* Position*/
		position: absolute;
		top: var(--small-gap);
		left: var(--small-gap);
		z-index: var(--z-media-controls);
	}

	@media (hover: hover) {
		button {
			transition: all var(--default-transition-behaviour);
		}

		button:hover {
			color: var(--text-highlight);
			background-color: #222;
		}
	}
</style>
