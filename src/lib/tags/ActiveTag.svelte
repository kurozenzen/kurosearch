<script>
  import { createEventDispatcher } from 'svelte'
  import { formatCount } from '../../formatting/formatCount'
  import { formatTagname } from '../../formatting/formatTagname'
  import { MODIFIER_NAMES } from '../modifier/modifierData'

  /** @type {import("../../types/tags/ActiveTag").ActiveTag}*/
  export let tag

  const dispatch = createEventDispatcher()
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<button
  class={MODIFIER_NAMES[tag.modifier]}
  class:no-icon={tag.type !== 'supertag'}
  tabindex="0"
  title="Click to remove tag"
  on:click
  on:contextmenu|preventDefault={() => dispatch('contextmenu')}
>
  {formatTagname(tag.name)}
  {#if tag.count}
    ({formatCount(tag.count)})
  {/if}
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--accent);
    color: var(--text-accent);
    height: var(--line-height-small);
    border-radius: var(--line-height-small);
    font-size: var(--text-size-small);
    padding-left: 6px;
    padding-right: 12px;
    user-select: none;
    transition: background-color var(--default-transition-behaviour);
    contain: content;
  }

  .no-icon {
    padding-left: 12px;
  }

  @media (hover: hover) {
    button:hover {
      background-color: var(--accent-light);
    }
  }

  button:active {
    background-color: var(--accent-light);
  }

  .exclude {
    text-decoration: line-through;
  }

  .optional {
    font-style: italic;
  }
</style>
