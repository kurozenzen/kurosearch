<script>
  import onEnterOrSpace from './onEnterOrSpace'

  /** @type {Record<string, string>} keys to icons*/
  export let options
  export let value

  let index = Object.keys(options).indexOf(value)

  $: entries = Object.entries(options)
  $: icon = entries[index][1]

  const rotate = () => {
    index = (index + 1) % entries.length
    value = entries[index][0]
  }
</script>

<button class={icon} on:click={rotate} on:keyup={onEnterOrSpace(rotate)} />

<style>
  button {
    background-color: var(--background-1);
    color: var(--text);
    border-radius: var(--line-height);
    width: var(--line-height);
    height: var(--line-height);
    line-height: var(--line-height);
    font-size: var(--text-size-large);
    transition: color var(--default-transition-behaviour);
  }

  @media (hover: hover) {
    button:hover {
      color: var(--text-highlight);
    }
  }
</style>
