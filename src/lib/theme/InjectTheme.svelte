<style>
  :global(:root) {
    /* Dimensions */
    --border-radius: 5px;
    --line-height: 32px;
    --line-height-large: 44px;
    --grid-gap: 1rem;

    /* Accent Color */
    --accent: crimson;
    --accent-light: rgb(226, 81, 110);
    --text-accent: #fff;
    accent-color: var(--accent);
  }

  :global(html.dark) {
    --background-0: #000000;
    --background-1: #151520;
    --background-2: #303040;
    --background-3: #454560;
    --text: #aaa;
    --text-hover: #fff;
    color-scheme: dark;
  }

  :global(html.light) {
    --background-0: #fff;
    --background-1: #ddd;
    --background-2: #bbb;
    --background-3: #999;
    --text: #444;
    --text-hover: #000;
    color-scheme: light;
  }

  :global(html) {
    color: var(--text);
    background-color: var(--background-0);
  }
</style>
