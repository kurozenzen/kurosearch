<script>
  import { formatCount } from '../../../../formatting/formatCount'

  export let value
</script>

<span data-testid="score" class="codicon codicon-heart">{formatCount(value)}</span>

<style>
  span {
    white-space: nowrap;
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
</style>
