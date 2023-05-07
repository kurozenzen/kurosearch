<script>
  import { createEventDispatcher } from 'svelte'
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import SearchableTag from './SearchableTag.svelte'
  import Dialog from '../dialog/Dialog.svelte'
  import Button from '../common/Button.svelte'

  /** @type {import("../../types/tags/Supertag").Supertag} */
  export let supertag

  let deleting = false

  const dispatch = createEventDispatcher()
  const emitRemove = () => dispatch('remove', supertag)
  const emitEdit = () => dispatch('edit', supertag)
  const openDeleteDialog = () => (deleting = true)
  const closeDeleteDialog = () => (deleting = false)
</script>

<li>
  <h3>{supertag.name}</h3>
  <small>{Object.keys(supertag.tags).length} tags</small>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <i tabindex="0" class="codicon codicon-edit" on:click={emitEdit} on:keyup={onEnterOrSpace(emitEdit)} />
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <i
    tabindex="0"
    class="codicon codicon-close"
    on:click={openDeleteDialog}
    on:keyup={onEnterOrSpace(openDeleteDialog)}
  />
  <span>{supertag.description || supertag.name}</span>
  <ol>
    {#each supertag.tags as tag}
      <SearchableTag {tag} />
    {/each}
  </ol>
</li>

{#if deleting}
  <Dialog on:close={closeDeleteDialog}>
    <div>
      <span>Are you sure? This action cannot be undone.</span>
      <Button text="Yes, delete" title="Delete supertag" on:click={emitRemove} />
      <Button text="No, keep it" title="Cancel" on:click={closeDeleteDialog} />
    </div>
  </Dialog>
{/if}

<style>
  li {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 0.5rem;
    align-items: center;
    padding: var(--grid-gap);
    border-radius: var(--border-radius);
    transition: color var(--default-transition-behaviour);
  }

  li:not(:first-of-type) {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    border-block-start: 1px solid var(--background-2);
  }

  h3 {
    font-weight: normal;
    font-size: var(--text-size-large);
    color: var(--text-highlight);
  }

  small {
    font-size: var(--text-size-small);
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

  @media (hover: hover) {
    i:hover {
      color: var(--text-highlight);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }
</style>
