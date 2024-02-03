<script lang="ts">
	import { base } from '$app/paths';

	export let playing: boolean;
	export let loading: boolean;
</script>

<button type="button" on:click class={$$props.class}>
	{#if loading}
		<img src="{base}/assets/load.svg" alt="Loading GIF" width="16" height="32" />
	{:else if playing}
		<img src="{base}/assets/pause.svg" alt="Stop GIF" width="16" height="32" />
	{:else}
		<img
			src="{base}/assets/play.svg"
			alt="Start GIF"
			width="16"
			height="32"
			style="margin-left: 4px;"
		/>
	{/if}
</button>

<style>
	button {
		color: #000;
		background-color: #fff;
		border-radius: 24px;
		width: 48px;
		height: 48px;
		padding: 6px;
		padding-top: 8px;
	}
</style>
