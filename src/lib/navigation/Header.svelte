<script>
  import Codicon from "../common/Codicon.svelte";
  import currentPage from "./currentPage";

  /** @param {string} route */
  const navigateTo = (route) => () => {
    currentPage.set(route);
  };
</script>

<header role="navigation">
  <button title="Search" on:click={navigateTo("search")}>
    <Codicon icon="search" />
  </button>
  <button title="Settings" on:click={navigateTo("settings")}>
    <Codicon icon="settings-gear" />
  </button>
  <button title="Account" on:click={navigateTo("account")}>
    <Codicon icon="account" />
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
  }
</style>
