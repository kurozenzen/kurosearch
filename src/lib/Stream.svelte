<script>
  /** @type {string}*/
  export let mediaSrc;

  const mediaSource = new MediaSource();
  const url = URL.createObjectURL(mediaSource);

  mediaSource.addEventListener("sourceopen", () => {
    const sourcebuffer = mediaSource.addSourceBuffer(
      'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    );
    fetch(mediaSrc, {
      referrerPolicy: "no-referrer",
      mode: "no-cors",
    })
      .then((response) => response.arrayBuffer())
      .then((data) => sourcebuffer.appendBuffer(data))
  });

</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src={url} controls />

