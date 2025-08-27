<script lang="ts">
	import { getExtension } from '$lib/logic/media-utils';
	import { isValidUrl } from '$lib/logic/url-utils';

	interface Props {
		post: kurosearch.Post;
	}

	let { post }: Props = $props();

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

	const links = [
		new URL(`${window.location.origin}/post?id=${post.id}`),
		new URL(`https://rule34.xxx/index.php?page=post&s=view&id=${post.id}`),
		...(post.source
			? post.source
					.split(' ')
					.filter((x) => isValidUrl(x))
					.map((x) => new URL(x))
			: [])
	];

	const fileExt = getExtension(post.file_url);
	const previewExt = getExtension(post.preview_url);
	const sampleExt = getExtension(post.sample_url);
</script>

<p>Links</p>
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

<p>Files</p>
<div>
	<a
		href={post.file_url}
		target="_blank"
		class="codicon codicon-link"
		download="{post.id}.{fileExt}"
	>
		{post.id}.{fileExt}
	</a>
	<a
		href={post.preview_url}
		target="_blank"
		class="codicon codicon-link"
		download="{post.id}_preview.{previewExt}"
	>
		{post.id}_preview.{previewExt}
	</a>
	<a
		href={post.sample_url}
		target="_blank"
		class="codicon codicon-link"
		download="{post.id}_sample.{sampleExt}"
	>
		{post.id}_sample.{sampleExt}
	</a>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
	}

	div a {
		color: var(--text-link);
		font-size: var(--text-size);
		text-decoration: none;
		white-space: nowrap;
		display: inline-flex;
		gap: var(--tiny-gap);
		align-items: center;
	}

	ol {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		gap: var(--small-gap);
	}

	ol a {
		display: flex;
		align-items: center;
		height: var(--line-height);
		padding-inline: var(--small-gap);
		background-color: var(--background-2);
		color: var(--text-highlight);
		border-radius: var(--border-radius);
	}

	ol a::before {
		padding-inline-end: var(--small-gap);
	}

	@media (hover: hover) {
		ol a {
			transition: all var(--default-transition-behaviour);
		}

		ol a.black:hover {
			filter: brightness(0.7);
		}

		ol a.white:hover {
			filter: brightness(1.5);
		}
	}
</style>
