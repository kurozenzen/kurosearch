<script>
  import PageHeading from '../common/text/PageHeading.svelte'
  import theme from '../theme/theme'
  import { BACKENED_NAMES, getCurrentBackend, setCurrentBackend } from './currentBackend'
  import Preference from './Preference.svelte'
  import Selection from './Selection.svelte'

  let backend = getCurrentBackend()
  $: {
    setCurrentBackend(backend)
  }
</script>

<PageHeading>Preferences</PageHeading>

<Preference title="Theme" description="Change the look of the app.">
  <Selection bind:value={$theme} options={{ dark: 'Dark Mode', light: 'Light Mode' }} />
</Preference>

<Preference
  title="Backend"
  description="Determines where images are loaded from. If you cannot load any images from one backend, try another one."
>
  <Selection bind:value={backend} options={BACKENED_NAMES} />
</Preference>
