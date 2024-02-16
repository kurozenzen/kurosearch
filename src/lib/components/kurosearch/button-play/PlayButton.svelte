<script lang="ts">
	import { base } from '$app/paths';

	const LOAD_SRC = `${base}/assets/load.svg`;
	const PLAY_SRC = `${base}/assets/play.svg`;
	const PAUSE_SRC = `${base}/assets/pause.svg`;

	export let playing: boolean;
	export let loading: boolean;
</script>

<button type="button" on:click class={$$props.class}>
	{#if loading}
		<img src={LOAD_SRC} alt="Loading GIF" width="16" height="32" />
	{:else if playing}
		<img src={PAUSE_SRC} alt="Stop GIF" width="16" height="32" />
	{:else}
		<img src={PLAY_SRC} alt="Start GIF" width="16" height="32" style="margin-left: 4px;" />
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
