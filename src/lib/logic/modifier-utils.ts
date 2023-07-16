const ORDER = ['+', '-', '~'] as const;

export const nextModifier = (modifier: kurosearch.TagModifier) => {
	const index = ORDER.indexOf(modifier) ?? 2;
	const nextIndex = (index + 1) % ORDER.length;
	return ORDER[nextIndex];
};
