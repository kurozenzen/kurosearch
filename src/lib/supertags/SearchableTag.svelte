<script>
  import { formatTagname } from '../../formatting/formatTagname'
  import { MODIFIER_NAMES } from '../modifier/modifierData'

  /** @type {import("../../types/tags/SearchableTag").SearchableTag}*/
  export let tag
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li class={MODIFIER_NAMES[tag.modifier]} on:click>
  {formatTagname(tag.name)}
</li>

<style>
  li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--background-2);
    color: var(--text-accent);
    height: var(--line-height-small);
    border-radius: var(--line-height-small);
    font-size: var(--text-size-small);
    padding-left: 12px;
    padding-right: 12px;
    user-select: none;
  }

  .exclude {
    text-decoration: line-through;
  }

  .optional {
    font-style: italic;
  }
</style>
