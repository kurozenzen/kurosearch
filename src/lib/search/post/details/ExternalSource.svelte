<script>
  /** @type {URL} */
  export let url
  
  $: label = url.hostname.replace(/^www./, '')
</script>

<i class="codicon codicon-link" />
<a href={url.toString()} target="_newtab">{label}</a>

<style>
  a {
    color: var(--text-link);
    font-size: var(--text-size);
    text-decoration: none;
    white-space: nowrap;
  }
</style>
