<script lang="ts">
	import KurosearchTitle from '$lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import QuickSearch from '$lib/components/kurosearch/quick-search/QuickSearch.svelte';
	import LynxMain from '../LynxMain.svelte';
</script>

<svelte:head>
	<title>kurosearch - Rule34 Hentai</title>
	<meta
		name="description"
		content="Simple and powerful Rule34/Hentai browsing site with a focus on simplicity and user experience. Supports excluding tags, sorting and filtering."
	/>
</svelte:head>

<LynxMain />

<KurosearchTitle />

<h2>What are you looking for, today?</h2>

<p>
	NOTE:<br />
	- This is a prototype<br />
	- The goal is to search fast and without a keyboard<br />
	- Suggest categories (anonymous):
	<a
		href="https://app.sli.do/event/ryq8XXpSK6cdwqMB8a4rPh/embed/polls/f3e9b7bd-922b-4178-82aa-28dc4075cfce"
		target="_blank">Open Poll</a
	><br />
	- Suggest category images (anonymous):
	<a
		href="https://docs.google.com/forms/d/e/1FAIpQLSd04XopxmKbWq4_tMoPgjIb9AlkYms-NtOlxUTfTznGQ7r9Dg/viewform"
		target="_blank">Open Form</a
	><br />
	- Feedback welcome on Discord
</p>

<QuickSearch />

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	h2 {
		text-align: center;
	}

	p {
		max-width: 400px;
		margin: auto;
	}
</style>
