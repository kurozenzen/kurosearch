<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { postObserver } from '../search/post/postObserver'
  import { triggerClickOnEnter } from '../common/onEnterOrSpace'
  import PlayButton from './PlayButton.svelte'

  /** @typedef {import("../../types/post/Post").Post} Post */

  /** @type {Post} */
  export let post

  const dispatch = createEventDispatcher()

  /** @type {HTMLImageElement}*/
  let media
  let playing = false
  let loading = false

  $: image_src = post.sample_url.endsWith('.gif') ? post.preview_url : post.sample_url
  $: animated_src = post.sample_url.endsWith('.gif') ? post.sample_url : post.file_url
  $: data_src = playing ? animated_src : image_src

  $: {
    if (media) {
      media.src = playing ? animated_src : image_src
    }
  }

  onMount(() => postObserver.observe(media))
  onDestroy(() => postObserver.unobserve(media))
</script>

<div class="container" style={`aspect-ratio: ${post.width} / ${post.height}`}>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <img
    class="media-img"
    loading="lazy"
    data-src={data_src}
    alt={post.id.toString()}
    width={post.width}
    height={post.height}
    bind:this={media}
    tabindex="0"
    on:click
    on:keydown={triggerClickOnEnter}
    on:load={() => (loading = false)}
  />

  <PlayButton bind:playing bind:loading class="center" />
</div>

<style>
  .media-img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    contain: strict;
    border-radius: var(--border-radius);
    grid-area: 1/1/4/4;
  }

  .container {
    position: relative;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
    display: grid;
    place-items: center;
    z-index: var(--z-media);
    border-radius: var(--border-radius);
  }

  .container :global(.center) {
    z-index: calc(var(--z-media) + 1);
    grid-area: 2/2/3/3;
  }
</style>
