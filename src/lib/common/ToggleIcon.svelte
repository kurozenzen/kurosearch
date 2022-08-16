<script>
  import { createEventDispatcher } from "svelte";
  import onEnterOrSpace from "./onEnterOrSpace";

  export let title = undefined;
  export let icon;
  export let active;

  const dispatch = createEventDispatcher();
  const dispatchClick = () => dispatch("click");
</script>

<i
  {title}
  class={`codicon codicon-${icon}`}
  class:active
  tabindex="0"
  on:click={dispatchClick}
  on:keyup={onEnterOrSpace(dispatchClick)}
/>

<style>
  i {
    cursor: pointer;
  }
  .active {
    color: var(--accent);
  }
</style>
