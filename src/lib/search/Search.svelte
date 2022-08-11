<script>
  import Page from "./Page.svelte";
  import Button from "../common/Button.svelte";
  import TagInput from "./TagInput.svelte";
  import ActiveTag from "./ActiveTag.svelte";
  import ScrollDetector from "../common/ScrollDetector.svelte";
  import activeTags from "./activeTags";
  import { formatCount } from "../../formatting/numbers";
  import NoResults from "./NoResults.svelte";
  import NoMoreResults from "./NoMoreResults.svelte";
  import { serializeTag } from "./tagParsing";

  const PAGE_SIZE = 20;

  /** @type {AbortController} */
  let abortController = undefined;

  /** @type {Promise<import("../../types/post").Page>}*/
  let searchPromise;

  /** @type {import("../../types/post").PostDTO[][]}*/
  let pages = [];

  let sort = "id";
  let minScore = "0";
  /** @type {number | null}*/
  let count = null;
  $: pageCount = count / PAGE_SIZE;
  let nextPage = 0;

  function search() {
    pages = [];
    count = null;
    if (abortController !== undefined) {
      abortController.abort("New search triggered");
    }
    nextPage = 0;
    abortController = new AbortController();
    searchPromise = getPage(nextPage++);
  }

  /** @param {number} pid */
  async function getPage(pid) {
    const parts = [
      ...$activeTags.map(serializeTag),
      `sort:${sort}:desc`,
      `score:>=${minScore}`,
    ]
      .filter((p) => p !== undefined && p !== null && p !== "")
      .map(encodeURIComponent)
      .join("+");

    const res = await fetch(
      `https://r34-json.herokuapp.com/v2/posts?limit=${PAGE_SIZE}&pid=${pid}&tags=${parts}`,
      {
        signal: abortController.signal,
      }
    );

    /** @type {import("../../types/post").Page}*/
    const json = await res.json();

    if (res.ok) {
      count = json.count;
      pages = [...pages, json.posts];
      return json;
    } else {
      throw new Error("fuck");
    }
  }
</script>

<div class="search-config">
  <h1>kurosearch</h1>
  <TagInput on:pick={(e) => activeTags.add(e.detail)} />
  {#if $activeTags.length}
    <ul>
      {#each [...$activeTags] as tag, i}
        <ActiveTag
          modifiedTag={tag}
          on:click={() => activeTags.removeByIndex(i)}
        />
      {/each}
    </ul>
  {/if}
  <div class="sort-row">
    <Button
      title="Click to search with active tags"
      icon="search"
      text="Search"
      on:click={search}
    />
  </div>
  <div class="sort-row">
    <select bind:value={sort}>
      <option value="id">New posts</option>
      <option value="score">Popular posts</option>
    </select>
    <select bind:value={minScore}>
      <option value="0">No minimum score</option>
      <option value="10">Min 10 likes</option>
      <option value="100">Min 100 likes</option>
      <option value="1000">Min 1000 likes</option>
    </select>
  </div>
</div>

{#if count}
  <p class="count">{formatCount(count)} results</p>
  <ol>
    {#each pages as page}
      <Page posts={page} />
    {/each}
  </ol>
  {#if pages.length < pageCount}
    <ScrollDetector on:visible={() => getPage(nextPage++)} />
  {:else}
    <NoMoreResults />
  {/if}
{:else if count === 0}
  <NoResults />
{/if}

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-family: "Zen Kaku Gothic New", sans-serif;
    font-size: 72px;
    text-align: center;
    color: var(--accent);
    user-select: none;
    line-height: 72px;
    margin-top: 20vh;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 18vw;
      line-height: 18vw;
    }
  }

  .count {
    margin-block: 2rem;
    text-align: center;
  }

  select {
    height: 32px;
    padding-inline: 8px;
    box-sizing: border-box;
    background-color: var(--background-1);
    border: none;
    border-radius: 16px;
  }

  .sort-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .search-config {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
