<script>
  import Details from './details/Details.svelte'
  import Image from './media/Image.svelte'
  import Video from './media/Video.svelte'
  import Gif from './media/Gif.svelte'

  /** @typedef {import("../../../types/post/Post").Post} Post */

  /** @type {Post} */
  export let post

  let open = false

  const toggleOpen = () => {
    open = !open
  }
</script>

<div class="post">
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
    overflow: hidden;
    contain: content;
  }

  @media (min-width: 800px) {
    .post {
      border-radius: var(--border-radius);
    }
  }
</style>
