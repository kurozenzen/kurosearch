<script lang="ts" module>
	import { getExtension } from '#lib/logic/media-utils';
	import { getSourcesForPost } from '#lib/logic/svelte/sources.svelte';

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
		default: ['var(--background-2)', 'var(--text)']
	};
</script>

<script lang="ts">
	interface Props {
		post: kurosearch.Post;
	}

	let { post }: Props = $props();

	let links = $derived(getSourcesForPost(post));
	let fileExt = $derived(getExtension(post.file_url));
	let previewExt = $derived(getExtension(post.preview_url));
	let sampleExt = $derived(getExtension(post.sample_url));
</script>

<ul>
	<li>
		<p>Links</p>
		<ul>
			{#each links as link}
				{@const host = link.host.replace('www.', '')}
				{@const [background, foreground] =
					HOST_COLOR_MAPPING[host] ?? HOST_COLOR_MAPPING['default']}
				{@const label = host.includes('api-cdn') ? 'File' : host}
				<li>
					<a
						href={link.toString()}
						class="codicon codicon-link-external mixin-shape-item mixin-icon-text {foreground}"
						style="background-color: {background}; color: {foreground};"
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</li>
	<li>
		<p>Files</p>
		<ul>
			<li>
				<a
					href={post.file_url}
					target="_blank"
					class="codicon codicon-link mixin-shape-item mixin-secondary mixin-hover mixin-icon-text"
					download="{post.id}.{fileExt}"
				>
					{post.id}.{fileExt}
				</a>
			</li>
			<li>
				<a
					href={post.sample_url}
					target="_blank"
					class="codicon codicon-link mixin-shape-item mixin-secondary mixin-hover mixin-icon-text"
					download="{post.id}_sample.{sampleExt}"
				>
					{post.id}_sample.{sampleExt}
				</a>
			</li>
			<li>
				<a
					href={post.preview_url}
					target="_blank"
					class="codicon codicon-link mixin-shape-item mixin-secondary mixin-hover mixin-icon-text"
					download="{post.id}_preview.{previewExt}"
				>
					{post.id}_thumbnail.{previewExt}
				</a>
			</li>
		</ul>
	</li>
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		gap: var(--grid-gap);

		ul {
			gap: var(--small-gap);
		}
	}

	ul a {
		display: flex;
		align-items: center;
	}

	p {
		margin-bottom: var(--small-gap);
	}

	@media (hover: hover) {
		ul a {
			transition: all var(--default-transition-behaviour);
		}

		ul a.black:hover {
			filter: brightness(0.7);
		}

		ul a.white:hover {
			filter: brightness(1.5);
		}
	}
</style>
