<script>
  import { formatTagname } from '../../formatting/formatTagname'
  import { MODIFIER_NAMES } from '../modifier/modifierData'

  /** @type {import("../../tags/SearchableTag").SearchableTag}*/
  export let tag
</script>

<li class={MODIFIER_NAMES[tag.modifier]}>
  {formatTagname(tag.name)}
</li>

<style>
  li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--background-2);
    color: var(--text-accent);
    height: 24px;
    border-radius: 12px;
    font-size: 12px;
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
