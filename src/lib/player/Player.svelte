<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { isEnter } from '../common/onEnterOrSpace'
  import PlayButton from './PlayButton.svelte'

  const SKIP_TIME = 5

  export let src
  export let poster
  export let width
  export let height
  export let loop

  let container
  let playing = false
  let loading = false
  let currentTime = 0
  let duration = 0
  /** @type {HTMLVideoElement}*/
  let video

  let displayVideo = false

  const dispatch = createEventDispatcher()
  const dispatchClick = () => dispatch('click')

  /** @type {(event: KeyboardEvent) => void} */
  const handleKeyDown = (event) => {
    if (isEnter(event)) {
      dispatchClick()
    } else if (event.key === ' ') {
      playing = !playing
    } else if (event.key === 'ArrowLeft') {
      currentTime = Math.max(0, currentTime - SKIP_TIME)
    } else if (event.key === 'ArrowRight') {
      currentTime = Math.min(duration, currentTime + SKIP_TIME)
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          displayVideo = true
        } else {
          if (video) {
            playing = false
            loading = false
            video.addEventListener(
              'error',
              () => {
                displayVideo = false
              },
              { once: true }
            )
            video.src = ''
          }
        }
      }
    },
    { rootMargin: '0px' }
  )

  onMount(() => observer.observe(container))
  onDestroy(() => observer.unobserve(container))

  $: timeLeft = duration - currentTime
  $: playing = displayVideo && playing
  $: paused = !playing
  $: percent = (currentTime / duration) * 98 + 1

  const formatDuration = (time) => {
    const floored = Math.floor(time)
    const seconds = floored % 60
    const minutes = Math.floor(floored / 60)

    return `${pad(minutes)}:${pad(seconds)}`
  }

  const pad = (x) => `${x < 10 ? '0' : ''}${x}`
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
  class="player"
  tabindex="0"
  bind:this={container}
  on:click={dispatchClick}
  on:keydown|preventDefault={handleKeyDown}
  style={`aspect-ratio: ${width} / ${height}`}
>
  {#if displayVideo}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      preload="metadata"
      bind:this={video}
      {poster}
      style={`aspect-ratio: ${width} / ${height}`}
      on:waiting={() => (loading = true)}
      on:playing={() => (loading = false)}
      on:pause={() => (loading = false)}
      on:ended={() => {
        if (!loop) {
          loading = false
          playing = false
        }
      }}
      {loop}
      bind:paused
      bind:currentTime
      bind:duration
      {src}
    />
    <span class:play={playing}>{formatDuration(timeLeft)}</span>
    <input
      type="range"
      min={0}
      step={0.0166666}
      max={duration}
      bind:value={currentTime}
      on:click|stopPropagation={() => {}}
      class:play={playing && !loading}
      style="{`background-image: linear-gradient(90deg, var(--accent) ${percent}%, var(--background-2) ${percent}%);`}}"
    />
    <PlayButton bind:playing bind:loading class="center" />
  {/if}
</div>

<style>
  div {
    contain: strict;
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
  }
  video {
    width: 100%;
    grid-area: 1/1/4/4;
    contain: strict;
  }

  .player :global(.center) {
    z-index: 15;
    grid-area: 2/2/3/3;
  }

  span {
    z-index: 15;
    grid-area: 3/3/4/4;
    place-self: end;
    margin-bottom: 26px;
    margin-inline: 12px;
    font-size: 12px;
    background-color: #0008;
    border-radius: 4px;
    padding: 4px;
    color: white;
  }

  input[type='range'] {
    -webkit-appearance: none;
    height: 26px;
    z-index: 15;
    margin: 0;
    grid-area: 3/1/4/4;
    align-self: flex-end;
    background-clip: content-box;
    padding-block: 12px;
    margin-inline: 12px;
  }

  input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    content: '';
    height: 4px;
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

  @keyframes fade {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .play {
    animation: fade 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
  }
</style>
