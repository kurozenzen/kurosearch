<script>
  import { formatCount } from "../../../formatting/numbers";
  import { formatCreatedAt } from "../../../formatting/date";
  import SimpleTag from "../../tags/SimpleTag.svelte";
  import Source from "./Source.svelte";

  /** @type {import("../../../posts/Post").Post} */
  export let post;
</script>

<div class="summary">
  <div>
    <i class="codicon codicon-calendar" />
    <span>{formatCreatedAt(post.created_at)}</span>
  </div>
  <div>
    <i class="codicon codicon-heart" />
    <span>{formatCount(post.score)}</span>
  </div>
  {#if post.source}
    <div>
      <Source source={post.source} />
    </div>
  {/if}
</div>
<ul>
  {#each post.tags as tagname}
    <SimpleTag name={tagname} />
  {/each}
</ul>

<style>
  .summary {
    display: flex;
    padding: 1rem;
    gap: 1rem;
  }

  div {
    display: inline-flex;
    gap: 4px;
    align-items: center;
    height: 16px;
  }

  span {
    font-size: 14px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 8px;
  }
</style>
