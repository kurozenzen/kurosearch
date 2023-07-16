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
