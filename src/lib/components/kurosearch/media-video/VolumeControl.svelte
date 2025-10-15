<script module lang="ts">
	let volume: number = $state(1);

	export const getVolume = () => volume;
</script>

<script lang="ts">
	import VolumeIcon from './VolumeIcon.svelte';
	import IconButton from '$lib/components/pure/button/IconButton.svelte';

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
	aria-label="Volume control"
	title="Adjust volume"
	aria-expanded={isVolumeVisible}
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
			aria-label="Volume slider"
			aria-valuemin={0}
			aria-valuemax={1}
			aria-valuenow={volume}
			aria-valuetext="{Math.round(volume * 100)}%"
			onclick={(e) => {
				e.stopPropagation();
				e.preventDefault();
			}}
		/>
	{/if}
</IconButton>
