<script>
  import { createEventDispatcher } from 'svelte'
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import SearchableTag from './SearchableTag.svelte'
  import Dialog from '../dialog/Dialog.svelte'
  import Button from '../common/Button.svelte'
  import TagInput from '../tag-input/TagInput.svelte'
  import { createSearchableTag } from '../../types/tags/SearchableTag'
  import TextInput from '../common/text/TextInput.svelte'

  /**  @typedef {import("../../types/tags/Supertag").Supertag} Supertag */

  /** @type {Supertag} */
  export let supertag

  let deleting = false
  let editing = false

  let newSupertag = { ...supertag, tags: [...supertag.tags] }

  const dispatch = createEventDispatcher()
  const emitRemove = () => dispatch('remove', supertag)
  const emitEdit = () => dispatch('edit', { oldName: supertag.name, newSupertag })
  const openDeleteDialog = () => (deleting = true)
  const closeDeleteDialog = () => (deleting = false)
  const openEditDialog = () => {
    editing = true
    newSupertag = { ...supertag, tags: [...supertag.tags] }
  }
  const closeEditDialog = () => (editing = false)
</script>

<li>
  <h3>{supertag.name}</h3>
  <small>{Object.keys(supertag.tags).length} tags</small>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <i tabindex="0" class="codicon codicon-edit" on:click={openEditDialog} on:keyup={onEnterOrSpace(openEditDialog)} />
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
      <Button type="secondary" text="No, keep it" title="Cancel" on:click={closeDeleteDialog} />
    </div>
  </Dialog>
{/if}

{#if editing}
  <Dialog on:close={closeEditDialog}>
    <div>
      <TextInput bind:value={newSupertag.name} placeholder="Name" autocomplete="none" />
      <TextInput bind:value={newSupertag.description} placeholder="Description" autocomplete="none" />
      <TagInput
        on:pick={(e) =>
          (newSupertag.tags = [...newSupertag.tags, createSearchableTag(e.detail.modifier, e.detail.name)])}
      />
      <ul>
        {#each newSupertag.tags as tag, i}
          <SearchableTag
            {tag}
            on:click={() => {
              newSupertag.tags.splice(i, 1)
              newSupertag.tags = [...newSupertag.tags]
            }}
          />
        {/each}
      </ul>
      <Button
        text="Save"
        title="Save changes"
        on:click={() => {
          emitEdit()
          closeEditDialog()
        }}
      />
      <Button type="secondary" text="Cancel" title="Cancel" on:click={closeEditDialog} />
    </div>
  </Dialog>
{/if}

<style>
  ul {
    min-height: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: var(--small-gap);
    justify-content: center;
  }

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
