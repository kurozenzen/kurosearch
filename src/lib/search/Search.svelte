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

  const PAGE_SIZE = 20;

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.src = entry.isIntersecting
          ? entry.target.getAttribute("data-src")
          : "";
      }
    },
    { rootMargin: "1250px" }
  );

  /** @type {AbortController} */
  let abortController = undefined;

  /** @type {Promise<import("../../types/post").Page>}*/
  let searchPromise;

  /** @type {import("../../types/post").PostDTO[][]}*/
  let pages = [];

  let sort = "id";
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
    const parts = [...$activeTags.map((t) => t.name), `sort:${sort}:desc`]
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

<h1>kurosearch</h1>
<TagInput on:pick={(e) => activeTags.add(e.detail)} />
<ul>
  {#each [...$activeTags] as tag, i}
    <ActiveTag {tag} on:click={() => activeTags.removeByIndex(i)} />
  {/each}
</ul>
<div class="sort-row">
  <select bind:value={sort}>
    <option value="id">New</option>
    <option value="score">Popular</option>
  </select>
  <Button
    title="Click to search with active tags"
    icon="search"
    text="Search"
    on:click={search}
  />
</div>
{#if count}
  <p class="count">{formatCount(count)} results</p>
  <ol>
    {#each pages as page}
      <Page posts={page} observer={intersectionObserver} />
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
    margin-block: 2rem;
    justify-content: center;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-family: "Zen Kaku Gothic New";
    font-size: 72px;
    text-align: center;
    color: var(--accent);
    user-select: none;
    margin-block: 2em;
    line-height: 90px;
    margin-bottom: 1rem;
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
</style>
