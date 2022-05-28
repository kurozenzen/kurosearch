<script>
  import Page from "./Page.svelte";
  import Button from "../common/Button.svelte";
  import TagInput from "./TagInput.svelte";
  import ActiveTag from "./ActiveTag.svelte";
  import ScrollDetector from "../common/ScrollDetector.svelte";

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          console.debug(entry.target.getAttribute("data-src"))
          entry.target.src = entry.target.getAttribute("data-src");
        } else {
          console.debug("removing src from ", entry.target)
          entry.target.src = "";
        }
      }
    },
    { rootMargin: "1250px" }
  );

  /** @type {import("../../types/tag").Tag[]}*/
  let activeTags = [];

  /** @param {{detail: import("../../types/tag").Tag}} e */
  const addTag = (e) => {
    activeTags = [...activeTags, e.detail];
  };

  /** @param {import("../../types/tag").Tag} tag */
  const removeTag = (tag) => () => {
    activeTags = activeTags.filter((t) => t.name !== tag.name);
  };

  /** @type {AbortController} */
  let abortController = undefined;

  /** @type {Promise<import("../../types/post").Page>}*/
  let searchPromise;

  /** @type {import("../../types/post").PostDTO[][]}*/
  let pages = [];

  let count = null;
  let nextPage = 0;

  function search() {
    if (abortController !== undefined) {
      abortController.abort("New search triggered");
    }

    nextPage = 0;

    abortController = new AbortController();
    searchPromise = getPage(nextPage++);
  }

  /** @param {number} pid */
  async function getPage(pid) {
    const res = await fetch(
      `https://r34-json.herokuapp.com/v2/posts?limit=20&pid=${pid}&tags=${activeTags
        .map((t) => "+" + t.name)
        .join()}`,
      {
        signal: abortController.signal,
      }
    );

    /** @type {import("../../types/post").Page}*/
    const json = await res.json();

    console.log(json);

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
<TagInput on:pick={addTag} />
<ul>
  {#each activeTags as tag}
    <ActiveTag {tag} on:click={removeTag(tag)} />
  {/each}
</ul>
<Button
  title="Click to search with active tags"
  icon="search"
  text="Search"
  on:click={search}
/>
{#if count}
  <p class="count">{count} results</p>
  <ol>
    {#each pages as page, index}
      <Page posts={page} observer={intersectionObserver}/>
    {/each}
  </ol>
  <ScrollDetector on:visible={() => getPage(nextPage++)} />
{:else if count === 0}
  <p>No results. Sorry.</p>
{/if}

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-block: 2rem;
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
    margin-top: 2em;
  }

  .count {
    margin-block: 2rem;
    text-align: center;
  }
</style>
