<script>
  import { isValidUrl } from "../../../api-client/fetchAbortPrevious";

  /** @type {string} */
  export let source;
  $: url = isValidUrl(source) ? new URL(source) : null;
</script>

<i class="codicon codicon-link" />
{#if url}
  <a href={url.toString()} target="_newtab">{url.hostname}</a>
{:else}
  <span>{source}</span>
{/if}

<style>
  a {
    font-size: 14px;
    text-decoration: none;
  }
</style>
