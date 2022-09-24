<script>
  import { createEventDispatcher } from 'svelte'

  /** @type {string} */
  export let text
  /** @type {string} */
  export let title
  export let disabled = false

  const dispatch = createEventDispatcher()
</script>

<button {title} on:click={() => dispatch('click')} {disabled}>
  {text}
</button>

<style>
  button {
    height: var(--box-height);
    padding-inline: var(--box-height);
    border: none;
    border-radius: var(--border-radius-full);
    color: var(--text-accent);
    background-color: var(--accent);
    text-align: center;
    text-transform: uppercase;
    transition: background-color var(--default-transition-behaviour);
  }

  button:disabled {
    background-color: var(--background-2);
  }

  @media (hover: hover) {
    button:hover {
      background-color: var(--accent-light);
    }

    button:disabled:hover {
      background-color: var(--background-2);
      cursor: not-allowed;
    }
  }
</style>
