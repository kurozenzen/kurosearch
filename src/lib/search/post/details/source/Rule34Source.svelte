<script>
  /** @type {string} */
  export let url
</script>

<a href={url} target="_newtab"><i class="codicon codicon-link-external" /> File</a>

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
