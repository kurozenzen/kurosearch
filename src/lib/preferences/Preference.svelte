<script>
  import ParagraphHeading from '../common/text/ParagraphHeading.svelte'

  export let title
  export let description
</script>

<div>
  <ParagraphHeading>{title}</ParagraphHeading>
  <p>{description}</p>
  <slot />
</div>

<style>
  p {
    margin-block-end: 1rem;
  }
</style>
