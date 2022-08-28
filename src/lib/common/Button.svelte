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
    height: 36px;
    border-radius: 18px;
    padding-inline: 36px;
    border: none;
    background-color: var(--accent);
    color: var(--text-accent);
    text-align: center;
    text-transform: uppercase;
  }

  button:disabled {
    background-color: var(--background-2);
  }

  @media (pointer: fine) {
    button:hover {
      background-color: var(--accent-light);
    }

    button:disabled:hover {
      background-color: var(--background-2);
      cursor: not-allowed;
    }
  }
</style>
