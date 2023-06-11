<script context="module">
  /** @typedef {"primary" | "secondary"} ButtonType*/
</script>

<script>
  /** @type {string} */
  export let text
  /** @type {string} */
  export let title
  export let disabled = false
  /** @type {ButtonType} */
  export let type = 'primary'
</script>

<button {title} class={type} on:click {disabled}>
  {text}
</button>

<style>
  button {
    height: var(--box-height);
    padding-inline: var(--box-height);
    border: none;
    border-radius: var(--border-radius-full);
    text-align: center;
    text-transform: uppercase;
    transition: background-color var(--default-transition-behaviour);
  }

  button:disabled {
    background-color: var(--background-2);
  }

  button.primary {
    color: var(--text-accent);
    background-color: var(--accent);
  }

  button.secondary {
    color: var(--text);
    background-color: var(--background-1);
  }

  @media (hover: hover) {
    button.primary:hover {
      background-color: var(--accent-light);
    }

    button.secondary:hover {
      background-color: var(--background-2);
    }

    button:disabled:hover {
      background-color: var(--background-2);
      cursor: not-allowed;
    }
  }
</style>
