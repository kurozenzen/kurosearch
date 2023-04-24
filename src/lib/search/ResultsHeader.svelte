<script>
  import { formatCount } from '../../formatting/formatCount'
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import sortStore from './sortStore'
  import countStore from './countStore'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
</script>

<div class="container">
  <span title={`${$countStore} results`}>{formatCount($countStore)} results</span>

  <div class="config">
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

      <span>Score ≥ &ThinSpace;</span>
      <input
        type="number"
        min={0}
        max={100000}
        step={1}
        bind:value={$sortStore.minScore}
        on:keyup={onEnterOrSpace((event) => event.target.blur())}
        on:blur={() => dispatch('configchange')}
      />
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    margin-block-start: 4rem;
    margin-block-end: 8px;
    padding-inline: 1rem;
    gap: var(--grid-gap);
    flex-wrap: wrap;
  }

  .config {
    display: flex;
    gap: var(--grid-gap);
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
    width: 3rem;
    background-color: transparent;
  }
</style>
