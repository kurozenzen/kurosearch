<script>
  import Codicon from "./Codicon.svelte";

  /** @type {import("../../types/tag").TagType}*/
  export let type;
</script>

{#if type === "artist"}
  <Codicon icon="edit" />
{:else if type === "character"}
  <Codicon icon="person" />
{:else if type === "copyright"}
  <Codicon icon="folder" />
{:else if type === "metadata"}
  <Codicon icon="info" />
{:else if type === "rating"}
  <Codicon icon="unverified" />
{:else if type === "source"}
  <Codicon icon="link" />
{:else if type === "supertag"}
  <Codicon icon="star-full" />
{/if}
