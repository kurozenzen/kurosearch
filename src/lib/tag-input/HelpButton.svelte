<script>
  import currentPage from '../navigation/currentPage'
  import onEnterOrSpace from '../common/onEnterOrSpace'

  const goToHelp = () => currentPage.navigateTo('help')
</script>

<i
  tabindex="0"
  role="button"
  class="codicon codicon-question spaced"
  on:click={goToHelp}
  on:keyup={onEnterOrSpace(goToHelp)}
/>

<style>
  i {
    width: var(--line-height);
    height: var(--line-height);
    line-height: var(--line-height);
    font-size: var(--text-size-large);
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
  }
</style>
