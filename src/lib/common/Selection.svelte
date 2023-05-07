<script>
  export let options
  export let value
</script>

<select bind:value>
  {#each Object.entries(options) as [value, label]}
    <option {value}>{label}</option>
  {/each}
</select>

<style>
  select {
    display: inline-flex;
    align-items: center;
    height: var(--line-height);
    padding-inline: 0.5rem;
    border: 2px solid var(--background-1);
    border-radius: var(--border-radius);
    color: var(--text);
    transition: all var(--default-transition-behaviour);
  }

  @media (hover: hover) {
    select:hover {
      color: var(--text-highlight);
      background-color: var(--background-1);
      border-color: var(--background-2);
    }
  }

  select option {
    background-color: var(--background-0);
    color: var(--text);
  }
</style>
