<script>
  import { onMount } from 'svelte'
  import LoadingAnimation from '../common/LoadingAnimation.svelte'

  /**
   * @type {() => Promise<any>}
   */
  export let loadComponent

  let component

  onMount(async () => {
    component = (await loadComponent()).default
  })
</script>

{#if component}
  <svelte:component this={component} />
{:else}
  <LoadingAnimation />
{/if}
