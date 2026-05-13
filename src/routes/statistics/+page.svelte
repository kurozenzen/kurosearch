<script lang="ts">
	import tagData from '$lib/assets/tags.json';
	import postData from '$lib/assets/posts.json';

	const computeTags = () => {
		const tagsByType = tagData.reduce(
			(acc, tag) => {
				if (!acc[tag.type]) {
					acc[tag.type] = [];
				}
				acc[tag.type].push({ name: tag.name, count: tag.count });
				return acc;
			},
			{} as Record<string, { name: string; count: number }[]>
		);

		for (const type in tagsByType) {
			tagsByType[type].sort((a, b) => b.count - a.count);
		}

		return tagsByType;
	};

	const tagsByType = computeTags();

	const computeArtists = () => {
		const artists = tagsByType.artist.map((tag) => ({name: tag.name, posts: tag.count, score: 0}));

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

<style>
	ol {
		column-count: 3;
		list-style: decimal;
	}
</style>
