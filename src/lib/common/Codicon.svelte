<script>
  import { createEventDispatcher } from "svelte";
  
  export let title = undefined;
  export let icon;

  const dispatch = createEventDispatcher();
</script>

<i
  {title}
  class={`codicon codicon-${icon}`}
  on:click={() => dispatch("click")}
  tabindex="0"
/>