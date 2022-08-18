<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        console.debug('Triggered infinite loading')
        dispatch('visible')
      }
    },
    { rootMargin: '1250px' }
  )

  /** @type {HTMLDivElement | undefined}*/
  let ref

  $: {
    intersectionObserver.disconnect()
    if (ref) {
      intersectionObserver.observe(ref)
    }
  }
</script>

<div bind:this={ref} />
