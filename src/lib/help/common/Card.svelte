<script>
  export let id
  export let icon
  export let title
  export let description
</script>

<a class="card" href={`#${id}`}>
  <div class="icon">
    <i class={`codicon codicon-${icon}`} />
  </div>
  <div class="text">
    <h3>{title}</h3>
    <span>{description}</span>
  </div>
</a>

<style>
  .card {
    padding: 1.5rem;
    border: 2px solid var(--background-1);
    border-radius: var(--border-radius);
    display: flex;
    gap: 1.5rem;
    transition: all 0.1s linear;
    color: var(--text);
  }

  @media (pointer: fine) {
    .card:hover {
      background-color: var(--background-1);
      border-color: var(--background-2);
    }

    .card:hover .icon {
      border-color: var(--background-2);
    }
  }

  .icon {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border: 2px solid var(--background-1);
    border-radius: var(--border-radius);
    transition: border-color 0.1s linear;
  }

  i {
    font-size: 32px;
    color: var(--text-hover);
  }

  h3 {
    color: var(--text-hover);
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
</style>
