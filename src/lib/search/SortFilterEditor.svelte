<script>
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import sortStore from './sortStore'
  import Button from '../common/Button.svelte'
  import Dialog from '../dialog/Dialog.svelte'
  import Selection from '../common/Selection.svelte'
  import RotatingIconSelection from '../common/RotatingIconSelection.svelte'
  import RotatingTextSelection from '../common/RotatingTextSelection.svelte'
  import { formatCount } from '../../formatting/formatCount'

  /**
   * @typedef {import('src/types/post-sort/sort').SortProperty} SortProperty
   * @typedef {import('src/types/post-sort/sort').SortDirection} SortDirection
   */

  const OPTIONS_SORT_PROPERTY = Object.freeze({ id: 'Upload', score: 'Score', updated: 'Change' })
  const OPTIONS_SORT_DIRECTION = Object.freeze({ desc: 'codicon codicon-arrow-down', asc: 'codicon codicon-arrow-up' })
  const OPTIONS_SCORE_COMPARATOR = Object.freeze({ '>=': '>=', '<=': '<=' })

  /** @type {Record<SortProperty, Record<SortDirection, string>>} */
  const LABELS_SORT = Object.freeze({
    id: {
      asc: 'Oldest',
      desc: 'Newest',
    },
    score: {
      asc: 'Worst',
      desc: 'Best',
    },
    updated: {
      asc: 'Inactive',
      desc: 'Active',
    },
  })

  let editSortFilter = false

  const openDialog = () => {
    editSortFilter = true
  }
  const closeDialog = () => {
    editSortFilter = false
  }
</script>

<button on:click={openDialog} on:keypress={onEnterOrSpace(openDialog)}>
  <i class="codicon codicon-filter" />
  <span
    >{$sortStore.scoreValue === 0 && $sortStore.scoreComparator === '>='
      ? 'All'
      : `Score${$sortStore.scoreComparator}${formatCount($sortStore.scoreValue)}`}</span
  >

  <i class="codicon codicon-arrow-swap" />
  <span>{LABELS_SORT[$sortStore.sortProperty][$sortStore.sortDirection]}</span>
</button>

{#if editSortFilter}
  <Dialog on:close={closeDialog}>
    <div class="container">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>
        <b>Sorting</b>
        <div class="row">
          <RotatingIconSelection bind:value={$sortStore.sortDirection} options={OPTIONS_SORT_DIRECTION} />
          <Selection bind:value={$sortStore.sortProperty} options={OPTIONS_SORT_PROPERTY} />
        </div>
      </label>

      <label>
        <b>Score Filtering</b>
        <div class="row">
          <RotatingTextSelection bind:value={$sortStore.scoreComparator} options={OPTIONS_SCORE_COMPARATOR} />
          <input
            type="number"
            min={0}
            max={100000}
            step={1}
            bind:value={$sortStore.scoreValue}
            on:keyup={onEnterOrSpace((event) => event.target.blur())}
          />
        </div>
      </label>
      <Button text="Done" title="Return to searching." on:click={closeDialog} />
    </div>
  </Dialog>
{/if}

<style>
  button {
    background-color: transparent;
    color: var(--text);
  }

  @media (hover: hover) {
    button:hover {
      color: var(--text-highlight);
    }
  }

  .codicon-arrow-swap {
    transform: rotate(90deg);
  }

  i {
    display: inline-block;
    margin-inline: var(--grid-gap) 4px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }

  .row {
    display: flex;
    gap: var(--small-gap);
  }

  input {
    height: var(--line-height);
    background-color: transparent;
    border-radius: var(--border-radius);
    padding-inline: var(--small-gap);
    border: 2px solid var(--background-1);
    width: 90px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: var(--small-gap);
  }
</style>
