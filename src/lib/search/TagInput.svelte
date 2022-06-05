<script>
  import { formatCount } from "../../formatting/numbers";
  import { createEventDispatcher } from "svelte";
  import { formatTagname, selectType } from "../../formatting/tags";
  import ToggleIcon from "../common/ToggleIcon.svelte";
  import TagIcon from "../common/TagIcon.svelte";
  import ModifierSelect from "./ModifierSelect.svelte";
  import LoadingAnimation from "../common/LoadingAnimation.svelte";

  const dispatch = createEventDispatcher();

  /** @type {AbortController} */
  let abortController = undefined;
  /** @type {Promise<import("../../types/tag").Tag[]>}*/
  let searchPromise;

  let searchTerm = "";
  let fuzzySearch = true;
  let modifier = "+";

  $: {
    if (abortController !== undefined) {
      abortController.abort("Newer search term entered");
    }
    if (searchTerm !== "") {
      abortController = new AbortController();
      searchPromise = getTagSuggestions(fuzzySearch, searchTerm);
    }
  }

  /**
   * @param {boolean} fuzzy
   * @param {string} term
   */
  async function getTagSuggestions(fuzzy, term) {
    const name = fuzzy ? `*${term}*` : term;
    const res = await fetch(
      `https://r34-json.herokuapp.com/v2/tags?limit=20&sort=count&name=${name.replaceAll(
        " ",
        "_"
      )}`,
      {
        signal: abortController.signal,
      }
    );

    /** @type {import("../../types/tag").Tag[] | {message: string}}*/
    const json = await res.json();

    if (res.ok) {
      if (Array.isArray(json)) {
        return json;
      }

      if (json.message) {
        throw new Error(json.message);
      }

      throw new Error("Cannot display tag suggestions");
    } else {
      throw new Error("Failed to get tag suggestions");
    }
  }
</script>

<div class="searchbar">
  <i class="codicon codicon-search" />
  <input type="text" bind:value={searchTerm} aria-label="Search for tags." />

  <ModifierSelect
    on:change={(e) => {
      modifier = e.detail;
    }}
  />
  <ToggleIcon
    icon="whole-word"
    title="Toggle exact search term matching"
    active={!fuzzySearch}
    on:click={() => {
      fuzzySearch = !fuzzySearch;
    }}
  />
  <ol>
    {#await searchPromise}
      <div class="hint-container">
        <LoadingAnimation />
      </div>
    {:then data}
      {#if data && data.length}
        {#each data as tag}
          <li
            tabindex="0"
            on:click={() => {
              searchTerm = "";
              dispatch("pick", tag);
              document.activeElement?.blur();
            }}
          >
            <TagIcon type={selectType(tag.types)} />
            <span title={tag.name} class="tag-name"
              >{formatTagname(tag.name)}</span
            >
            <span class="tag-count">{formatCount(tag.count)}</span>
          </li>
        {/each}
      {/if}
    {:catch error}
      <div class="hint-container">
        <span>{error.message}</span>
      </div>
    {/await}
    <div class="hint-container">
      <span class="hint">Learn more about tags</span>
    </div>
  </ol>
</div>

<style>
  .searchbar {
    display: flex;
    align-items: center;
    height: var(--line-height-large);
    background-color: var(--background-1);
    padding-inline: 16px;
    gap: 16px;
    border-radius: 22px;
    max-width: 512px;
    margin: auto;
    position: relative;
  }

  input {
    background-color: transparent;
    border: none;
    color: var(--text);
    flex-grow: 1;
    outline: none;
    min-width: 0;
    height: 100%;
  }

  .searchbar:focus-within {
    border-radius: 22px 22px 0 0;
  }

  .searchbar:focus-within ol {
    display: block;
  }

  ol {
    display: none;
    box-sizing: border-box;
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    background-color: var(--background-1);
    border-radius: 0 0 22px 22px;
    overflow: hidden;
    z-index: 1;
    min-height: 22px;
  }

  li {
    display: grid;
    align-items: center;
    height: 24px;
    grid-template-columns: 16px 1fr auto;
    gap: 1rem;
    font-size: 14px;
    padding-inline: 16px;
  }

  li:hover {
    background-color: var(--background-2);
  }

  .tag-name {
    grid-column: 2;
    white-space: nowrap;
    overflow: hidden;
  }

  .hint-container {
    display: flex;
    justify-content: center;
    padding-bottom: 4px;
  }

  .hint {
    font-size: 10px;
    user-select: none;
  }

  .hint:hover {
    color: var(--accent);
  }
</style>
