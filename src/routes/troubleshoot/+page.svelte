<script lang="ts">
	import { getComments, getPage, getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import apiKey from '$lib/store/api-key-store';
	import userId from '$lib/store/user-id-store';

	const networkChecks = [
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
