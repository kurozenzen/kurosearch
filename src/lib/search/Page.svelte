<script>
  import Post from "./post/Post.svelte";

  /** @type {import("../../types/post").PostDTO[]} */
  export let posts;

</script>

<ol class="page">
  {#each posts as post}
    <Post {post} />
  {/each}
</ol>

<style>
  .page {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    gap: 1rem;
  }
</style>
