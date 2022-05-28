<script>
  import "@vscode/codicons/dist/codicon.css";
  import Header from "./lib/Header.svelte";
  import currentPage from "./lib/navigation/currentPage";
  import Search from "./lib/search/Search.svelte";

  /** @param {string} t */
  const inverseOfTheme = (t) => (t === "dark" ? "light" : "dark");

  let theme = "dark";
  $: document.body.classList.replace(inverseOfTheme(theme), theme);
</script>

<Header />

<main>
  {#if $currentPage === "search"}
    <Search />
  {:else if $currentPage === "account"}
    <p>account</p>
  {:else if $currentPage === "settings"}
    <p>settings</p>
  {:else}
    <p>You got lost...</p>
  {/if}
</main>

<footer>Copyright © 2022 kurozenzen</footer>

<style>
  :global(:root) {
    --border-radius: 5px;
    --line-height: 32px;
    --line-height-large: 44px;
    --accent: crimson;
    --text-accent: #fff;

    accent-color: var(--accent);
  }

  :global(.dark) {
    color-scheme: dark;

    --background-0: #000000;
    --background-1: #151520;
    --background-2: #303040;
    --text: #aaa;
  }

  :global(.light) {
    color-scheme: light;

    --background-0: #fff;
    --background-1: #ddd;
    --background-2: #bbb;
    --text: #000;
  }

  :global(html) {
    height: 100%;
  }

  :global(#app) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :global(body) {
    background-color: var(--background-0);
    color: var(--text);
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;
  }

  main {
    margin-block: 1rem;
    flex-grow: 1;
  }

  footer {
    text-align: center;
  }
</style>
