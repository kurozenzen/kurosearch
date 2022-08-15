<script>
  import currentPage from "./currentPage";
  import DiscordIcon from "./DiscordIcon.svelte";

  /** @param {string} route */
  const navigateTo = (route) => () => {
    $currentPage = route;
  };
</script>

<header role="navigation">
  <div>
    <a
      title="Source Code"
      href="https://github.com/kurozenzen/kurosearch"
      target="_newtab"
    >
      <i class="codicon codicon-github" />
    </a>
    <a title="Sponsor" href="https://ko-fi.com/kurozenzen" target="_newtab">
      <i class="codicon codicon-heart" />
    </a>
    <a
      title="Discord Server"
      href="https://discord.gg/yyJFG5PVBZ"
      target="_newtab"
    >
      <DiscordIcon />
    </a>
  </div>
  <nav>
    <button title="Search" on:click={navigateTo("search")}>
      <i class="codicon codicon-search" />
    </button>
    <button title="Settings" on:click={navigateTo("settings")}>
      <i class="codicon codicon-settings-gear" />
    </button>
    <button title="Account" on:click={navigateTo("account")}>
      <i class="codicon codicon-account" />
    </button>
  </nav>
</header>

<style>
  header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  div,
  nav {
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    box-sizing: border-box;
  }

  button,
  a {
    height: 32px;
    width: 32px;
    border-radius: 16px;
    border: none;
    background-color: transparent;
    font-size: 16px;
    color: var(--text);
    padding: 8px;
  }

  button:hover,
  a:hover {
    color: var(--text-hover);
  }
</style>
