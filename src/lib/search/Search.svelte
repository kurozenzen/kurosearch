<script>
  import { createActiveTag } from '../../types/tags/ActiveTag'
  import userdata from '../account/userdata'
  import Button from '../common/Button.svelte'
  import CreateSupertagDialog from '../supertags/CreateSupertagDialog.svelte'
  import TagInput from '../tag-input/TagInput.svelte'
  import activeTags from './activeTagsStore'
  import Results from './results/Results.svelte'
  import results from './resultsStore'
  import ScrollUpButton from './ScrollUpButton.svelte'
  import SearchError from './SearchError.svelte'
  import sortStore from './sortStore'
  import countStore from './countStore'
  import Title from './Title.svelte'
  import ActiveTagList from './ActiveTagList.svelte'
  import { createSearch } from './searchBuilder'
  import blockedContent from '../preferences/blockedContentStore'

  let supertagMode = false
  let error = undefined
  let loading = false
  let previousSortStore = JSON.stringify($sortStore) // for changes

  const createDefaultSearch = () =>
    createSearch()
      .withPid($results.nextPage)
      .withTags($activeTags)
      .withSupertags($userdata.supertags)
      .withSortProperty($sortStore.sortProperty)
      .withSortDirection($sortStore.sortDirection)
      .withScoreValue($sortStore.scoreValue)
      .withScoreComparator($sortStore.scoreComparator)
      .withBlockedContent($blockedContent)

  /** @param {() => Promise<void>} operation */
  const executeSearch = async (operation) => {
    if (loading) {
      return
    }

    error = undefined
    loading = true

    try {
      await operation()
    } catch (e) {
      error = e
      console.warn(e)
    } finally {
      loading = false
    }
  }

  const getFirstPage = async () => {
    results.reset()

    executeSearch(async () => {
      const [page, count] = await createDefaultSearch().getPageAndCount()
      results.addPage(page)
      countStore.set(count)
    })
  }

  const getNextPage = async () => {
    executeSearch(async () => {
      const page = await createDefaultSearch().getPage()
      results.addPage(page)
    })
  }

  $: {
    // update results when sort prefences change
    const currentSortStore = JSON.stringify($sortStore)
    if (previousSortStore !== currentSortStore) {
      previousSortStore = currentSortStore
      getFirstPage()
    }
  }
</script>

<div class="search-config">
  <Title />
  <TagInput on:pick={(e) => activeTags.addOrReplace(e.detail)} />
  <ActiveTagList
    on:supertag={() => {
      supertagMode = true
    }}
  />
  <div class="sort-row">
    <Button title="Click to search with active tags" text="Search" on:click={getFirstPage} />
  </div>
</div>

{#if error !== undefined}
  {#if error.message === 'Failed to fetch'}
    <SearchError
      title="Connection Error"
      icon="debug-disconnect"
      message="Failed to connect to the server. Make sure you have a stable internet connection."
    />
  {:else}
    <SearchError title="Application Error" icon="error" message={error.message} />
  {/if}
{:else}
  <Results on:endreached={getNextPage} />
{/if}

<ScrollUpButton />

{#if supertagMode}
  <CreateSupertagDialog
    tags={$activeTags}
    on:submit={(ev) => {
      userdata.addSupertag(ev.detail)
      activeTags.set([createActiveTag('+', ev.detail.name, ev.detail.tags.length, 'supertag')])
    }}
    on:close={() => {
      supertagMode = false
    }}
  />
{/if}

<style>
  .search-config {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-inline: 1rem;
  }

  .sort-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>
