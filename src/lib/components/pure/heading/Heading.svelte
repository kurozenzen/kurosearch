<script lang="ts">
	interface Props {
		element: 'h1' | 'h2' | 'h3';
		title: string;
	}

	let { title, element }: Props = $props();
	let id = $derived(
		title
			.trim()
			.toLowerCase()
			.replaceAll(' ', '-')
			.replaceAll('&', 'and')
			.replace(/[:/?#[\]@!$&'()*+,;=]/g, '')
	);
</script>

<svelte:element this={element} {id}>
	{title}
	{#if id}
		<a href="#{id}" aria-label="permalink" class="mixin-hover">#</a>
	{/if}
</svelte:element>

<style>
	h1,
	h2,
	h3 {
		display: flex;
		align-items: center;
		gap: var(--small-gap);
		color: var(--text-highlight);
	}

	h1 {
		color: var(--text-highlight);
		font-size: var(--text-size-h1);
	}

	@media (max-width: 420px) {
		h1 {
			font-size: 12.6vw;
		}
	}

	h2 {
		font-size: var(--text-size-h2);
	}

	h3 {
		font-size: var(--text-size-h3);
	}

	a {
		opacity: 0;
	}

	:hover a {
		opacity: 1;
	}
</style>
