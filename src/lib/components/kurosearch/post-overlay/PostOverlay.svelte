<script lang="ts">
	import IconButton from '$lib/components/pure/button/IconButton.svelte';
	import FullscreenButton from '../button-fullscreen/FullscreenButton.svelte';
	import PlayButton from '../button-play/PlayButton.svelte';
	import VideoSeekInput from '../media-video/VideoSeekInput.svelte';
	import VideoTime from '../media-video/VideoTime.svelte';
	import VolumeControl from '../media-video/VolumeControl.svelte';

	interface Props {
		// images / gifs / videos
		hidden: boolean;
		onfullscreen?: (currentTime?: number) => void;

		// gifs / videos
		mediaType: string;
		paused?: boolean;
		loading?: boolean;
		ontoggleplay?: () => void;

		// videos
		currentTime?: number;
		duration?: number;

		// fullscreen
		ondetails?: () => void;
	}

	let {
		onfullscreen,
		paused,
		loading,
		ontoggleplay,
		currentTime = $bindable(),
		duration,
		ondetails,
		mediaType,
		hidden: desiredHidden = false
	}: Props = $props();

	let hidden = $derived(desiredHidden && paused === false && loading === false);

	const ontoggleplayinternal = (e: MouseEvent) => {
		e.stopPropagation();
		desiredHidden = true;
		ontoggleplay?.();
	};
</script>

<div class="overlay" class:hidden role="group" aria-label="Media controls">
	{#if onfullscreen !== undefined}
		<FullscreenButton
			onclick={() => onfullscreen(currentTime)}
			class="post-overlay-button-fullscreen"
		/>
	{/if}
	{#if paused !== undefined && loading !== undefined && ontoggleplay !== undefined}
		<PlayButton
			{paused}
			{loading}
			onclick={ontoggleplayinternal}
			class="post-overlay-button-play"
		/>
	{/if}
	{#if currentTime !== undefined && duration !== undefined}
		{@const timeLeft = duration - currentTime}
		<div class="video-controls">
			{#if mediaType === 'video'}
				<VideoTime {timeLeft} />
			{:else}
				<span class="media-type">{mediaType}</span>
			{/if}
			<VideoSeekInput bind:currentTime {duration} />
			<VolumeControl />
			{#if ondetails !== undefined}
				<IconButton variant="half-background" onclick={ondetails}>
					<i class="codicon codicon-tag"></i>
				</IconButton>
			{/if}
		</div>
	{/if}
</div>

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto 1fr;

		z-index: var(--z-media-controls);

		transition: opacity var(--default-transition-behaviour);
		pointer-events: none;
	}

	.video-controls {
		grid-column: 1;
		grid-row: 3;
		display: flex;
		align-items: center;
		align-self: end;
		gap: var(--small-gap);
		padding: var(--small-gap);
		touch-action: none;
	}

	.overlay.hidden {
		opacity: 0;
	}

	.overlay.hidden .video-controls {
		pointer-events: none;
	}

	.media-type {
		text-transform: uppercase;
		font-size: 12px;
		background-color: #0008;
		border-radius: var(--tiny-gap);
		padding: var(--tiny-gap);
		color: white;
		user-select: none;
	}
</style>
