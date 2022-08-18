<script>
  import { getNextModifier } from '../../tags/modifier/modifier'
  import { createEventDispatcher } from 'svelte'
  import onEnterOrSpace from '../common/onEnterOrSpace'
  import { MODIFIERS_ICONS, MODIFIERS_HINTS } from './modifierData'

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
/>
