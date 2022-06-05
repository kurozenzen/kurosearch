<script>
  import currentPage from "./currentPage";

  /** @param {string} route */
  const navigateTo = (route) => () => {
    currentPage.set(route);
  };
</script>

<header role="navigation">
  <button title="Search" on:click={navigateTo("search")}>
    <i class="codicon codicon-search"/>
  </button>
  <button title="Settings" on:click={navigateTo("settings")}>
    <i class="codicon codicon-settings-gear"/>
  </button>
  <button title="Account" on:click={navigateTo("account")}>
    <i class="codicon codicon-account"/>
  </button>
</header>

<style>
  header {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  button {
    height: 32px;
    width: 32px;
    border-radius: 16px;
    border: none;
    background-color: transparent;
    font-size: 16px;
    color: var(--text);
    cursor: pointer;
    padding: 8px;
  }

  button:hover {
    color: var(--text-hover);
  }
</style>
