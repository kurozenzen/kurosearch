<script>
  import PostComponent from './post/Post.svelte'

  /**
   * @typedef {import("../../types/post/Post").Post[]} PostObject
   */

  /** @type {PostObject} */
  export let posts
</script>

<ol class="page">
  {#each posts as post}
    <PostComponent {post} />
  {/each}
</ol>

<style>
  .page {
    display: flex;
    flex-direction: column;
    padding-left: unset;
    gap: var(--grid-gap);
  }
</style>
