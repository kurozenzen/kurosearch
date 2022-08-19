<script>
  import { createEventDispatcher } from 'svelte'
  import { formatCount } from '../../formatting/numbers'
  import { formatTagname } from '../../formatting/tags'
  import TagIcon from '../tags/TagIcon.svelte'
  import { MODIFIER_NAMES } from '../modifier/modifierData'

  /** @type {import("../../tags/ActiveTag").ActiveTag}*/
  export let tag

  const dispatch = createEventDispatcher()
</script>

<li
  class={MODIFIER_NAMES[tag.modifier]}
  class:no-icon={tag.type === 'general'}
  tabindex="0"
  title="Click to remove tag"
  on:click={() => dispatch('click')}
  on:contextmenu|preventDefault={() => dispatch('contextmenu')}
>
  <TagIcon type={tag.type} />
  {formatTagname(tag.name)}
  ({formatCount(tag.count)})
</li>

<style>
  li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--accent);
    color: var(--text-accent);
    height: 24px;
    border-radius: 12px;
    font-size: 12px;
    padding-left: 6px;
    padding-right: 12px;
    user-select: none;
  }

  .no-icon {
    padding-left: 12px;
  }

  @media (pointer: fine) {
    li:hover {
      background-color: var(--accent-light);
    }
  }

  li:active {
    background-color: var(--accent-light);
  }

  .exclude {
    text-decoration: line-through;
  }

  .optional {
    font-style: italic;
  }
</style>
