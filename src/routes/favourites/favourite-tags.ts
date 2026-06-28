export const TAG_FILTER_OPTIONS = Object.freeze({
	all: 'All Tags',
	artist: 'Artists',
	character: 'Characters',
	copyright: 'Copyrights',
	metadata: 'Metadata Tags',
	tag: 'General Tags',
});

export type TagTypeFilter = keyof typeof TAG_FILTER_OPTIONS;

export const TAG_SORT_OPTIONS = Object.freeze({
	'relative-popularity': 'Relative Popularity',
	count: 'Count'
});

export type FavouriteTagSort = keyof typeof TAG_SORT_OPTIONS;

export const TAG_LIMIT_OPTIONS = Object.freeze({
	'10': 'Top 10',
	'20': 'Top 20',
	all: 'Show All'
});

export type FavouriteTagLimit = keyof typeof TAG_LIMIT_OPTIONS;

export type FavouriteTag = kurosearch.Tag & { inFavourites: number };

const TAG_TYPE_ORDINALS: Record<kurosearch.TagType, number> = {
	supertag: 0,
	artist: 1,
	character: 2,
	copyright: 3,
	source: 4,
	metadata: 5,
	rating: 6,
	tag: 7,
	general: 8,
	ambiguous: 9
};

export const tagTypeOrdinal = (tagType: kurosearch.TagType): number => {
	if (!(tagType in TAG_TYPE_ORDINALS)) {
		console.warn(`Unknown tag type: ${tagType}`);
	}
	return TAG_TYPE_ORDINALS[tagType] ?? 10;
};

export const countTagsOnPosts = (
	posts: kurosearch.Post[],
	filter: TagTypeFilter
): Record<string, FavouriteTag> =>
	posts.reduce(
		(acc, post) => {
			const postTags =
				filter === 'all' ? post.tags : post.tags.filter((tag) => tag.type === filter);

			postTags.forEach((tag) => {
				if (!(tag.name in acc)) {
					acc[tag.name] = { ...tag, inFavourites: 0 };
				}
				acc[tag.name].inFavourites += 1;
			});

			return acc;
		},
		{} as Record<string, FavouriteTag>
	);

export const orderTags = (tagCounts: Record<string, FavouriteTag>, sort: FavouriteTagSort) => {
	switch (sort) {
		case 'relative-popularity':
			return orderByRelativePopularity(tagCounts);
		case 'count':
			return orderByCount(tagCounts);
		default:
			return [];
	}
};

export const orderByRelativePopularity = (tagCounts: Record<string, FavouriteTag>) => {
	return Object.values(tagCounts)
		.filter((tag) => tag.inFavourites > 1)
		.sort((a, b) => b.inFavourites / b.count - a.inFavourites / a.count);
};

export const orderByCount = (tagCounts: Record<string, FavouriteTag>) => {
	return Object.values(tagCounts).sort((a, b) => {
		if (b.inFavourites !== a.inFavourites) {
			return b.inFavourites - a.inFavourites;
		}
		return tagTypeOrdinal(a.type) - tagTypeOrdinal(b.type);
	});
};

export const limitTags = (tags: FavouriteTag[], limit: FavouriteTagLimit) => {
	return limit === 'all' ? tags : tags.slice(0, parseInt(limit));
};

export const computeFavourteTags = (
	posts: kurosearch.Post[],
	filter: TagTypeFilter,
	sort: FavouriteTagSort,
	limit: FavouriteTagLimit
): FavouriteTag[] => {
	const filtered = countTagsOnPosts(posts, filter);
	const ordered = orderTags(filtered, sort);
	const limited = limitTags(ordered, limit);

	console.log(
		`Computed favourite tags with filter=${filter}, sort=${sort}, limit=${limit}:`,
		limited
	);
	return limited;
};
