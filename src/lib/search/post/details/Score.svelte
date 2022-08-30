<script>
  import { formatCount } from '../../../../formatting/formatCount'

  export let value
</script>

<i class="codicon codicon-heart" />
<span>{formatCount(value)}</span>

<style>
  span {
    white-space: nowrap;
  }
</style>
