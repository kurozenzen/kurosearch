<script>
  import currentPage from '../navigation/currentPage'
  import Search from '../search/Search.svelte'
  import LazyRoute from './LazyRoute.svelte'
</script>

<main>
  {#if $currentPage === 'search'}
    <Search />
  {:else if $currentPage === 'account'}
    <LazyRoute loadComponent={() => import('../account/Account.svelte')} />
  {:else if $currentPage === 'settings'}
    <LazyRoute loadComponent={() => import('../preferences/Preferences.svelte')} />
  {:else if $currentPage === 'help'}
    <LazyRoute loadComponent={() => import('../help/Help.svelte')} />
  {:else}
    <p>You got lost...</p>
  {/if}
</main>
