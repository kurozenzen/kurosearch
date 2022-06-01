<script>
import { formatCreatedAt } from "../../../formatting/date";

import Codicon from "../../common/Codicon.svelte";
import SimpleTag from "../SimpleTag.svelte";

   /** @type {import("../../../types/post").PostDTO} */
   export let post;
</script>

<div class="summary">
  <Codicon title="View on original site" icon="link-external" />
  {formatCreatedAt(post.created_at)}
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

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 8px;
  }
</style>
