<script>
  import { formatTagname } from '../../formatting/formatTagname'
  import activeTags from '../search/activeTagsStore'

  /** @type {string}*/
  export let name

  $: index = $activeTags.findIndex((t) => t.name === name)
  $: active = index >= 0
</script>

<li
  tabindex="0"
  title="Click to add tag"
  on:click={() => (active ? activeTags.removeByIndex(index) : activeTags.addByName(name))}
  class:active
>
  {formatTagname(name)}
</li>

<style>
  li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--background-2);
    color: white;
    height: 24px;
    border-radius: 16px;
    font-size: var(--text-size-small);
    padding-inline: 12px;
    user-select: none;
    transition: background-color var(--default-transition-behaviour);
  }

  li.active {
    background-color: var(--accent);
  }

  @media (hover: hover) {
    li:hover {
      background-color: var(--background-3);
    }

    li.active:hover {
      background-color: var(--accent-light);
    }
  }

  li:active {
    background-color: var(--background-1);
  }
</style>
