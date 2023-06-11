<script>
  import PostComponent from './post/Post.svelte'

  /**
   * @typedef {import("../../types/post/Post").Post[]} PostObject
   */

  /** @type {PostObject} */
  export let posts
</script>

<ol>
  {#each posts as post}
    <PostComponent {post} />
  {/each}
</ol>

<style>
  ol {
    display: contents;
  }
</style>
