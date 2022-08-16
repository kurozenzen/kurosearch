<script>
  import { createEventDispatcher } from "svelte";

  import { ActiveTag } from "../../tags/ActiveTag";
  import onEnterOrSpace from "../common/onEnterOrSpace";
  import ActiveTagComponent from "../tags/ActiveTag.svelte";

  /** @type {import("../../tags/Supertag").Supertag} */
  export let supertag;

  const dispatch = createEventDispatcher();

  const emitRemove = () => dispatch("remove", supertag.name);
  const emitEdit = () => dispatch("edit", supertag.name);
</script>

<li>
  <h3>{supertag.name}</h3>
  <small>{Object.keys(supertag.tags).length} tags</small>
  <i
    tabindex="0"
    class={`codicon codicon-edit`}
    on:click={emitEdit}
    on:keyup={onEnterOrSpace(emitEdit)}
  />
  <i
    tabindex="0"
    class={`codicon codicon-close`}
    on:click={emitRemove}
    on:keyup={onEnterOrSpace(emitRemove)}
  />
  <span>{supertag.description}</span>
  <ol>
    {#each Object.entries(supertag.tags) as entry}
      <ActiveTagComponent
        tag={new ActiveTag(entry[1], entry[0], 0, "general")}
      />
    {/each}
  </ol>
</li>

<style>
  li {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    border-radius: 5px;
  }

  h3 {
    font-weight: normal;
    font-size: 16px;
    color: var(--text-hover);
  }

  small {
    font-size: 12px;
  }

  span {
    grid-area: 2/1/3/4;
  }

  ol {
    grid-area: 3/1/4/4;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  i {
    height: 24px;
    width: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 12px;
  }

  @media (pointer: fine) {
    i:hover {
      color: var(--text-hover);
    }

    li:hover {
      background-color: var(--background-2);
    }
  }
</style>
