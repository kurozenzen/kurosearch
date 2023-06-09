<script>
  export let placeholder
  export let autocomplete
  export let value
</script>

<input type="text" bind:value {placeholder} {autocomplete} />

<style>
  input {
    width: 100%;
    height: var(--box-height);
    padding-inline: var(--grid-gap);
    border-radius: var(--border-radius);
    background-color: var(--background-1);
  }
</style>
