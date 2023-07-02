<script>
  import Details from './details/Details.svelte'
  import Image from '../../media/Image.svelte'
  import Gif from '../../media/Gif.svelte'
  import Player from '../../media/Player.svelte'

  /** @typedef {import("../../../types/post/Post").Post} Post */

  /** @type {Post} */
  export let post

  let open = false

  const toggleOpen = () => {
    open = !open
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class:open>
  {#if post.type === 'image'}
    <Image {post} on:click={toggleOpen} {open} />
  {:else if post.type === 'video'}
    <Player
      src={post.file_url}
      poster={post.sample_url}
      width={post.width}
      height={post.height}
      loop={post.tags.some((t) => t.name == 'loop')}
      on:click={toggleOpen}
    />
  {:else}
    <Gif {post} on:click={toggleOpen} />
  {/if}
  {#if open}
    <Details {post} />
  {/if}
</div>

<style>
  div {
    background-color: var(--background-1);
  }

  @media (min-width: 800px) {
    div {
      border-radius: var(--border-radius);
    }
  }
</style>
