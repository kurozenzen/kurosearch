<script>
  import NoResults from './NoResults.svelte'
  import countStore from '../countStore'
  import SomeResults from './SomeResults.svelte'

  $: hasResults = $countStore !== null
  $: noResultsFound = $countStore === 0
</script>

{#if noResultsFound}
  <NoResults />
{:else if hasResults}
  <SomeResults on:endreached />
{/if}

<!-- else (not searched yet) don't render anything-->
