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
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    border-radius: 16px;
    overflow: hidden;
    text-transform: uppercase;
    font-weight: bold;
    padding-inline-end: 32px;
  }

  span {
    flex-grow: 1;
  }
</style>
