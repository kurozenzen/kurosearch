<script>
  import playSvg from '../../assets/play.svg'
  import loadSvg from '../../assets/load.svg'
  import pauseSvg from '../../assets/pause.svg'

  export let playing
  export let loading

  const togglePlaying = () => {
    loading = true
    playing = !playing
  }
</script>

<button on:click|stopPropagation={togglePlaying} class:play={playing && !loading} class={$$props.class}>
  <div class="circle">
    {#if loading}
      <img src={loadSvg} alt="Loading GIF" width="16" height="32" />
    {:else if playing}
      <img src={pauseSvg} alt="Stop GIF" width="16" height="32" />
    {:else}
      <img src={playSvg} alt="Start GIF" width="16" height="32" style="margin-left: 4px;" />
    {/if}
  </div>
</button>

<style>
  @keyframes fade {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .play {
    animation: fade 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
  }

  button {
    background-color: unset;
    padding: 40px;
    border-radius: 34px;
  }

  .circle {
    color: black;
    background-color: white;
    border-radius: 24px;
    width: 48px;
    height: 48px;
    padding: 6px;
    padding-top: 8px;
  }
</style>
