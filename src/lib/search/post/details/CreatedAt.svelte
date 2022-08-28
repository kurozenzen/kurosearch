<script>
  import { formatCreatedAt } from '../../../../formatting/date'

  export let value
</script>

<i class="codicon codicon-calendar" />
<span>{formatCreatedAt(value)}</span>

<style>
  span {
    white-space: nowrap;
  }
</style>
