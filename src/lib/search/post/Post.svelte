<script>
  import { postObserver } from './postObserver'
  import Details from './details/Details.svelte'

  /**
   * @typedef {import("../../../posts/Post").Post} Post
   */

  /** @type {Post} */
  export let post

  /** @type {HTMLElement}*/
  let media
  $: {
    if (media) {
      postObserver.observe(media)
    }
  }

  let open = false

  const toggleOpen = () => {
    open = !open
  }

  let pos = { screenX: 0, screenY: 0 }
  const onTouchStart = (ev) => {
    let { screenX, screenY } = ev.changedTouches.item(0)
    pos = { screenX, screenY }
  }

  const onTouchEnd = (ev) => {
    let { screenX, screenY } = ev.changedTouches.item(0)

    if (pos.screenX !== screenX || pos.screenY !== screenY) {
      return
    }

    toggleOpen();    
  }
</script>

<div class="post" tabindex="0">
  <div on:click={toggleOpen} class="content">
    {#if post.type === 'image'}
      <img
        loading="lazy"
        data-src={post.sample_url}
        alt={post.id.toString()}
        style={`aspect-ratio: ${post.width} / ${post.height}`}
        width={post.width}
        height={post.height}
        bind:this={media}
      />
    {:else if post.type === 'video'}
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
        on:touchstart|passive={onTouchStart}
        on:touchend|passive={onTouchEnd}
        bind:this={media}
      />
    {:else}
      <img
        loading="lazy"
        data-src={post.sample_url}
        alt={post.id.toString()}
        style={`aspect-ratio: ${post.width} / ${post.height}`}
        width={post.width}
        height={post.height}
        bind:this={media}
      />
    {/if}
  </div>
  {#if open}
    <Details {post} />
  {/if}
</div>

<style>
  .post {
    background-color: var(--background-1);
    border-radius: var(--border-radius);
    overflow: hidden;
    contain: content;
  }

  img,
  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    contain: strict style;
  }
</style>
