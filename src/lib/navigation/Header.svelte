<script>
  import currentPage from './currentPage'
  import DiscordIcon from './DiscordIcon.svelte'
  import account from '../account/account'
  import defaultUser from "../account/default-user.png"
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
    height: var(--line-height);
    width: var(--line-height);
    border-radius: 16px;
    border: none;
    background-color: transparent;
    font-size: 16px;
    color: var(--text);
    padding: 8px;
  }

  .profile-picture {
    border-radius: 8px;
    height: 16px;
    width: 16px;
  }

  @media (pointer: fine) {
    button:hover,
    a:hover {
      color: var(--text-hover);
    }
  }
</style>
