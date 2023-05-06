<script>
  import { createEventDispatcher } from 'svelte'
  import ModifierSelect from '../modifier/ModifierSelect.svelte'
  import LoadingAnimation from '../common/LoadingAnimation.svelte'
  import { isEnter } from '../common/onEnterOrSpace'
  import { getTagSuggestions } from '../../api-client/ApiClient'
  import userdata from '../account/userdata'
  import { Tag, toActiveTag } from '../../types/tags/Tag'
  import TagSuggestion from './TagSuggestion.svelte'
  import HelpButton from './HelpButton.svelte'

  /**
   * @typedef {import("../../types/tags/Tag").Tag} Tag
   * @typedef {import("../../types/tag-modifier/modifier").Modifier} Modifier
   */

  const dispatch = createEventDispatcher()

  /** @type {Promise<void>}*/
  let searchPromise

  let searchTerm = ''
  let selectedIndex = 0
  /** @type {Modifier}*/
  let modifier = '+'
  let open = false

  /** @type {Tag[]}*/
  let tags = []

  $: {
    tags = []
    selectedIndex = 0
    if (searchTerm !== '') {
      searchPromise = getSuggestions(searchTerm)
    }
  }

  /** @param {Tag} tag */
  const pick = (tag) => () => {
    dispatch('pick', toActiveTag(tag, modifier))
    resetInput()
  }

  /**
   * @param {string} term
   */
  async function getSuggestions(term) {
    open = true
    tags = [
      ...$userdata.supertags
        .filter((s) => s.name.toLowerCase().includes(term.toLowerCase()))
        .map((s) => new Tag(s.name, Object.keys(s.tags).length, 'supertag')),
      ...(await getTagSuggestions(term)),
    ]
  }

  const resetInput = () => {
    searchTerm = ''
    tags = []
    open = false
  }
</script>

<div
  class="searchbar"
  class:open
  on:blur={() => {
    open = false
  }}
>
  <i class="codicon codicon-search spaced" />
  <input
    type="text"
    bind:value={searchTerm}
    aria-label="Search for tags."
    on:focus={() => {
      document.getElementById('title').scrollIntoView()
    }}
    on:blur={(event) => {
      // @ts-expect-error
      if (!event.relatedTarget || !event.target.parentNode.contains(event.relatedTarget)) {
        open = false
      }
    }}
    on:keyup={(event) => {
      if (isEnter(event)) {
        pick(tags.length > selectedIndex ? tags[selectedIndex] : new Tag(searchTerm, 0, 'ambiguous'))()
      } else if (event.code === 'ArrowUp' && tags.length > 0) {
        selectedIndex = (selectedIndex + tags.length - 1) % tags.length
      } else if (event.code === 'ArrowDown' && tags.length > 0) {
        selectedIndex = (selectedIndex + 1) % tags.length
      }
    }}
  />

  <ModifierSelect
    on:change={(e) => {
      modifier = e.detail
    }}
  />
  <HelpButton />
  <ol class:open>
    {#await searchPromise}
      <div class="suggestion-footer">
        <LoadingAnimation />
      </div>
    {:then}
      {#each tags as tag, index}
        <TagSuggestion {tag} on:click={pick(tag)} selected={index === selectedIndex} />
      {/each}
      <div class="suggestion-footer" />
    {:catch error}
      <div class="suggestion-footer">
        <i class={`codicon codicon-error`} />
        <span>{error.message}</span>
      </div>
    {/await}
  </ol>
</div>

<style>
  .searchbar {
    display: flex;
    align-items: center;
    height: var(--line-height-large);
    background-color: var(--background-1);
    padding-inline: 6px;
    border-radius: 22px;
    width: 100%;
    max-width: 512px;
    margin: auto;
    position: relative;
    isolation: isolate;
    z-index: var(--above-page);
  }

  .spaced {
    width: var(--line-height);
    height: var(--line-height);
    line-height: var(--line-height);
    vertical-align: middle;
    text-align: center;
    font-size: var(--text-size-large);
  }

  input {
    font-size: var(--text-size);
    background-color: transparent;
    border: none;
    color: var(--text);
    flex-grow: 1;
    outline: none;
    min-width: 0;
    height: 100%;
  }

  .searchbar.open {
    border-radius: 22px 22px 0 0;
    filter: drop-shadow(0px 3px 5px black);
  }

  ol.open {
    display: block;
  }

  ol {
    display: none;
    box-sizing: border-box;
    position: absolute;
    top: var(--line-height-large);
    left: 0;
    width: 100%;
    background-color: var(--background-1);
    border-radius: 0 0 22px 22px;
    overflow: hidden;
    min-height: 22px;
  }

  .suggestion-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 0.5rem;
  }
</style>
