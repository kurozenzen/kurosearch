<script>
  import { createEventDispatcher } from 'svelte'
  import ToggleIcon from '../common/ToggleIcon.svelte'
  import ModifierSelect from '../modifier/ModifierSelect.svelte'
  import LoadingAnimation from '../common/LoadingAnimation.svelte'
  import currentPage from '../navigation/currentPage'
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import { getTagSuggestions } from '../../api-client/ApiClient'
  import userdata from '../account/userdata'
  import { Tag } from '../../tags/Tag'
  import TagSuggestion from './TagSuggestion.svelte'

  /**
   * @typedef {import("../../tags/Tag").Tag} Tag
   */

  const dispatch = createEventDispatcher()

  /** @type {Promise<void>}*/
  let searchPromise

  let searchTerm = ''
  let fuzzySearch = true
  let modifier = '+'
  let open = false

  /** @type {Tag[]}*/
  let tags = []

  $: {
    tags = []
    if (searchTerm !== '') {
      searchPromise = getSuggestions(fuzzySearch, searchTerm)
    }
  }

  /**
   * @param {boolean} fuzzy
   * @param {string} term
   */
  async function getSuggestions(fuzzy, term) {
    open = true
    tags = [
      ...$userdata.supertags
        .filter((s) => s.name.toLowerCase().includes(term.toLowerCase()))
        .map((s) => new Tag(s.name, Object.keys(s.tags).length, 'supertag')),
      ...(await getTagSuggestions(term, fuzzy)),
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
    on:blur={(event) => {
      if (
        !event.relatedTarget ||
        //@ts-expect-error
        !event.target.parentNode.contains(event.relatedTarget)
      ) {
        open = false
      }
    }}
  />

  <ModifierSelect
    on:change={(e) => {
      modifier = e.detail
    }}
  />
  <ToggleIcon
    icon="whole-word"
    title="Toggle exact search term matching"
    active={!fuzzySearch}
    on:click={() => {
      fuzzySearch = !fuzzySearch
    }}
  />
  <i
    tabindex="0"
    class="codicon codicon-question spaced"
    on:click={() => currentPage.navigateTo('help')}
    on:keyup={onEnterOrSpace(() => currentPage.navigateTo('help'))}
  />
  <ol class:open>
    {#await searchPromise}
      <div class="suggestion-footer">
        <LoadingAnimation />
      </div>
    {:then}
      {#each tags as tag}
        <TagSuggestion
          {tag}
          on:click={() => {
            dispatch('pick', tag.toActiveTag(modifier))
            resetInput()
          }}
        />
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
    z-index: 2;
    min-height: 22px;
  }

  .codicon-question {
    cursor: pointer;
  }

  .suggestion-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 0.5rem;
  }
</style>
