<script module lang="ts">
	let volume: number = $state(1);

	export const getVolume = () => volume;
</script>

<script lang="ts">
	import VolumeIcon from './VolumeIcon.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';

	interface Props {
		class?: string;
	}

	let props: Props = $props();

	let isVolumeVisible = $state(false);
</script>

<IconButton
	id="volume-button"
	class={props.class}
	variant="half-background"
	onclick={() => {
		isVolumeVisible = !isVolumeVisible;
	}}
>
	<VolumeIcon />
	{#if isVolumeVisible}
		<input
			class="volume-slider"
			type="range"
			min="0"
			max="1"
			step="0.01"
			bind:value={volume}
			onclick={(e) => {
				e.stopPropagation();
				e.preventDefault();
			}}
		/>
	{/if}
</IconButton>

<style>
	:global(#volume-button) {
		color: white;
	}

	.volume-slider {
		writing-mode: vertical-lr;
		position: absolute;
		transform: rotate(180deg);
		bottom: calc(2 * var(--small-gap) + var(--line-height));
		width: var(--line-height);
		z-index: var(--z-media-controls);
	}
</style>
