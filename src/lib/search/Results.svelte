<script>
  import Page from './Page.svelte'
  import ScrollDetector from '../common/ScrollDetector.svelte'
  import NoMoreResults from './NoMoreResults.svelte'
  import NoResults from './NoResults.svelte'
  import results from './resultsStore'
  import { formatCount } from '../../formatting/formatCount'
  import { createEventDispatcher } from 'svelte'
  import { PAGE_SIZE } from '../../api-client/pages/pages'
  import sortStore from './sortStore'

  const dispatch = createEventDispatcher()

  $: pageCount = $results.count / PAGE_SIZE
  $: morePagesAvailable = $results.pages.length < pageCount
  $: noResultsFound = $results.count === 0
</script>

{#if $results.count}
  <div class="header">
    <span>{formatCount($results.count)} results</span>

    <select bind:value={$sortStore.sortProperty} title="Sort results by">
      <option value="id">Date</option>
      <option value="score">Score</option>
    </select>

    <select bind:value={$sortStore.minScore}>
      <option value={0}>Any Score</option>
      <option value={10}>Score > 10</option>
      <option value={100}>Score > 100</option>
      <option value={1000}>Score > 1K</option>
    </select>
  </div>
  <ol>
    {#each $results.pages as page}
      <Page posts={page} />
    {/each}
  </ol>
  {#if morePagesAvailable}
    <ScrollDetector on:visible={() => dispatch('endreached')} />
  {:else}
    <NoMoreResults />
  {/if}
{:else if noResultsFound}
  <NoResults />
{/if}

<style>
  .header {
    display: flex;
    flex-wrap: w;
    align-items: center;
    margin-block-start: 4rem;
    margin-block-end: 8px;
    gap: var(--grid-gap);
    height: var(--line-height);
    overflow-x: scroll;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  span {
    flex-grow: 1;
    white-space: nowrap;
  }

  select {
    background-color: unset;
    border: unset;
    color: var(--text);
  }

  select option {
    background-color: var(--background-1);
    border-color: var(--background-2);
  }
</style>
