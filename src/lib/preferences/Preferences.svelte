<script>
  import PageHeading from '../common/text/PageHeading.svelte'
  import theme from '../theme/theme'
  import { isPersistedLocally } from './persistLocally'
  import Preference from './Preference.svelte'
  import Selection from './Selection.svelte'

  let isPersistedLocallyString = $isPersistedLocally ? 'true' : 'false'

  $: {
    $isPersistedLocally = isPersistedLocallyString === 'true'
  }
</script>

<section>
  <PageHeading>Preferences</PageHeading>

  <Preference title="Theme" description="Change the look of the app.">
    <Selection bind:value={$theme} options={{ dark: 'Dark Mode', light: 'Light Mode' }} />
  </Preference>

  <Preference title="Save Tags & Posts" description="Tags and posts will be saved when you close the app.">
    <Selection bind:value={isPersistedLocallyString} options={{ true: 'Save', false: "Don't Save" }} />
  </Preference>
</section>

<style>
  section {
    padding-inline: var(--grid-gap);
  }
</style>
