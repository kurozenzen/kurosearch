<script>
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

<button {title} class={`codicon codicon-${icon}`} class:active on:click={toggleActive} />

<style>
  button {
    color: var(--text);
    background-color: unset;
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
    button:hover {
      color: var(--text-highlight);
    }
    button.active:hover {
      color: var(--accent-light);
    }
  }
</style>
