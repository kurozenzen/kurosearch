<script>
  import { isValidUrl } from '../../../../api-client/fetchAbortPrevious'
  import ExternalSource from './ExternalSource.svelte'

  /** @type {string} */
  export let source
  $: url = isValidUrl(source) ? new URL(source) : null
</script>

{#if url}
  <ExternalSource {url} />
{:else}
  <i class="codicon codicon-link" />
  <span>{source}</span>
{/if}
