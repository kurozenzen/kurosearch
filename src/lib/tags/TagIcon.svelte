<script>
  import { TAG_TYPE_ICON_NAMES } from './tagIconData'

  /** @type {import("../../tags/type/tagtype").TagType}*/
  export let type
</script>

<i class={`codicon codicon-${TAG_TYPE_ICON_NAMES[type]}`} />
