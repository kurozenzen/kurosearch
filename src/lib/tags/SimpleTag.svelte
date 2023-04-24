<script>
  import { hasIcon } from '../../types/tag-type/tagtype'
  import { formatTagname } from '../../formatting/formatTagname'
  import activeTags from '../search/activeTagsStore'
  import userdata from '../account/userdata'
  import TagIcon from './TagIcon.svelte'

  /** @type {import("../../types/tags/Tag").Tag}*/
  export let tag

  $: activeSupertags = $userdata.supertags
    .filter((s) => $activeTags.find((at) => s.name === at.name))
    .flatMap((s) => s.tags)
  $: index = $activeTags.findIndex((t) => t.name === tag.name)
  $: isActivatedBySupertag = activeSupertags.find((t) => t.name === tag.name) !== undefined
  $: active = index >= 0
  $: icon = hasIcon(tag.type)
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
  tabindex="0"
  role="button"
  title="Click to add tag"
  on:click={isActivatedBySupertag
    ? () => {}
    : () => (active ? activeTags.removeByIndex(index) : activeTags.addByName(tag.name))}
  class:active
  class:supertag={isActivatedBySupertag}
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

  li.supertag {
    color: var(--text-accent);
    --background-color: var(--accent);
    border: dashed 2px var(--text-accent);
  }

  .artist {
    --background-color: var(--artist-background);
    --background-color-hover: var(--artist-background-hover);
  }

  .character {
    --background-color: var(--character-background);
    --background-color-hover: var(--character-background-hover);
  }

  .copyright {
    --background-color: var(--copyright-background);
    --background-color-hover: var(--copyright-background-hover);
  }

  .metadata {
    --background-color: var(--metadata-background);
    --background-color-hover: var(--metadata-background-hover);
  }

  @media (hover: hover) {
    li:not(.supertag):hover {
      background-color: var(--background-color-hover);
    }
  }

  li:not(.supertag):active {
    background-color: var(--background-1);
  }
</style>
