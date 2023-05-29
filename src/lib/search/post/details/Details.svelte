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
  import { formatCreatedAt } from './formatCreatedAt'

  /** @type {import("../../../../types/post/Post").Post} */
  export let post

  let tab = 'tags'
</script>

<div class="details">
  <div class="summary">
    <Entry>
      <Score value={post.score} />
    </Entry>
    <span>•</span>
    <Entry>
      <CreatedAt value={post.change} />
    </Entry>
    <span>•</span>
    <Entry>
      <Rule34Source url={post.file_url} />
    </Entry>
    {#if post.source}
      <span>•</span>
      <Entry>
        <Source source={post.source} />
      </Entry>
    {/if}
  </div>
  <div class="tabs">
    <button
      on:click={() => {
        tab = 'tags'
      }}
      class:active={tab === 'tags'}
      class="codicon codicon-tag"
    >
      {post.tags.length} tags
    </button>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button
      on:click={() => {
        tab = 'comments'
      }}
      class:active={tab === 'comments'}
      class="codicon codicon-comment-discussion"
    >
      {post.comment_count || 'No'} comments
    </button>
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
        <span class="no-comments">Comments for this post are not available</span>
      {/if}
    {/await}
  {/if}
</div>

<style>
  .details {
    display: flex;
    flex-direction: column;
    padding: var(--grid-gap);
    animation: slide-down 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .summary {
    display: flex;
    align-items: center;
    overflow-x: auto;
    gap: var(--small-gap);
    padding-block-end: 0.5rem; /* a bit hacky to split the gap here but it places the scrollbar nicely*/
    margin-block-end: 0.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    padding-block-start: var(--grid-gap);
    gap: 8px;
  }

  .comments {
    padding-block-start: var(--grid-gap);
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }

  .no-comments {
    padding-block-start: calc(var(--grid-gap) * 2);
    padding-block-end: var(--grid-gap);
    text-align: center;
  }

  @keyframes slide-down {
    from {
      transform: translateY(-100px);
    }

    to {
      transform: translateY(0px);
    }
  }

  span {
    white-space: nowrap;
  }

  .tabs {
    display: flex;
    gap: var(--small-gap);
  }

  button {
    white-space: nowrap;
    background: unset;
    color: var(--text);
    height: var(--line-height);
    border-radius: var(--line-height);
    transition: all 0.2s linear;
    padding-inline: var(--grid-gap);
  }

  button::before {
    margin-inline-end: var(--small-gap);
  }

  button.active,
  button.active::before {
    color: var(--text-highlight);
    background-color: var(--background-2);
  }
</style>
