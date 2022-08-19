<script>
  import Page from './Page.svelte'
  import Button from '../common/Button.svelte'
  import TagInput from '../tag-input/TagInput.svelte'
  import ActiveTag from '../tags/ActiveTag.svelte'
  import ScrollDetector from '../common/ScrollDetector.svelte'
  import activeTags from './activeTags'
  import { formatCount } from '../../formatting/numbers'
  import NoResults from './NoResults.svelte'
  import NoMoreResults from './NoMoreResults.svelte'
  import { getPage } from '../../api-client/ApiClient'
  import ScrollUpButton from './ScrollUpButton.svelte'
  import userdata from '../account/userdata'
  import results from './results'
  import { PAGE_SIZE } from '../../api-client/pages/pages'
  import CreateSupertagDialog from '../supertags/CreateSupertagDialog.svelte'
  import { ActiveTag as AT } from '../../tags/ActiveTag'
  import { getNextModifier } from '../../tags/modifier/modifier'

  let sort = 'id'
  let minScore = 0
  let supertagMode = false

  const getFirstPage = async () => {
    results.reset()
    return getNextPage()
  }

  const getNextPage = async () => {
    try {
      const tags = getSearchableTags()
      const page = await getPage($results.nextPage, tags, sort, minScore)
      results.addPage(page)
    } catch (e) {
      //TODO: add error handling and user feedback here
      console.warn(e)
    }
  }

  const getSearchableTags = () => {
    return $activeTags.flatMap((t) =>
      t.type === 'supertag' ? $userdata.supertags.find((s) => s.name === t.name).tags : t.toSearchableTag()
    )
  }
</script>

<div class="search-config">
  <h1>kurosearch</h1>
  <TagInput on:pick={(e) => activeTags.addOrReplace(e.detail)} />
  {#if $activeTags.length}
    <ul>
      {#each $activeTags as tag, i}
        <ActiveTag
          {tag}
          on:click={() => activeTags.removeByIndex(i)}
          on:contextmenu={() =>
            activeTags.addOrReplace(new AT(getNextModifier(tag.modifier), tag.name, tag.count, tag.type))}
        />
      {/each}
      {#if $activeTags.length > 1}
        <button
          class="add-supertag"
          title="Click to create a new supertag"
          on:click={() => {
            supertagMode = true
          }}
        >
          <i class="codicon codicon-star-full" />
        </button>
      {/if}
    </ul>
  {/if}
  <div class="sort-row">
    <Button title="Click to search with active tags" icon="search" text="Search" on:click={() => getFirstPage()} />
  </div>
  <div class="sort-row">
    <select bind:value={sort}>
      <option value="id">New posts</option>
      <option value="score">Popular posts</option>
    </select>
    <select bind:value={minScore}>
      <option value={0}>No minimum score</option>
      <option value={10}>Min 10 likes</option>
      <option value={100}>Min 100 likes</option>
      <option value={1000}>Min 1000 likes</option>
    </select>
  </div>
</div>

{#if $results.count}
  <p class="count">{formatCount($results.count)} results</p>
  <ol>
    {#each $results.pages as page}
      <Page posts={page} />
    {/each}
  </ol>
  {#if $results.pages.length < $results.count / PAGE_SIZE}
    <ScrollDetector on:visible={getNextPage} />
  {:else}
    <NoMoreResults />
  {/if}
{:else if $results.count === 0}
  <NoResults />
{/if}

<ScrollUpButton />

{#if supertagMode}
  <CreateSupertagDialog
    tags={$activeTags}
    on:submit={(ev) => {
      userdata.addSupertag(ev.detail)
      activeTags.set([new AT('+', ev.detail.name, ev.detail.tags.length, 'supertag')])
    }}
    on:close={() => {
      supertagMode = false
    }}
  />
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
    font-family: 'Zen Kaku Gothic New', sans-serif;
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
    height: var(--line-height);
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

  .add-supertag {
    width: 24px;
    height: 24px;
    padding: 4px;
    border-radius: 12px;
    background-color: var(--accent);
    color: var(--text-accent);
  }

  .add-supertag i {
    font-size: 14px;
    width: 16px;
    text-align: center;
  }
</style>
