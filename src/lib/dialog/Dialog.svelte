<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  const close = () => dispatch('close')
</script>

<div
  class="backdrop"
  on:click={close}
  on:keyup={(event) => {
    event.code === 'Escape' && close()
  }}
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="dialog" on:click|stopPropagation={() => {}}>
    <slot />
  </div>
</div>

<style>
  .dialog {
    border-radius: var(--border-radius);
    background-color: var(--background-1);
    z-index: var(--above-everything);
    padding: var(--grid-gap);
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
    background-color: #000a;
    backdrop-filter: blur(10px);
    z-index: var(--above-everything);
  }
</style>
