<script>
  import Post from "./Post.svelte";

  /** @type {import("../../types/post").PostDTO[]} */
  export let posts;

  /** @type {IntersectionObserver} */
  export let observer;
</script>

<ol class="page">
  {#each posts as post}
    <Post {post} {observer} />
  {/each}
</ol>

<style>
  .page {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    gap: 1rem;
    min-height: 200vh;
  }
</style>
