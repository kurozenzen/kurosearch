<script>
  import { formatCount } from '../../formatting/formatCount'
  import { formatTagname } from '../../formatting/formatTagname'
  import { createEventDispatcher } from 'svelte'
  import TagIcon from '../tags/TagIcon.svelte'
  import onEnterOrSpace from '../common/onEnterOrSpace'

  /** @type {import("../../types/tags/Tag").Tag} */
  export let tag
  export let selected = false

  const dispatch = createEventDispatcher()
  const onClick = () => dispatch('click', tag)
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li tabindex="0" on:click={onClick} on:keypress={onEnterOrSpace(onClick)} title={tag.name} class:selected>
  <TagIcon type={tag.type} />
  <span class="tag-name">{formatTagname(tag.name)}</span>
  <span class="tag-count">{formatCount(tag.count)}</span>
</li>

<style>
  li {
    display: grid;
    align-items: center;
    height: 24px;
    grid-template-columns: 16px 1fr auto;
    gap: 1rem;
    font-size: var(--text-size);
    padding-inline: 16px;
    user-select: none;
    transition: background-color var(--default-transition-behaviour);
  }

  li:focus, .selected {
    background-color: var(--background-2);
    outline: none;
  }

  @media (hover: hover) {
    li:hover {
      background-color: var(--background-2);
    }
  }

  .tag-name {
    grid-column: 2;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
