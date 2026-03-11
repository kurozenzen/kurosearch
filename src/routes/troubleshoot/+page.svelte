<script lang="ts">
	import { getComments, getPage, getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import apiKey from '$lib/store/api-key-store';
	import userId from '$lib/store/user-id-store';

	const networkChecks = [
		{
			title: 'api.rule34.xxx',
			promise: fetch('https://api.rule34.xxx')
		},
		{
			title: 'Netlify - Count',
			promise: fetch('https://rule34-api.netlify.app/count')
		},
		{
			title: 'Netlify - Posts',
			promise: fetch('https://rule34-api.netlify.app/posts?limit=1&pid=0')
		},
		{
			title: 'Tags',
			promise: getTagSuggestions('big')
		},
		{
			title: 'Posts',
			promise: getPage(0, '', $apiKey, $userId)
		},
		{
			title: 'Comments',
			promise: getComments(0, $apiKey, $userId)
		}
	];
</script>

<svelte:head>
	<title>kurosearch - Troubleshoot</title>
	<meta name="description" content="Diagnose issues while using kurosearch." />
</svelte:head>

<h1>Troubleshooting</h1>

<h3>Network Checks</h3>
<ol>
	{#each networkChecks as check}
		<li>
			{#await check.promise}
				<span>⏳</span>
			{:then _}
				<span>✅</span>
			{:catch}
				<span>❌</span>
			{/await}
			<span>{check.title}</span>
		</li>
	{/each}
</ol>
