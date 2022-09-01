<script>
  import Details from './details/Details.svelte'
  import Image from './media/Image.svelte'
  import Video from './media/Video.svelte'
  import Gif from './media/Gif.svelte'

  /** @typedef {import("../../../posts/Post").Post} Post */

  /** @type {Post} */
  export let post

  let open = false

  const toggleOpen = () => {
    open = !open
  }
</script>

<div class="post" tabindex="0">
  {#if post.type === 'image'}
    <Image {post} on:click={toggleOpen} />
  {:else if post.type === 'video'}
    <Video {post} on:click={toggleOpen} />
  {:else}
    <Gif {post} on:click={toggleOpen} />
  {/if}
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
</style>
