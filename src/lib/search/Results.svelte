<script>
  import Page from './Page.svelte'
  import ScrollDetector from '../common/ScrollDetector.svelte'
  import NoMoreResults from './NoMoreResults.svelte'
  import NoResults from './NoResults.svelte'
  import results from './resultsStore'
  import { createEventDispatcher } from 'svelte'
  import { PAGE_SIZE } from '../../api-client/pages/pages'
  import countStore from './countStore'
  import ResultsHeader from './ResultsHeader.svelte'

  const dispatch = createEventDispatcher()

  $: pageCount = $countStore / PAGE_SIZE
  $: morePagesAvailable = $results.pages.length < pageCount
  $: noResultsFound = $countStore === 0
</script>

{#if $countStore}
  <ResultsHeader on:configchange={() => dispatch('configchange')} />
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
  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
