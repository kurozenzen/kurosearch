<script>
  import { createEventDispatcher } from 'svelte'
  import Dialog from '../dialog/Dialog.svelte'
  import Button from '../common/Button.svelte'

  /**  @typedef {import("../../types/tags/Supertag").Supertag} Supertag */

  const dispatch = createEventDispatcher()
  const emitRemove = () => dispatch('remove', supertag)
  const emitClose = () => dispatch('close')

  /** @type {Supertag}*/
  export let supertag
</script>

<Dialog on:close>
  <div>
    <span>Are you sure? This action cannot be undone.</span>
    <Button
      text="Yes, delete"
      title="Delete supertag"
      on:click={() => {
        emitRemove()
        emitClose()
      }}
    />
    <Button type="secondary" text="No, keep it" title="Cancel" on:click={emitClose} />
  </div>
</Dialog>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }
</style>
