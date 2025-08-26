<script lang="ts">
	import loadSrc from '$lib/assets/load.svg?url';
	import pauseSrc from '$lib/assets/pause.svg?url';
	import playSrc from '$lib/assets/play.svg?url';

	interface Props {
		paused: boolean;
		loading: boolean;
		onclick?: (e: MouseEvent) => void;
		class?: string;
	}

	let { paused, loading, onclick, ...rest }: Props = $props();
</script>

<button type="button" {onclick} class={rest.class}>
	{#if loading}
		<img src={loadSrc} alt="Loading GIF" width="16" height="32" />
	{:else if paused}
		<img src={playSrc} alt="Start GIF" width="16" height="32" style="margin-left: 4px;" />
	{:else}
		<img src={pauseSrc} alt="Stop GIF" width="16" height="32" />
	{/if}
</button>

<style>
	button {
		--size: 48px;

		border-radius: var(--size);
		width: var(--size);
		height: var(--size);
		padding: 6px;
		padding-top: 8px;

		color: #000;
		background-color: #fff;

		user-select: none;
	}
</style>
