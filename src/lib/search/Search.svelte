<script>
  import { getPage } from '../../api-client/ApiClient'
  import { ActiveTag as AT } from '../../tags/ActiveTag'
  import { getNextModifier } from '../../tags/modifier/modifier'
  import userdata from '../account/userdata'
  import Button from '../common/Button.svelte'
  import CreateSupertagDialog from '../supertags/CreateSupertagDialog.svelte'
  import TagInput from '../tag-input/TagInput.svelte'
  import ActiveTag from '../tags/ActiveTag.svelte'
  import activeTags from './activeTagsStore'
  import results from './resultsStore'
  import Results from './Results.svelte'
  import ScrollUpButton from './ScrollUpButton.svelte'
  import sortStore from './sortStore'
  import Title from './Title.svelte'

  let supertagMode = false

  const getFirstPage = async () => {
    results.reset()
    return getNextPage()
  }

  const getNextPage = async () => {
    try {
      const tags = getSearchableTags()
      const page = await getPage($results.nextPage, tags, $sortStore.sortProperty, $sortStore.minScore)
      results.addPage(page)
    } catch (e) {
      //TODO: add error handling and user feedback here
      console.warn(e)
    }
  }

  const getSearchableTags = () => {
    return $activeTags.flatMap((t) =>
      t.type === 'supertag' ? $userdata.supertags.find((s) => s.name === t.name).tags : t.toSearchableTag()
    )
  }
</script>

<div class="search-config">
  <Title />
  <TagInput on:pick={(e) => activeTags.addOrReplace(e.detail)} />
  {#if $activeTags.length}
    <ul>
      {#each $activeTags as tag, i}
        <ActiveTag
          {tag}
          on:click={() => activeTags.removeByIndex(i)}
          on:contextmenu={() =>
            activeTags.addOrReplace(new AT(getNextModifier(tag.modifier), tag.name, tag.count, tag.type))}
        />
      {/each}
      {#if $activeTags.length > 1}
        <button
          class="add-supertag"
          title="Click to create a new supertag"
          on:click={() => {
            supertagMode = true
          }}
        >
          <i class="codicon codicon-star-full" />
        </button>
      {/if}
    </ul>
  {/if}
  <div class="sort-row">
    <Button title="Click to search with active tags" text="Search" on:click={() => getFirstPage()} />
  </div>
</div>

<Results on:endreached={getNextPage} />

<ScrollUpButton />

{#if supertagMode}
  <CreateSupertagDialog
    tags={$activeTags}
    on:submit={(ev) => {
      userdata.addSupertag(ev.detail)
      activeTags.set([new AT('+', ev.detail.name, ev.detail.tags.length, 'supertag')])
    }}
    on:close={() => {
      supertagMode = false
    }}
  />
{/if}

<style>
  .search-config {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  .sort-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .add-supertag {
    width: 24px;
    height: 24px;
    padding: 4px;
    border-radius: 12px;
    background-color: var(--accent);
    color: var(--text-accent);
    transition: background-color var(--default-transition-behaviour);
  }

  @media (hover: hover) {
    .add-supertag:hover {
      background-color: var(--accent-light);
    }
  }

  .add-supertag i {
    font-size: var(--text-size);
    width: 16px;
    text-align: center;
  }
</style>
