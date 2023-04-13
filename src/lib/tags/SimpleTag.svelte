<script>
  import { hasIcon } from '../../tags/type/tagtype'
  import { formatTagname } from '../../formatting/formatTagname'
  import activeTags from '../search/activeTagsStore'
  import TagIcon from './TagIcon.svelte'

  /** @type {import("../../tags/Tag").Tag}*/
  export let tag

  $: index = $activeTags.findIndex((t) => t.name === tag.name)
  $: active = index >= 0
  $: icon = hasIcon(tag.type)
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
  tabindex="0"
  role="button"
  title="Click to add tag"
  on:click={() => (active ? activeTags.removeByIndex(index) : activeTags.addByName(tag.name))}
  class:active
  class:icon
  class={tag.type}
>
  {#if icon}
    <TagIcon type={tag.type} />
  {/if}
  {formatTagname(tag.name)}
</li>

<style>
  li {
    --background-color: var(--background-2);
    --background-color-hover: var(--background-3);

    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--background-color);
    color: var(--text);
    height: 24px;
    border-radius: 16px;
    font-size: var(--text-size-small);
    padding-inline: 12px;
    user-select: none;
    transition: background-color var(--default-transition-behaviour);
  }

  .icon {
    padding-inline: 6px 12px;
  }

  li.active {
    color: var(--text-accent);
    --background-color: var(--accent);
    --background-color-hover: var(--accent-light);
  }

  li:not(.active).artist {
    --background-color: var(--artist-background);
    --background-color-hover: var(--artist-background-hover);
  }

  li:not(.active).character {
    --background-color: var(--character-background);
    --background-color-hover: var(--character-background-hover);
  }

  li:not(.active).copyright {
    --background-color: var(--copyright-background);
    --background-color-hover: var(--copyright-background-hover);
  }

  li:not(.active).metadata {
    --background-color: var(--metadata-background);
    --background-color-hover: var(--metadata-background-hover);
  }

  @media (hover: hover) {
    li:hover {
      background-color: var(--background-color-hover);
    }
  }

  li:active {
    background-color: var(--background-1);
  }
</style>
