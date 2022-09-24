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
  on:touchend|preventDefault={dispatchClick}
/>

<style>
  i {
    width: var(--line-height);
    height: var(--line-height);
    line-height: var(--line-height);
    vertical-align: middle;
    text-align: center;
    font-size: var(--text-size-large);
    transition: color var(--default-transition-behaviour);
  }

  .active {
    color: var(--accent);
  }

  @media (hover: hover) {
    i:hover {
      color: var(--text-highlight);
    }
    i.active:hover {
      color: var(--accent-light);
    }
  }
</style>
