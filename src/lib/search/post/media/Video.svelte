<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { postObserver } from '../postObserver'

  /**
   * @typedef {import("../../../../types/post/Post").Post} Post
   */

  /** @type {Post} */
  export let post

  const dispatch = createEventDispatcher()

  /** @type {HTMLElement}*/
  let media

  let pos = { screenX: 0, screenY: 0 }

  const onTouchStart = (ev) => {
    const { screenX, screenY } = ev.changedTouches.item(0)
    pos = { screenX, screenY }
  }

  const onTouchEnd = (ev) => {
    const { screenX, screenY } = ev.changedTouches.item(0)

    if (pos.screenX === screenX && pos.screenY === screenY) {
      dispatch('click')
    }
  }

  onMount(() => postObserver.observe(media))
  onDestroy(() => postObserver.unobserve(media))
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  preload="metadata"
  loading="lazy"
  data-src={post.file_url}
  style={`aspect-ratio: ${post.width} / ${post.height}`}
  width={post.width}
  height={post.height}
  controls
  on:click|preventDefault
  on:touchstart|passive={onTouchStart}
  on:touchend|passive={onTouchEnd}
  bind:this={media}
  loop={post.tags.some(t => t.name == 'loop')}
  tabindex="0"
/>

<style>
  @media not (display-mode: fullscreen) {
    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      contain: strict;
    }
  }
</style>
