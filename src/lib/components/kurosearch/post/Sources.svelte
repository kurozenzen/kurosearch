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
		'deviantart.com': ['#00c787', 'black'],
		default: ['var(--background-2)', 'white']
	};
</script>

<ol>
	{#each links as link}
		{@const host = link.host.replace('www.', '')}
		{@const [background, foreground] = HOST_COLOR_MAPPING[host] ?? HOST_COLOR_MAPPING['default']}
		{@const label = host.includes('api-cdn') ? 'File' : host}
		<li>
			<a
				href={link.toString()}
				class="codicon codicon-link-external {foreground}"
				style="background-color: {background}; color: {foreground};"
			>
				{label}
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
		padding-inline: var(--small-gap);
		background-color: var(--background-2);
		color: var(--text-highlight);
		border-radius: var(--border-radius);
	}

	a::before {
		padding-inline-end: var(--small-gap);
	}

	@media (hover: hover) {
		a {
			transition: all var(--default-transition-behaviour);
		}

		a.black:hover {
			filter: brightness(0.7);
		}

		a.white:hover {
			filter: brightness(1.5);
		}
	}
</style>
