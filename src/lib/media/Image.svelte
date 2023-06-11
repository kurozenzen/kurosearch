<script>
  import { onDestroy, onMount } from 'svelte'
  import { postObserver } from '../search/post/postObserver'
  import { triggerClickOnEnter } from '../common/onEnterOrSpace'

  /** @typedef {import("../../types/post/Post").Post} Post */

  /** @type {Post} */
  export let post

  /** @type {HTMLElement}*/
  let media

  onMount(() => postObserver.observe(media))
  onDestroy(() => postObserver.unobserve(media))
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<img
  loading="lazy"
  data-src={post.sample_url}
  alt={post.id.toString()}
  style={`aspect-ratio: ${post.width} / ${post.height}`}
  width={post.width}
  height={post.height}
  bind:this={media}
  tabindex="0"
  on:click
  on:keydown={triggerClickOnEnter}
/>

<style>
  img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    contain: strict;
    z-index: var(--z-media);
    border-radius: var(--border-radius);
  }
</style>
