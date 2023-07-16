export const createModifiedTag = (
	modifier: kurosearch.TagModifier,
	name: string,
	count: number,
	type: kurosearch.TagType
): kurosearch.ModifiedTag => ({
	modifier,
	name,
	count,
	type
});

export const createTag = (
	name: string,
	count: number,
	type: kurosearch.TagType
): kurosearch.Tag => ({
	name,
	count,
	type
});

export const createSupertag = (
	name: string,
	description: string,
	tags: kurosearch.SearchableTag[]
): kurosearch.Supertag => ({
	name,
	description,
	tags
});

export const createSearchableTag = (
	modifier: kurosearch.TagModifier,
	name: string
): kurosearch.SearchableTag => ({
	modifier,
	name
});
