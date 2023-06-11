<script>
  import ToggleIcon from '../../../lib/common/ToggleIcon.svelte'

  /** @type {string} */
  export let value

  let visible = false
</script>

<div>
  <input
    type={visible ? 'text' : 'password'}
    {value}
    placeholder="Password"
    autocomplete="current-password"
    on:input={(ev) => {
      //@ts-expect-error value not recognized
      value = ev.target.value
    }}
  />
  <ToggleIcon icon="eye" title="Toggle password visibility." bind:active={visible} />
</div>

<style>
  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--box-height);
    border-radius: var(--border-radius);
    background-color: var(--background-1);
  }

  input {
    height: 100%;
    padding-inline: var(--grid-gap);
    background-color: transparent;
    flex-grow: 1;
  }
</style>
