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
  <span>{text}</span>
</button>

<style>
button {
    height: 36px;
    background-color: var(--accent);
    color: var(--text-accent);
    border: none;
    border-radius: 22px;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding-inline: 36px;
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

  i {
    width: var(--line-height);
    height: var(--line-height);
    line-height: var(--line-height);
    vertical-align: middle;
    text-align: center;
    font-size: 24px;
  }
</style>
