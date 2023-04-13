<script>
  import { createEventDispatcher } from 'svelte'
  import { getNextModifier } from '../../types/tag-modifier/modifier'
  import ActiveTag from '../tags/ActiveTag.svelte'
  import activeTags from './activeTagsStore'
  import { ActiveTag as AT } from '../../types/tags/ActiveTag'

  const dispatch = createEventDispatcher()
</script>

<ul>
  {#if $activeTags.length}
    {#each $activeTags as tag, i}
      <ActiveTag
        {tag}
        on:click={() => activeTags.removeByIndex(i)}
        on:contextmenu={() =>
          activeTags.addOrReplace(new AT(getNextModifier(tag.modifier), tag.name, tag.count, tag.type))}
      />
    {/each}
    {#if $activeTags.length > 1}
      <button class="add-supertag" title="Click to create a new supertag" on:click={() => dispatch('supertag')}>
        <i class="codicon codicon-star-full" />
      </button>
    {/if}
  {/if}
</ul>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  .add-supertag {
    width: 24px;
    height: 24px;
    padding: 4px;
    border-radius: 12px;
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
