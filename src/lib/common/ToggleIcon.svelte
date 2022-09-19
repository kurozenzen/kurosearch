<script>
  import { createEventDispatcher } from 'svelte'
  import onEnterOrSpace from './onEnterOrSpace'

  export let title = undefined
  export let icon
  export let active

  const dispatch = createEventDispatcher()
  const dispatchClick = () => dispatch('click')
</script>

<i
  {title}
  class={`codicon codicon-${icon}`}
  class:active
  tabindex="0"
  on:click={dispatchClick}
  on:keyup={onEnterOrSpace(dispatchClick)}
  on:touchend|preventDefault
/>

<style>
  i {
    width: var(--line-height);
    height: var(--line-height);
    line-height: var(--line-height);
    vertical-align: middle;
    text-align: center;
    font-size: 16px;
  }
  .active {
    color: var(--accent);
  }
</style>
