<script>
  /** @type {URL} */
  export let url

  $: label = url.hostname.replace(/^www./, '')
</script>

<a href={url.toString()} target="_newtab"><i class="codicon codicon-link" /> {label}</a>

<style>
  a {
    color: var(--text-link);
    font-size: var(--text-size);
    text-decoration: none;
    white-space: nowrap;
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
</style>
