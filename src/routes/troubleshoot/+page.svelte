<script lang="ts">
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';

	fetch('https://rule34-api.netlify.app/posts?limit=1&pid=0')
		.then((response) => response.json())
		.then((data) => {
			console.log('Count API Response:', data);
		})
		.catch((error) => {
			console.error('Count API Error:', error);
		});
</script>

<svelte:head>
	<title>kurosearch - Troubleshoot</title>
	<meta name="description" content="Diagnose issues while using kurosearch." />
</svelte:head>

<Heading1>Troubleshooting</Heading1>

<Heading3>Network Checks</Heading3>
<ol>
	<li>
		<span>api.rule34.xxx...</span>
		{#await fetch('https://api.rule34.xxx')}
			<span>⏳</span>
		{:then _}
			<span>✅ Good</span>
		{:catch}
			<span>❌ Failed to connect</span>
		{/await}
	</li>
	<li>
		<span>rule34-api.netlify.app/count...</span>
		{#await fetch('https://rule34-api.netlify.app/count')}
			<span>⏳</span>
		{:then response}
			{#await response.text() then data}
				{#if /count="\d+"/.test(data)}
					<span>✅ Good</span>
				{:else}
					<span>❌ Invalid format - Check if rule34.xxx is okay</span>
				{/if}
			{:catch}
				<span>❌ Failed to parse XML - Check if rule34.xxx is okay</span>
			{/await}
		{:catch}
			<span>❌ Failed to connect - Check if rule34.xxx is okay</span>
		{/await}
	</li>
	<li>
		<span>https://rule34-api.netlify.app/posts...</span>
		{#await fetch('https://rule34-api.netlify.app/posts?limit=1&pid=0')}
			<span>⏳</span>
		{:then response}
			{#await response.json() then _}
				<span>✅ Good</span>
			{:catch}
				<span>❌ Failed to parse JSON - Check if rule34.xxx is okay</span>
			{/await}
		{:catch}
			<span>❌ Failed to connect - Check if rule34.xxx is okay</span>
		{/await}
	</li>
</ol>

<Heading3>Is rule34.xxx fully operational?</Heading3>
<iframe src="https://rule34.xxx/index.php?page=post&s=list" title="rule34.xxx"></iframe>

<style>
	iframe {
		display: block;
		width: 100%;
		height: 500px;
	}
</style>
