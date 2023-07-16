export const TAG_TYPES = Object.freeze([
	'artist',
	'character',
	'copyright',
	'source',
	'metadata',
	'rating',
	'tag',
	'general',
	'ambiguous',
	'supertag'
] as kurosearch.TagType[]);

export const TAG_TYPES_WITH_ICONS: Partial<Record<kurosearch.TagType, string>> = Object.freeze({
	artist: 'codicon codicon-edit',
	character: 'codicon codicon-person',
	copyright: 'codicon codicon-folder',
	source: 'codicon codicon-link',
	metadata: 'codicon codicon-info',
	rating: 'codicon codicon-unverified',
	supertag: 'codicon codicon-star-full'
});

export const getTagTypePriority = (value: kurosearch.TagType) => {
	const priority = TAG_TYPES.indexOf(value);
	return priority >= 0 ? priority : 99; // unrecognized means very high
};
