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
  import countStore from './countStore'
  import onEnterOrSpace from '../common/onEnterOrSpace'

  const dispatch = createEventDispatcher()

  /** @type {"custom" | Number}*/
  let selectedMinScore = 0
  let customMinScore = 0

  $: {
    $sortStore.minScore = selectedMinScore !== 'custom' ? selectedMinScore : customMinScore
  }

  $: pageCount = $countStore / PAGE_SIZE
  $: morePagesAvailable = $results.pages.length < pageCount
  $: noResultsFound = $countStore === 0
</script>

{#if $countStore}
  <div class="header">
    <span title={`${$countStore} results`}>{formatCount($countStore)} results</span>

    <select bind:value={$sortStore.sortProperty} title="Sort results by" on:change={() => dispatch('configchange')}>
      <option value="id">Date</option>
      <option value="score">Score</option>
      <option value="updated">Updated</option>
    </select>

    <select
      bind:value={selectedMinScore}
      title="Filter by score"
      on:change={() => {
        if (selectedMinScore !== 'custom') {
          dispatch('configchange')
        }
      }}
    >
      <option value={0}>Any Score</option>
      <option value={10}>Score > 10</option>
      <option value={100}>Score > 100</option>
      <option value={1000}>Score > 1K</option>
      <option value={'custom'}>Custom</option>
    </select>

    {#if selectedMinScore === 'custom'}
      <input
        type="number"
        min="0"
        max="100000"
        step="1"
        bind:value={customMinScore}
        on:keyup={onEnterOrSpace((event) => event.target.blur())}
        on:blur={() => dispatch('configchange')}
      />
    {/if}
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
    align-items: center;
    margin-block-start: 4rem;
    margin-block-end: 8px;
    gap: var(--grid-gap);
    height: var(--line-height);
    overflow-x: scroll;
    padding-inline: 1rem;
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
    transition: color var(--default-transition-behaviour);
  }

  @media (hover: hover) {
    select:hover {
      color: var(--text-highlight);
    }
  }

  select option {
    background-color: var(--background-1);
    border-color: var(--background-2);
  }

  input {
    width: 4rem;
  }
</style>
