<script>
  import onEnterOrSpace from './onEnterOrSpace'

  /** @type {string} */
  export let title

  /** @type {string} */
  export let icon

  /** @type {boolean} */
  export let active

  const toggleActive = () => {
    active = !active
  }
</script>

<i
  {title}
  class={`codicon codicon-${icon}`}
  class:active
  tabindex="0"
  on:click={toggleActive}
  on:keyup={onEnterOrSpace(toggleActive)}
  on:touchend|preventDefault={toggleActive}
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
