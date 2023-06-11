<script>
  import { formatCount } from '../../../formatting/formatCount'
  import countStore from '../countStore'
  import SortFilterEditor from '../SortFilterEditor.svelte'
</script>

<div class="container">
  <span title={`${$countStore} results`}>{formatCount($countStore)} results</span>
  <SortFilterEditor />
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    margin-block-start: 4rem;
    margin-block-end: 8px;
    padding-inline: var(--grid-gap);
    gap: var(--grid-gap);
    flex-wrap: wrap;
  }

  @media (min-width: 800px) {
    .container {
      padding-inline: unset;
    }
  }

  span {
    flex-grow: 1;
    white-space: nowrap;
  }
</style>
