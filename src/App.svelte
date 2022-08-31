<script>
  import Header from './lib/navigation/Header.svelte'
  import currentPage from './lib/navigation/currentPage'
  import Search from './lib/search/Search.svelte'
  import Preferences from './lib/preferences/Preferences.svelte'
  import Help from './lib/help/Help.svelte'
  import Account from './lib/account/Account.svelte'
  import InjectTheme from './lib/theme/InjectTheme.svelte'
</script>

<InjectTheme />

<Header />

<main>
  {#if $currentPage === 'search'}
    <Search />
  {:else if $currentPage === 'account'}
    <Account />
  {:else if $currentPage === 'settings'}
    <Preferences />
  {:else if $currentPage === 'help'}
    <Help />
  {:else}
    <p>You got lost...</p>
  {/if}
</main>
