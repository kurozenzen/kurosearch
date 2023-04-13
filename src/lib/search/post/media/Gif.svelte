<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { postObserver } from '../postObserver'
  import onEnterOrSpace from '../../../common/onEnterOrSpace'
  import LoadingAnimation from '../../../common/LoadingAnimation.svelte'
  import playSvg from '../../../../assets/play.svg'
  import pauseSvg from '../../../../assets/pause.svg'

  /**
   * @typedef {import("../../../../types/post/Post").Post} Post
   */

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

  const togglePlaying = () => {
    loading = true
    playing = !playing
    media.src = playing ? animated_src : image_src
  }

  onMount(() => postObserver.observe(media))
  onDestroy(() => postObserver.unobserve(media))
</script>

<div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <img
    class="media-img"
    loading="lazy"
    data-src={data_src}
    alt={post.id.toString()}
    style={`aspect-ratio: ${post.width} / ${post.height}`}
    width={post.width}
    height={post.height}
    bind:this={media}
    tabindex="0"
    on:click={() => dispatch('click')}
    on:keyup={onEnterOrSpace(() => dispatch('click'))}
    on:load={() => (loading = false)}
  />

  <button on:click={togglePlaying} class:play={playing && !loading}>
    {#if loading}
      <LoadingAnimation />
    {:else if playing}
      <img src={pauseSvg} alt="Stop GIF" width="16" height="32" />
    {:else}
      <img src={playSvg} alt="Start GIF" width="16" height="32" style="margin-left: 4px;" />
    {/if}
  </button>
</div>

<style>
  .media-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    contain: strict;
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

  button {
    color: black;
    background-color: white;
    border-radius: 30px;
    position: absolute;
    width: 48px;
    height: 48px;
    padding: 6px;
    padding-top: 8px;
  }

  div {
    position: relative;
    display: grid;
    place-items: center;
  }
</style>
