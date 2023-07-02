<script>
  import TagInput from '../tag-input/TagInput.svelte'
  import { createSearchableTag } from '../../types/tags/SearchableTag'
  import TextInput from '../common/text/TextInput.svelte'
  import Dialog from '../dialog/Dialog.svelte'
  import { createEventDispatcher } from 'svelte'
  import SearchableTag from './SearchableTag.svelte'
  import Button from '../common/Button.svelte'

  /**  @typedef {import("../../types/tags/Supertag").Supertag} Supertag */

  const dispatch = createEventDispatcher()
  const emitEdit = () => dispatch('edit', { oldName: supertag.name, newSupertag })
  const emitClose = () => dispatch('close')

  /** @type {Supertag}*/
  export let supertag

  let newSupertag = { ...supertag, tags: [...supertag.tags] }
</script>

<Dialog on:close>
  <div>
    <h3>Edit Supertag</h3>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <span>Name</span>
    <TextInput bind:value={newSupertag.name} placeholder="Name" autocomplete="false" />
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <span>Description</span>
    <TextInput bind:value={newSupertag.description} placeholder="Description" autocomplete="false" />

    <span>Add or remove tags</span>
    <TagInput
      excludeSupertags
      on:pick={(e) => (newSupertag.tags = [...newSupertag.tags, createSearchableTag(e.detail.modifier, e.detail.name)])}
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
        emitClose()
      }}
    />
    <Button type="secondary" text="Cancel" title="Cancel" on:click={emitClose} />
  </div>
</Dialog>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }

  span {
    font-size: var(--text-size-small);
    margin-block-end: -0.75rem;
  }

  ul {
    min-height: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: var(--small-gap);
    justify-content: center;
  }
</style>
