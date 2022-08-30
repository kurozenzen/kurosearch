<script>
  import { createEventDispatcher } from 'svelte'
  import { postObserver } from '../postObserver'

  /**
   * @typedef {import("../../../../posts/Post").Post} Post
   */

  /** @type {Post} */
  export let post

  const dispatch = createEventDispatcher()

  /** @type {HTMLElement}*/
  let media
  $: {
    if (media) {
      postObserver.observe(media)
    }
  }

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
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  preload="metadata"
  loading="lazy"
  data-src={post.sample_url}
  alt={post.id.toString()}
  style={`aspect-ratio: ${post.width} / ${post.height}`}
  width={post.width}
  height={post.height}
  controls
  on:click|preventDefault
  on:touchstart|passive={onTouchStart}
  on:touchend|passive={onTouchEnd}
  bind:this={media}
/>

<style>
  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    contain: strict;
  }
</style>
