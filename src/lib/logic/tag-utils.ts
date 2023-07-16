export const createActiveTag = (
	modifier: kurosearch.TagModifier,
	name: string,
	count: number,
	type: kurosearch.TagType
): kurosearch.ActiveTag => ({
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
