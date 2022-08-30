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
    font-size: 12px;
    padding-left: 4px;
    padding-right: 12px;
    user-select: none;
    transition: background-color 0.1s linear;
    padding-left: 12px;
  }

  li.active {
    background-color: var(--accent);
  }

  @media (pointer: fine) {
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
