<script>
  import PageHeading from '../common/text/PageHeading.svelte'
  import theme from '../theme/theme'
  import Preference from './Preference.svelte'
  import Selection from './Selection.svelte'
</script>

<PageHeading>Preferences</PageHeading>

<Preference title="Theme" description="Change the look of the app.">
  <Selection bind:value={$theme} options={{ dark: 'Dark Mode', light: 'Light Mode' }} />
</Preference>
