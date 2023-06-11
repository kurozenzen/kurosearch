<script>
  import { createEventDispatcher } from 'svelte'
  import { getNextModifier } from '../../types/tag-modifier/modifier'
  import ActiveTag from '../tags/ActiveTag.svelte'
  import activeTags from './activeTagsStore'
  import { createActiveTag } from '../../types/tags/ActiveTag'
  import account from '../account/account'

  const dispatch = createEventDispatcher()
</script>

<ul>
  {#if $activeTags.length}
    {#each $activeTags as tag, i}
      <ActiveTag
        {tag}
        on:click={() => activeTags.removeByIndex(i)}
        on:contextmenu={() =>
          activeTags.addOrReplace(createActiveTag(getNextModifier(tag.modifier), tag.name, tag.count, tag.type))}
      />
    {/each}
    {#if $activeTags.length > 1 && $account.loggedIn}
      <button class="add-supertag" title="Click to create a new supertag" on:click={() => dispatch('supertag')}>
        <i class="codicon codicon-star-full" />
      </button>
    {/if}
  {/if}
</ul>

<style>
  ul {
    min-height: var(--line-height-small);
    display: flex;
    flex-wrap: wrap;
    gap: var(--small-gap);
    justify-content: center;
  }

  .add-supertag {
    width: var(--line-height-small);
    height: var(--line-height-small);
    border-radius: var(--line-height-small);
    padding: 4px;
    background-color: var(--accent);
    color: var(--text-accent);
    transition: background-color var(--default-transition-behaviour);
  }

  @media (hover: hover) {
    .add-supertag:hover {
      background-color: var(--accent-light);
    }
  }

  .add-supertag i {
    font-size: var(--text-size);
    width: 16px;
    text-align: center;
  }
</style>
