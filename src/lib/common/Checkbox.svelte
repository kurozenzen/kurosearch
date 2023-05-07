<script>
  import { createEventDispatcher } from 'svelte'

  export let label
  export let checked
  export let id

  const dispatch = createEventDispatcher()
</script>

<label for={id}>
  <input type="checkbox" {id} {checked} on:change={() => dispatch('change')} />
  {label}
</label>

<style>
  label {
    display: flex;
    gap: var(--grid-gap);
    align-items: center;
  }
</style>
