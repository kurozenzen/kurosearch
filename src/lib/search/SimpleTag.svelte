<script>
  import { createEventDispatcher } from "svelte";
  import { formatTagname } from "../../formatting/tags";

  /** @type {string}*/
  export let name;

  const dispatch = createEventDispatcher();
</script>

<li tabindex="0" title="Click to add tag" on:click={() => dispatch("click")}>
  {formatTagname(name)}
</li>

<style>
  li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--background-2);
    color: white;
    height: 24px;
    border-radius: 16px;
    font-size: 12px;
    padding-left: 4px;
    padding-right: 12px;
    user-select: none;
    transition: background-color 0.1s linear;
    padding-left: 12px;
  }

  @media (pointer: fine) {
    li:hover {
      background-color: var(--background-3);
    }
  }

  li:active {
    background-color: var(--background-1);
  }
</style>
