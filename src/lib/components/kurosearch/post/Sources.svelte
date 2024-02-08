<script lang="ts">
	export let links: URL[];

	const HOST_COLOR_MAPPING: Record<string, [string, string]> = {
		'kurosearch.com': ['crimson', 'white'],
		'rule34.xxx': ['#aae5a4', 'black'],
		'newgrounds.com': ['#fda238', 'black'],
		'twitter.com': ['rgb(29, 155, 240)', 'white'],
		'x.com': ['rgb(29, 155, 240)', 'white'],
		'pornhub.com': ['#f90', 'black'],
		'zone-archive.com': ['#59396A', 'white'],
		'subscribestar.adult': ['#ff4081', 'white'],
		'redgifs.com': ['#E5194D', 'white'],
		default: ['var(--background-2)', 'white']
	};
</script>

<ol>
	{#each links as link}
		{@const host = link.host.replace('www.', '')}
		{@const [background, foreground] = HOST_COLOR_MAPPING[host] ?? HOST_COLOR_MAPPING['default']}
		<li>
			<a
				href={link.toString()}
				class="codicon codicon-link-external"
				style="background-color: {background}; color: {foreground};"
			>
				{host}
			</a>
		</li>
	{/each}
</ol>

<style>
	ol {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		gap: var(--small-gap);
	}

	a {
		display: flex;
		align-items: center;
		height: var(--line-height);
		padding-inline: var(--grid-gap);
		background-color: var(--background-2);
		color: var(--text-highlight);
		border-radius: var(--border-radius);
	}

	a::before {
		padding-inline-end: var(--small-gap);
	}
</style>
