<script>
  import { createEventDispatcher } from "svelte";

  import { formatCount } from "../../formatting/numbers";
  import { formatTagname, selectType } from "../../formatting/tags";
  import TagIcon from "../common/TagIcon.svelte";

  /** @type {import("../../types/tag").Tag}*/
  export let tag;

  const dispatch = createEventDispatcher();

  const type = selectType(tag.types);
</script>

<li
  class:no-icon={type === null}
  tabindex="0"
  title="Click to remove tag"
  on:click={() => dispatch("click")}
>
  <TagIcon {type} />
  {formatTagname(tag.name)}
  ({formatCount(tag.count)})
</li>

<style>
  li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: crimson;
    color: white;
    height: 24px;
    border-radius: 16px;
    font-size: 12px;
    padding-left: 6px;
    padding-right: 12px;
    transition: background-color 0.1s linear;
    cursor: pointer;
    user-select: none;
  }

  .no-icon {
    padding-left: 12px;
  }

  @media (pointer: fine) {
    li:hover {
      background-color: var(--accent-light);
    }
  }

  li:active {
    background-color: var(--accent-light);
  }
</style>
