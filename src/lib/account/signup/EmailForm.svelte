<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '../../common/Button.svelte'

  const dispatch = createEventDispatcher()

  /** @type {string}*/
  export let submitLabel;

  let email = ''
  let password = ''
  $: disabled = !email || !password

  const attemptSubmit = () => {
    if (disabled) {
      return
    }

    dispatch('submit', { email, password })
  }
</script>

<div>
  <input type="text" bind:value={email} placeholder="Email" autocomplete="email" />
  <input type="password" bind:value={password} placeholder="Password" autocomplete="current-password" />
  <Button text={submitLabel} title="Click to sign in" on:click={attemptSubmit} {disabled} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }

  input {
    width: 100%;
    height: var(--box-height);
    padding-inline: var(--grid-gap);
    border-radius: var(--border-radius);
    background-color: var(--background-2);
  }
</style>
