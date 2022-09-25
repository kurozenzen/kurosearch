<script>
  export let icon
  export let message
  export let title
</script>

<div class="error">
  <div class="icon">
    <i class={`codicon codicon-${icon}`} />
  </div>
  <div>
    <h3>{title}</h3>
    <span>{message}</span>
  </div>
</div>

<style>
  .error {
    display: flex;
    align-items: center;
    max-width: 400px;
    margin: auto;
    margin-block: 4rem;
    gap: 2rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    background-color: var(--background-1);
  }

  .icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border: 2px solid var(--background-2);
    border-radius: var(--border-radius);
  }

  i {
    font-size: 32px;
    color: var(--accent);
  }

  h3 {
    padding-block-end: 0.5rem;
  }
</style>
