<script>
  import SimpleTag from '../../../tags/SimpleTag.svelte'
  import Source from './source/Source.svelte'
  import Entry from './Entry.svelte'
  import CreatedAt from './CreatedAt.svelte'
  import Score from './Score.svelte'
  import LoadingAnimation from '../../../common/LoadingAnimation.svelte'
  import { getComments } from '../../../../api-client/ApiClient'
  import Comment from './Comment.svelte'
  import Rule34Source from './source/Rule34Source.svelte'

  /** @type {import("../../../../types/post/Post").Post} */
  export let post

  let tab = 'tags'
</script>

<div class="details">
  <div class="summary">
    {#if post.comment_count > 0}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <i
        on:click={() => {
          tab = 'tags'
        }}
        class:active={tab === 'tags'}
        class="codicon codicon-tag"
      />

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <i
        on:click={() => {
          tab = 'comments'
        }}
        class:active={tab === 'comments'}
        class="codicon codicon-comment-discussion"
      />
    {/if}
    <Entry>
      <CreatedAt value={post.change} />
    </Entry>
    <Entry>
      <Score value={post.score} />
    </Entry>
    <Entry>
      <Rule34Source url={post.file_url} />
    </Entry>
    {#if post.source}
      <Entry>
        <Source source={post.source} />
      </Entry>
    {/if}
  </div>
  {#if tab === 'tags'}
    <ul class="tags">
      {#each post.tags as tag}
        <SimpleTag {tag} />
      {/each}
    </ul>
  {:else}
    {#await getComments(post.id)}
      <LoadingAnimation />
    {:then comments}
      {#if comments.length > 0}
        <ul class="comments">
          {#each comments as comment}
            <Comment {comment} />
          {/each}
        </ul>
      {:else}
        <span class="no-comments">Comments for this post are no longer available</span>
      {/if}
    {/await}
  {/if}
</div>

<style>
  .details {
    display: flex;
    flex-direction: column;
    padding: var(--grid-gap);
  }

  .summary {
    display: flex;
    align-items: center;
    overflow-x: auto;
    gap: 2rem;
    padding-block-end: 0.5rem; /* a bit hacky to split the gap here but it places the scrollbar nicely*/
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    padding-block-start: 0.5rem;
    gap: 8px;
  }

  .comments {
    padding-block-start: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }

  .active {
    color: var(--text-highlight);
  }

  .no-comments {
    padding-block-start: calc(var(--grid-gap) * 2);
    padding-block-end: var(--grid-gap);
    text-align: center;
  }
</style>
