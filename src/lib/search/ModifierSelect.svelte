<script>
  import { createEventDispatcher } from "svelte";
  import { MODIFIERS_ICONS, MODIFIERS_HINTS, MODIFIER_ORDER } from "./modifier";

  let modifier = "+";

  const dispatch = createEventDispatcher();
</script>

<i
  class={`codicon codicon-${MODIFIERS_ICONS[modifier]}`}
  title={MODIFIERS_HINTS[modifier]}
  on:click={() => {
    const nextIndex =
      (MODIFIER_ORDER.indexOf(modifier) + 1) % MODIFIER_ORDER.length;
    modifier = MODIFIER_ORDER[nextIndex];
    dispatch("change", modifier);
  }}
/>

<style>
  .active {
    color: var(--accent);
  }
</style>
