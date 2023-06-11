<script>
  import NoResults from './NoResults.svelte'
  import countStore from '../countStore'
  import SomeResults from './SomeResults.svelte'
</script>

{#if $countStore !== null}
  {#if $countStore === 0}
    <NoResults />
  {:else}
    <SomeResults on:endreached />
  {/if}
{/if}
