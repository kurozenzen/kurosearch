<script>
  import { getNextModifier } from '../../tags/modifier/modifier'
  import { createEventDispatcher } from 'svelte'
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import { MODIFIERS_ICONS, MODIFIERS_HINTS } from './modifierData'

  /** @type {import("../../tags/modifier/modifier").Modifier} */
  let modifier = '+'

  const dispatch = createEventDispatcher()
  const changeModifier = () => {
    modifier = getNextModifier(modifier)
    dispatch('change', modifier)
  }
</script>

<i
  tabindex="0"
  class={`codicon codicon-${MODIFIERS_ICONS[modifier]}`}
  title={MODIFIERS_HINTS[modifier]}
  on:click={changeModifier}
  on:keyup={onEnterOrSpace(changeModifier)}
  on:touchend|preventDefault
/>

<style>
  i {
    width: var(--line-height);
    height: var(--line-height);
    line-height: var(--line-height);
    vertical-align: middle;
    text-align: center;
    font-size: 16px;
  }
</style>
