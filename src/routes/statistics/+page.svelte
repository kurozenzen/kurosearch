<script lang="ts">
	import tagData from '$lib/assets/tags.json';
	import postData from '$lib/assets/posts.json';
	import { partitionTagsByType } from '$lib/logic/tag-utils';

	const computeTags = () => {
		const tagsByType = partitionTagsByType(tagData as kurosearch.Tag[]);

		for (const type in tagsByType) {
			tagsByType[type].sort((a, b) => b.count - a.count);
		}

		return tagsByType;
	};

	const tagsByType = computeTags();

	const computeArtists = () => {
		const artists = tagsByType.artist.map((tag) => ({
			name: tag.name,
			posts: tag.count,
			score: 0
		}));

		for (const post of postData) {
			for (const tag of post.tags) {
				if (tag.type === 'artist') {
					const artist = artists.find((a) => a.name === tag.name);
					if (artist) {
						artist.score += post.score;
					}
				}
			}
		}

		artists.sort((a, b) => b.score - a.score);

		return artists;
	};

	const artists = computeArtists();

	const computeAspectRatios = () => {
		let result = postData.reduce(
			(acc, post) => {
				const ratio = post.width / post.height;
				const bucket = Math.floor(ratio * 10) / 10; // Bucket aspect ratios into 0.1 increments
				if (!acc[bucket]) {
					acc[bucket] = 0;
				}
				acc[bucket]++;
				return acc;
			},
			{} as Record<number, number>
		);

		const keys = Object.keys(result).map(Number);
		keys.sort();

		const sortedResult: Record<string, number> = {};
		for (const key of keys) {
			sortedResult[key.toFixed(1)] = result[key];
		}

		return sortedResult;
	};

	const aspectRatios = computeAspectRatios();

	const maxArCount = Math.max(...Object.values(aspectRatios));
</script>

<div>
	<h2>Character</h2>
	<ol>
		{#each tagsByType.character.slice(0, 50) as tag}
			<li>{tag.name} ({tag.count})</li>
		{/each}
	</ol>
</div>

<div>
	<h2>Copyright</h2>
	<ol>
		{#each tagsByType.copyright.slice(0, 50) as tag}
			<li>{tag.name} ({tag.count})</li>
		{/each}
	</ol>
</div>

<div>
	<h2>Artists</h2>
	<ol>
		{#each artists.slice(0, 50) as artist}
			<li>{artist.name} ({artist.score})</li>
		{/each}
	</ol>
</div>

<div class="aspect-ratios">
	<h2>Aspect Ratios</h2>
	<ol>
		{#each Object.entries(aspectRatios) as [ratio, count]}
			<li style="--fraction: {count / maxArCount}">
				<div></div>
				<span>{ratio}<br />{count}<br />{Math.round((count / postData.length) * 100)}%</span>
			</li>
		{/each}
	</ol>
</div>

<style>
	ol {
		column-count: 3;
		list-style: decimal;
	}

	.aspect-ratios ol {
		display: flex;
		height: 300px;
		gap: var(--small-gap);
	}

	.aspect-ratios ol li {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: end;
		border: 1px solid var(--background-2);
		text-align: center;
		justify-items: end;

		div {
			width: 100%;
			height: calc(var(--fraction) * 100%);
			background-color: var(--background-2);
		}
	}
</style>
