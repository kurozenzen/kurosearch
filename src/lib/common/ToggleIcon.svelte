<script>
  import { createEventDispatcher } from "svelte";
  
  export let title = undefined;
  export let icon;
  export let active;

  const dispatch = createEventDispatcher();
</script>

<i 
  {title}
  class={`codicon codicon-${icon} ${active ? "active" : ""}`}
  on:click={() => dispatch("click")}
  tabindex="0"
/>

<style>
  .active {
    color: var(--accent);
  }
</style>