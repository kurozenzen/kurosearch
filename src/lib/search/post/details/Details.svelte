<script>
  import SimpleTag from '../../../tags/SimpleTag.svelte'
  import Source from './Source.svelte'
  import Entry from './Entry.svelte'
  import CreatedAt from './CreatedAt.svelte'
  import Score from './Score.svelte'

  /** @type {import("../../../../posts/Post").Post} */
  export let post
</script>

<div class="details">
  <div class="summary">
    <Entry>
      <CreatedAt value={post.created_at} />
    </Entry>
    <Entry>
      <Score value={post.score} />
    </Entry>
    {#if post.source}
      <Entry>
        <Source source={post.source} />
      </Entry>
    {/if}
  </div>
  <ul>
    {#each post.tags as tagname}
      <SimpleTag name={tagname} />
    {/each}
  </ul>
</div>

<style>
  .details {
    display: flex;
    flex-direction: column;
    padding: var(--grid-gap);
    gap: var(--grid-gap);
  }

  .summary {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
</style>
