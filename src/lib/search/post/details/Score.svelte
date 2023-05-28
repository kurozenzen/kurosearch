<script>
  import { formatCount } from '../../../../formatting/formatCount'

  export let value
</script>

<span>{formatCount(value)} <i class="codicon codicon-heart" /></span>

<style>
  span {
    white-space: nowrap;
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
  i {
    padding-block-start: 1px;
  }
</style>
