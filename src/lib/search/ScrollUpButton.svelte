<script>
  import { onDestroy, onMount } from "svelte";

  let previousY = 0;
  let visible = false;

  const listener = () => {
    const currentY = window.scrollY;
    visible = currentY < previousY && currentY > 1000;
    previousY = currentY;
  };

  onMount(() => {
    document.addEventListener("scroll", listener, { passive: true });
  });

  onDestroy(() => {
    document.removeEventListener("scroll", listener);
  });
</script>

<button on:click={() => window.scrollTo(0, 0)} class:visible>
  <i class={`codicon codicon-arrow-up`} />
</button>

<style>
  button {
    background-color: var(--accent);
    height: 32px;
    width: 32px;
    border-radius: 16px;
    position: fixed;
    bottom: -4rem;
    transition: bottom cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.2s;
  }

  @media (max-width: 800px) {
    button {
      right: 2rem;
    }
  }

  @media (min-width: 800px) {
    button {
      right: calc(2rem + calc(100vw - 800px) / 2);
    }
  }

  button.visible {
    bottom: 2rem;
  }

  button:hover {
    background-color: var(--accent-light);
  }
</style>
