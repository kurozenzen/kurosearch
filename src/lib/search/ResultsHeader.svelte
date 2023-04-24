<script>
  import { formatCount } from '../../formatting/formatCount'
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import sortStore from './sortStore'
  import countStore from './countStore'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  /** @type {"custom" | Number}*/
  let selectedMinScore = 0
  let customMinScore = 0

  $: {
    $sortStore.minScore = selectedMinScore !== 'custom' ? selectedMinScore : customMinScore
  }
</script>

<div class="container">
  <span title={`${$countStore} results`}>{formatCount($countStore)} results</span>

  <div class="group">
    <i class="codicon codicon-list-ordered" />
    <select
      class="select-sort-property"
      bind:value={$sortStore.sortProperty}
      title="Sort results by"
      on:change={() => dispatch('configchange')}
    >
      <option value="id">Upload</option>
      <option value="score">Score</option>
      <option value="updated">Change</option>
    </select>
  </div>

  <div class="group">
    <i class="codicon codicon-arrow-swap" />
    <select
      class="select-sort-direction"
      bind:value={$sortStore.sortDirection}
      title="Order ascening or descenfing"
      on:change={() => dispatch('configchange')}
    >
      <option value="desc">Desc</option>
      <option value="asc">Asc</option>
    </select>
  </div>

  <div class="group">
    <i class="codicon codicon-filter" />

    <select
      bind:value={selectedMinScore}
      title="Filter by score"
      on:change={() => {
        if (selectedMinScore !== 'custom') {
          dispatch('configchange')
        }
      }}
    >
      <option value={0}>Unfiltered</option>
      <option value={10}>Score > 10</option>
      <option value={100}>Score > 100</option>
      <option value={1000}>Score > 1K</option>
      <option value={'custom'}>Custom</option>
    </select>
  </div>

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

<style>
  .container {
    display: flex;
    align-items: center;
    margin-block-start: 4rem;
    margin-block-end: 8px;
    gap: var(--grid-gap);
    height: var(--line-height);
    overflow-x: scroll;
    padding-inline: 1rem;
  }

  select {
    appearance: none;
  }

  i {
    margin-inline-end: 4px;
  }

  .group {
    display: inline-flex;
    align-items: center;
  }

  .codicon-arrow-swap {
    transform: rotate(90deg);
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
