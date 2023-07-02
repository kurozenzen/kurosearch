<script>
  import { onDestroy, onMount } from 'svelte'
  import { postObserver } from '../search/post/postObserver'
  import { triggerClickOnEnter } from '../common/onEnterOrSpace'

  /** @typedef {import("../../types/post/Post").Post} Post */

  /** @type {Post} */
  export let post
  /** @type {boolean} */
  export let open

  $: ratio = post.width / post.height
  $: expandable = ratio < 0.33

  /** @type {HTMLElement}*/
  let media

  onMount(() => postObserver.observe(media))
  onDestroy(() => postObserver.unobserve(media))
</script>

<div class:expandable class:open>
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
</div>

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

  .expandable:not(.open) {
    max-height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .expandable:not(.open)::before {
    position: absolute;
    z-index: 100;
    text-align: center;
    width: 100%;
    content: 'Expand';
    padding: var(--grid-gap);
    background: linear-gradient(0deg, var(--background-0) 0%, transparent 100%);
    user-select: none;
    pointer-events: none;
    bottom: 0;
    color: var(--text-highlight);
  }
</style>
