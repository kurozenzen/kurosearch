<script>
  import { createEventDispatcher, onMount } from 'svelte'

  const dispatch = createEventDispatcher()
  const close = () => dispatch('close')

  let dialog

  onMount(() => {
    dialog.focus()
  })
</script>

<div
  class="backdrop"
  on:click={close}
  on:keydown={(event) => {
    event.code === 'Escape' && close()
  }}
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div bind:this={dialog} tabindex="-1" class="dialog" on:click|stopPropagation={() => {}}>
    <slot />
  </div>
</div>

<style>
  .dialog {
    border-radius: var(--border-radius);
    background-color: var(--background-0);
    z-index: var(--z-dialog);
    padding: var(--grid-gap);
  }

  .dialog:focus {
    outline: unset;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    contain: strict;
    height: 100vh;
    width: 100vw;
    background-color: #1118;
    backdrop-filter: blur(5px);
    z-index: var(--z-dialog);
  }
</style>
