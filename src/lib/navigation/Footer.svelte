<footer>
  <div class="flex left">
    <a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab">
      <i class="codicon codicon-github" /> Github
    </a>
  </div>
  <span class="copyright">© 2022 kurozenzen</span>
  <div class="flex right">
    <a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab">
      <i class="codicon codicon-zap" /> Status
    </a>
  </div>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: var(--grid-gap);
    contain: content;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .right {
    justify-content: flex-end;
  }

  .copyright {
    color: var(--text-muted);
    font-size: var(--text-size-small);
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    font-size: var(--text-size-small);
    transition: color var(--default-transition-behaviour);
  }

  @media (hover: hover) {
    a:hover {
      color: var(--text-highlight);
    }
  }
</style>
