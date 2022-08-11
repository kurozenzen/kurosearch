<script>
  import { createEventDispatcher } from "svelte";
  import onEnterOrSpace from "../common/onEnterOrSpace";
  import { MODIFIERS_ICONS, MODIFIERS_HINTS, MODIFIER_ORDER } from "./modifier";

  let modifier = "+";

  const dispatch = createEventDispatcher();

  function changeModifier() {
    const nextIndex =
      (MODIFIER_ORDER.indexOf(modifier) + 1) % MODIFIER_ORDER.length;
    modifier = MODIFIER_ORDER[nextIndex];
    dispatch("change", modifier);
  }
</script>

<i
  tabindex="0"
  class={`codicon codicon-${MODIFIERS_ICONS[modifier]}`}
  title={MODIFIERS_HINTS[modifier]}
  on:click={changeModifier}
  on:keydown={onEnterOrSpace(changeModifier)}
/>

<style>
  i {
    cursor: pointer;
  }
  .active {
    color: var(--accent);
  }
</style>
