<script>
  import { MODIFIERS_ICONS } from './modifierData'
  import RotatingSelection from '../common/RotatingIconSelection.svelte'
  import RotatingIconSelection from '../common/RotatingIconSelection.svelte'

  /** @type {import("../../types/tag-modifier/modifier").Modifier} */
  export let modifier
</script>

<RotatingIconSelection bind:value={modifier} options={MODIFIERS_ICONS} />
