<script>
  import Codicon from "./common/Codicon.svelte";
  import currentPage from "./navigation/currentPage";

  /** @param {string} route */
  const navigateTo = (route) => () => {
    currentPage.set(route);
  };
</script>

<header role="navigation">
  <Codicon title="Search" icon="search" on:click={navigateTo("search")} />
  <Codicon
    title="Settings"
    icon="settings-gear"
    on:click={navigateTo("settings")}
  />
  <Codicon title="Account" icon="account" on:click={navigateTo("account")} />
</header>

<style>
  header {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
</style>
