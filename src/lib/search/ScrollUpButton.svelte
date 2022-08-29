<script>
  import { onDestroy, onMount } from 'svelte'

  let previousY = 0
  let visible = false

  const listener = () => {
    const currentY = window.scrollY
    visible = currentY < previousY && currentY > 0
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
    transition: bottom cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.2s;
  }

  @media (min-width: 800px) {
    button {
      right: calc(2rem + calc(100vw - 800px) / 2);
    }
  }

  button.visible {
    bottom: 2rem;
  }

  @media (pointer: fine) {
    button:hover {
      background-color: var(--accent-light);
    }
  }
</style>
