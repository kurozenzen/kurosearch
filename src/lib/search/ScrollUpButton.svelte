<script>
  import { onDestroy, onMount } from 'svelte'

  let previousY = 0
  let visible = false

  const listener = () => {
    const currentY = window.scrollY
    visible = (currentY < previousY && currentY > 0) || window.innerHeight + currentY >= document.body.scrollHeight
    previousY = currentY
  }

  onMount(() => {
    document.addEventListener('scroll', listener, { passive: true })
  })

  onDestroy(() => {
    document.removeEventListener('scroll', listener)
  })
</script>

<button aria-label="back to top" title="Go back up" on:click={() => window.scrollTo(0, 0)} class:visible>
  <i class="codicon codicon-arrow-up" />
</button>

<style>
  button {
    color: var(--text-accent);
    background-color: var(--accent);
    height: 44px;
    width: 44px;
    border-radius: 22px;
    position: fixed;
    bottom: -4rem;
    right: 2rem;
    transition: background-color var(--default-transition-behaviour), bottom var(--default-transition-behaviour);
    box-shadow: var(--default-shadow);
    z-index: var(--above-above-content);
  }

  @media (min-width: 800px) {
    button {
      right: calc(2rem + calc(100vw - 800px) / 2);
    }
  }

  button.visible {
    bottom: 2rem;
  }

  @media (hover: hover) {
    button:hover {
      background-color: var(--accent-light);
    }
  }
</style>
