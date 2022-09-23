<script>
  import currentPage from './currentPage'
  import DiscordIcon from './DiscordIcon.svelte'
  import account from '../account/account'
  import defaultUser from '../account/default-user.png'
</script>

<header role="navigation">
  <div>
    <a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab">
      <i class="codicon codicon-github" />
    </a>
    <a title="Sponsor" href="https://ko-fi.com/kurozenzen" target="_newtab">
      <i class="codicon codicon-heart" />
    </a>
    <a title="Discord Server" href="https://discord.gg/yyJFG5PVBZ" target="_newtab">
      <DiscordIcon />
    </a>
  </div>
  <nav>
    <button title="Search" on:click={() => currentPage.navigateTo('search')}>
      <i class="codicon codicon-search" />
    </button>
    <button title="Settings" on:click={() => currentPage.navigateTo('settings')}>
      <i class="codicon codicon-settings-gear" />
    </button>
    <button title="Documentation" on:click={() => currentPage.navigateTo('help')}>
      <i class="codicon codicon-book" />
    </button>
    <button title="Account" on:click={() => currentPage.navigateTo('account')}>
      {#if $account.loggedIn}
        <img class="profile-picture" src={$account.user.photoURL ?? defaultUser} alt="Account" />
      {:else}
        <i class="codicon codicon-account" />
      {/if}
    </button>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  div,
  nav {
    display: flex;
    gap: var(--grid-gap);
  }

  button,
  a {
    width: var(--line-height);
    height: var(--line-height);
    padding: 8px;
    border-radius: var(--border-radius-full);
    border: none;
    color: var(--text);
    background-color: transparent;
    font-size: 16px;
  }

  .profile-picture {
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }

  @media (pointer: fine) {
    button:hover,
    a:hover {
      color: var(--text-hover);
    }
  }
</style>
