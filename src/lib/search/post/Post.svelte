<script>
import Details from "./Details.svelte";


  /** @type {import("../../../types/post").PostDTO} */
  export let post;

  /** @type {IntersectionObserver} */
  export let observer;

  let open = false;
  let media;

  $: {
    if (media) {
      observer.observe(media);
    }
  }

  function toggleOpen() {
    open = !open;
  }
</script>

<div class="post" tabindex="0">
  <div on:click={toggleOpen} class="content">
    {#if post.type === "image"}
      <img
        loading="lazy"
        data-src={post.sample_url}
        alt={post.id.toString()}
        style={`aspect-ratio: ${post.width} / ${post.height}`}
        width={post.width}
        height={post.height}
        bind:this={media}
      />
    {:else if post.type === "video"}
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
