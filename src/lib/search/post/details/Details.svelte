<script>
  import { formatCount } from '../../../../formatting/numbers'
  import { formatCreatedAt } from '../../../../formatting/date'
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
    padding: 1rem;
    gap: 1rem;
  }

  .summary {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
</style>
