<script>
  import { ALL_BLOCKING_GROUPS } from '../..//types/blocking-groups/BlockingGroup'
  import PageHeading from '../common/text/PageHeading.svelte'
  import theme from '../theme/theme'
  import blockedContent from './blockedContentStore'
  import Checkbox from '../common/Checkbox.svelte'
  import { isPersistedLocally } from './persistLocally'
  import Preference from './Preference.svelte'
  import Selection from '../common/Selection.svelte'

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

  <Preference
    title="Blocked Content"
    description="Completely prevent certain types of posts without cluttering your search."
  >
    {#each ALL_BLOCKING_GROUPS as groupName}
      <Checkbox
        id={`checkbox-${groupName}`}
        checked={$blockedContent.includes(groupName)}
        label={groupName}
        on:change={() => blockedContent.toggle(groupName)}
      />
    {/each}
  </Preference>
</section>

<style>
  section {
    padding-inline: var(--grid-gap);
  }
</style>
