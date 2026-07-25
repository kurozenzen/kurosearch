<script lang="ts">
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import PageGeneric from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import { apiUrl } from '$lib/logic/api-client/url';
</script>

<svelte:head>
	<title>kurosearch - Troubleshoot</title>
	<meta name="description" content="Diagnose issues while using kurosearch." />
</svelte:head>

<PageGeneric title="Troubleshooting">
	<section>
		<Heading3>Network Checks</Heading3>
		<ol>
			<li>
				<span>api.rule34.xxx ...</span>
				{#await fetch('https://api.rule34.xxx')}
					<span>⏳</span>
				{:then _}
					<span>✅ Good</span>
				{:catch}
					<span>❌ Failed to connect</span>
				{/await}
			</li>
			<li>
				<span>{new URL(apiUrl()).host}/count ...</span>
				{#await fetch(`${apiUrl()}/count`)}
					<span>⏳</span>
				{:then response}
					{#await response.text() then data}
						{#if /count="\d+"/.test(data)}
							<span>✅ Good</span>
						{:else}
							<span>❌ Invalid format <br /> Check if rule34.xxx is okay</span>
						{/if}
					{:catch}
						<span>❌ Failed to parse XML <br /> Check if rule34.xxx is okay</span>
					{/await}
				{:catch}
					<span>❌ Failed to connect <br /> Check if rule34.xxx is okay</span>
				{/await}
			</li>
			<li>
				<span>{new URL(apiUrl()).host}/posts ...</span>
				{#await fetch(`${apiUrl()}/posts?limit=1&pid=0`)}
					<span>⏳</span>
				{:then response}
					{#await response.json() then _}
						<span>✅ Good</span>
					{:catch}
						<span>❌ Failed to parse JSON <br /> Check if rule34.xxx is okay</span>
					{/await}
				{:catch}
					<span>❌ Failed to connect <br /> Check if rule34.xxx is okay</span>
				{/await}
			</li>
		</ol>
	</section>

	<section>
		<Heading3>Is rule34.xxx fully operational?</Heading3>
		<iframe src="https://rule34.xxx/index.php?page=post&s=list" title="rule34.xxx"></iframe>
	</section>
</PageGeneric>

<style>
	iframe {
		display: block;
		width: 100%;
		height: 500px;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>
