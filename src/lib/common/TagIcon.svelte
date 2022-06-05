<script>
  /** @type {import("../../types/tag").TagType}*/
  export let type;

  const typeToClass = {
    artist: "edit",
    character: "person",
    copyright: "folder",
    metadata: "info",
    rating: "unverified",
    source: "link",
    supertag: "star-full",
  };
</script>

<i class={`codicon codicon-${typeToClass[type]}`} />
