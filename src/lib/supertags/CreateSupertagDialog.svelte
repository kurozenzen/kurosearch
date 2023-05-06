<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '../common/Button.svelte'
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import ActiveTagComponent from '../tags/ActiveTag.svelte'
  import { Supertag } from '../../types/tags/Supertag'
  import { isValidName } from '../../types/tags/validation'
  import { toSearchableTag } from '../../types/tags/ActiveTag'
  import Dialog from '../dialog/Dialog.svelte'

  /**
   * @typedef {import("../../types/tags/ActiveTag").ActiveTag} ActiveTag
   */

  export let name = ''
  export let description = ''

  /** @type {ActiveTag[]} */
  export let tags

  const dispatch = createEventDispatcher()
  const closeDialog = () => dispatch('close')

  $: valid = isValidName(name)
</script>

<Dialog on:close={closeDialog}>
  <section>
    <h3>Create Supertag</h3>

    <i
      tabindex="0"
      role="button"
      class={`codicon codicon-close`}
      on:click={closeDialog}
      on:keyup={onEnterOrSpace(closeDialog)}
    />

    <div>
      <label for="supertag-name"> Name </label>
      <input type="text" bind:value={name} placeholder="Descriptive name" id="supertag-name" />
    </div>

    <div>
      <label for="supertag-description"> Description </label>
      <textarea type="text" bind:value={description} placeholder="Short description" id="supertag-description" />
    </div>

    <div>
      <span> Tags</span>
      <ol>
        {#each tags as tag}
          <ActiveTagComponent {tag} />
        {/each}
      </ol>
    </div>
    <Button
      title={valid ? 'Click to create supertag' : 'Enter a valid name to continue'}
      text="Create supertag"
      disabled={!valid}
      on:click={() => {
        dispatch('submit', new Supertag(name, description, tags.map(toSearchableTag)))
        closeDialog()
      }}
    />
  </section>
</Dialog>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--small-gap);

    border-radius: var(--border-radius);
    background-color: var(--background-1);
  }

  i {
    justify-self: end;
  }

  div {
    grid-column: span 2;
  }

  label,
  span {
    display: block;
    margin-bottom: 4px;
    color: var(--text);
    font-size: var(--text-size-small);
  }

  input,
  textarea {
    width: 100%;
    background-color: var(--background-1);
    border: unset;
    height: 24px;
    padding-inline: 4px;
  }

  ol {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
</style>
