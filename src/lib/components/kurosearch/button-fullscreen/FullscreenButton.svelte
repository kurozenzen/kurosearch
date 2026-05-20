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
	class="mixin-circle mixin-shade mixin-hover {rest.class}"
>
	<i class="codicon codicon-screen-full"></i>
</button>

<style>
	button {
		--size: var(--line-height);

		/* Centering */
		display: flex;
		align-items: center;
		justify-content: center;

		/* Position*/
		position: absolute;
		top: var(--small-gap);
		left: var(--small-gap);
		z-index: var(--z-media-controls);
	}
</style>
