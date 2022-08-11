<script>
  import { createEventDispatcher } from "svelte";

  /** @type {string} */
  export let icon;
  /** @type {string} */
  export let text;
  /** @type {string} */
  export let title;

  const dispatch = createEventDispatcher();
</script>

<button {title} on:click={() => dispatch("click")}>
  <i class={`codicon codicon-${icon}`} /> {text}
</button>

<style>
  button {
    height: var(--line-height);
    background-color: var(--accent);
    color: var(--text-accent);
    border: none;
    border-radius: 22px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-inline: 1rem;
  }
</style>
