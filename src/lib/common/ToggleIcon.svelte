<script>
  import { createEventDispatcher } from "svelte";
  
  export let title = undefined;
  export let icon;
  export let active;

  const dispatch = createEventDispatcher();
</script>

<i 
  {title}
  class={`codicon codicon-${icon}`}
  class:active
  tabindex="0"
  on:click={() => dispatch("click")}
/>

<style>
  .active {
    color: var(--accent);
  }
</style>