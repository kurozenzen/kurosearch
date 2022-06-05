<script>
  /** @type {string} */
  export let source;

  let url = new URL(source);
</script>

{#if url}
  <i class="codicon codicon-link" />
  <a href={url.toString()}>{url.hostname}</a>
{/if}

<style>
  a {
    font-size: 14px;
    text-decoration: none;
  }
</style>
