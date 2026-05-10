<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
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
		bufferedTime?: number;
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
		bufferedTime = 0,
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

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="overlay" class:hidden>
	{#if onfullscreen !== undefined}
		<FullscreenButton
			onclick={() => onfullscreen(currentTime)}
			class="post-overlay-button-fullscreen"
		/>
	{/if}
	{#if paused !== undefined && loading !== undefined && ontoggleplay !== undefined && currentTime !== undefined && duration !== undefined}
		<PlayButton
			{paused}
			{loading}
			onclick={ontoggleplayinternal}
			class="post-overlay-button-play"
		/>
	{/if}

	<div class="video-controls">
		{#if currentTime !== undefined && duration !== undefined}
			{@const timeLeft = duration - currentTime}
			{#if mediaType === 'video'}
				<VideoTime {timeLeft} />
			{:else}
				<span class="media-type">{mediaType}</span>
			{/if}
			<VideoSeekInput bind:currentTime {bufferedTime} {duration} />
			{#if mediaType === 'video'}
				<VolumeControl />
			{/if}
		{/if}
		{#if ondetails !== undefined}
			<IconButton variant="half-background" onclick={ondetails}>
				<i class="codicon codicon-tag"></i>
			</IconButton>
		{/if}
	</div>
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

	.overlay :global(*) {
		pointer-events: auto;
	}

	.overlay :global(.post-overlay-button-fullscreen) {
		grid-column: 1;
		grid-row: 1;
	}

	.overlay :global(.post-overlay-button-play) {
		grid-column: 1;
		grid-row: 2;
		place-self: center;
	}

	.video-controls {
		grid-column: 1;
		grid-row: 3;
		display: flex;
		align-items: center;
		align-self: end;
		justify-content: end;
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
