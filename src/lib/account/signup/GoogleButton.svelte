<script>
  import { createEventDispatcher } from 'svelte'

  import GoogleIcon from '../GoogleIcon.svelte'

  /** @type {string} */
  export let content

  const dispatch = createEventDispatcher()
</script>

<button on:click={() => dispatch('click')}>
  <GoogleIcon />
  <span>{content}</span>
</button>

<style>
  button {
    display: flex;
    align-items: center;
    padding-inline-end: var(--icon-size);
    border-radius: var(--border-radius-full);
    overflow: hidden;
    color: black;
    background-color: white;
    text-transform: uppercase;
    font-weight: bold;
  }

  span {
    flex-grow: 1;
  }
</style>
