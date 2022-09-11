<script>
  import currentPage from '../navigation/currentPage'
  import Search from '../search/Search.svelte'
  import Preferences from '../preferences/Preferences.svelte'
  import Help from '../help/Help.svelte'
  import Account from '../account/Account.svelte'
</script>

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
