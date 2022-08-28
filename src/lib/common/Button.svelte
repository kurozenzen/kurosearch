<script>
  import { createEventDispatcher } from 'svelte'

  /** @type {string} */
  export let icon

  /** @type {string} */
  export let text

  /** @type {string} */
  export let title

  export let disabled = false

  const dispatch = createEventDispatcher()
</script>

<button {title} on:click={() => dispatch('click')} {disabled}>
  <i class={`codicon codicon-${icon}`} />
  {text}
</button>

<style>
  button {
    height: var(--line-height);
    background-color: var(--accent);
    color: var(--text-accent);
    border: none;
    border-radius: 22px;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding-inline: 1rem;
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
