<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '../../common/Button.svelte'
  import PasswordInput from './PasswordInput.svelte'
  import TextInput from '../../common/text/TextInput.svelte'

  const dispatch = createEventDispatcher()

  /** @type {string}*/
  export let submitLabel

  /** @type {string}*/
  export let error

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

<form on:submit|preventDefault={attemptSubmit}>
  <TextInput bind:value={email} placeholder="Email" autocomplete="email" />
  <PasswordInput bind:value={password} />
  {#if typeof error === 'string' && error !== ''}
    <span>{error}</span>
  {/if}
  <Button text={submitLabel} title="Click to sign in" {disabled} />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }
</style>
