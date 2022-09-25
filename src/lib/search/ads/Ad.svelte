<script context="module">
  import { getAdZone } from './ad-data'

  // @ts-ignore
  window.adZone = getAdZone();

</script>

<svelte:head>
  <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
  <script type="text/javascript" data-cfasync="false" async>
    ;(adsbyjuicy = window.adsbyjuicy || []).push({ adzone: window.adZone.id })
  </script>
</svelte:head>

<div style={`height: ${window.adZone.height}px`}>
   <ins id={window.adZone.id.toString()} data-width={window.adZone.width} data-height={window.adZone.height} />
</div>

<style>
  div {
    background-color: var(--background-1);
    border-radius: var(--border-radius);
    display: grid;
    place-items: center;
  }
</style>
