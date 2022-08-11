<script>
  import { formatCount } from "../../formatting/numbers";
  import { createEventDispatcher } from "svelte";
  import { formatTagname, selectType } from "../../formatting/tags";
  import ToggleIcon from "../common/ToggleIcon.svelte";
  import TagIcon from "../common/TagIcon.svelte";
  import ModifierSelect from "./ModifierSelect.svelte";
  import LoadingAnimation from "../common/LoadingAnimation.svelte";
  import currentPage from "../navigation/currentPage";
  import onEnterOrSpace from "../common/onEnterOrSpace";

  const dispatch = createEventDispatcher();

  /** @type {AbortController} */
  let abortController = undefined;
  /** @type {Promise<void>}*/
  let searchPromise;

  let searchTerm = "";
  let fuzzySearch = true;
  let modifier = "+";

  let focusInside = false;
  let error = undefined;
  let tags = [];
  $: open = focusInside && (error || tags.length > 0);

  $: {
    error = undefined;
    tags = [];
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
    focusInside = true;

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
        if (json.length == 0) {
          error = new Error("No tags found");
        } else {
          tags = json;
        }
      } else if (json.message) {
        error = new Error(json.message);
      } else {
        error = new Error("Cannot display tag suggestions");
      }
    } else {
      error = new Error("Failed to get tag suggestions");
    }

    if (error) throw error;
  }
</script>

<div
  class="searchbar"
  class:open
  on:blur={() => {
    focusInside = false;
  }}
>
  <i class="codicon codicon-search" />
  <input
    type="text"
    bind:value={searchTerm}
    aria-label="Search for tags."
    on:blur={(event) => {
      if (
        !event.relatedTarget ||
        !event.target.parentNode.contains(event.relatedTarget)
      ) {
        focusInside = false;
      }
    }}
    on:focus={() => {
      focusInside = true;
    }}
  />

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
  <i
    tabindex="0"
    class={`codicon codicon-question`}
    on:click={() => {
      $currentPage = "help";
    }}
    on:keydown={onEnterOrSpace(() => {
      $currentPage = "help";
    })}
  />
  <ol class:open>
    {#await searchPromise}
      <div class="hint-container">
        <LoadingAnimation />
      </div>
    {:then}
      {#each tags as tag}
        <li
          tabindex="0"
          on:click={() => {
            dispatch("pick", {modifier, tag});
            searchTerm = "";
            error = undefined;
            tags = [];
            focusInside = false;
          }}
        >
          <TagIcon type={selectType(tag.types)} />
          <span title={tag.name} class="tag-name"
            >{formatTagname(tag.name)}</span
          >
          <span class="tag-count">{formatCount(tag.count)}</span>
        </li>
      {/each}
    {:catch}
      <div class="error-container">
        <i class={`codicon codicon-error`} />
        <span>{error?.message}</span>
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
    padding-inline: 16px;
    gap: 16px;
    border-radius: 22px;
    width: 100%;
    max-width: 512px;
    margin: auto;
    position: relative;
  }

  input {
    font-size: 14px;
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
  }

  ol.open {
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
    cursor: pointer;
    user-select: none;
  }

  li:hover {
    background-color: var(--background-2);
  }

  li:last-of-type {
    margin-bottom: 10px;
  }

  .tag-name {
    grid-column: 2;
    white-space: nowrap;
    overflow: hidden;
  }

  .error-container {
    display: flex;
    justify-content: center;
    padding-bottom: 4px;
    gap: 4px;
    padding: 8px;
    font-size: 13.3333333px;
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
  .codicon-question {
    cursor: pointer;
  }
</style>
