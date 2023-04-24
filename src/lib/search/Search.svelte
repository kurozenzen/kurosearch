<script>
  import { ActiveTag as AT } from '../../types/tags/ActiveTag'
  import userdata from '../account/userdata'
  import Button from '../common/Button.svelte'
  import CreateSupertagDialog from '../supertags/CreateSupertagDialog.svelte'
  import TagInput from '../tag-input/TagInput.svelte'
  import activeTags from './activeTagsStore'
  import Results from './Results.svelte'
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

  const getFirstPage = async () => {
    error = undefined
    loading = true

    results.reset()

    try {
      const [page, count] = await createSearch()
        .withPid($results.nextPage)
        .withTags($activeTags)
        .withSupertags($userdata.supertags)
        .withSortProperty($sortStore.sortProperty)
        .withSortDirection($sortStore.sortDirection)
        .withMinScore($sortStore.minScore)
        .withBlockedContent($blockedContent)
        .getPageAndCount()

      results.addPage(page)
      countStore.set(count)
    } catch (e) {
      error = e
      console.warn(e)
    } finally {
      loading = false
    }
  }

  const getNextPage = async () => {
    if (loading) {
      return
    }

    error = undefined
    loading = true

    try {
      const page = await createSearch()
        .withPid($results.nextPage)
        .withTags($activeTags)
        .withSupertags($userdata.supertags)
        .withSortProperty($sortStore.sortProperty)
        .withSortDirection($sortStore.sortDirection)
        .withMinScore($sortStore.minScore)
        .withBlockedContent($blockedContent)
        .getPage()

      results.addPage(page)
    } catch (e) {
      error = e
      console.warn(e)
    } finally {
      loading = false
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
  <Results on:endreached={getNextPage} on:configchange={getFirstPage} />
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
