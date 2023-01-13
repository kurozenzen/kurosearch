<script>
  import Ad from './ads/Ad.svelte'
  import PostComponent from './post/Post.svelte'

  /** @type {import("../../posts/Post").Post[]} */
  export let posts
</script>

<ol class="page">
  {#each posts as post}
    <PostComponent {post} />
  {/each}
</ol>

<Ad />

<style>
  .page {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    gap: 1rem;
    contain: content;
  }
</style>
