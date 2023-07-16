import { BLOCKING_GROUP_TAGS } from './blocking-group-data';

export const serializeModifier = (value: kurosearch.TagModifier) => (value === '-' ? '-' : '');

export const serializeTagName = (value: string) => value.replaceAll(' ', '_');

export const serializeSearchableTag = (tag: kurosearch.SearchableTag) =>
	`${serializeModifier(tag.modifier)}${serializeTagName(tag.name)}`;

export const serializeSearchableTags = (tags: kurosearch.SearchableTag[]) => {
	const tagsByModifier = partitionTagsByModifier(tags);
	let parts = [...serializeTags([...tagsByModifier['+'], ...tagsByModifier['-']])];

	if (tagsByModifier['~'].length > 0) {
		parts.push(`( ${serializeTags(tagsByModifier['~']).join(' ~ ')} )`);
	}

	return parts.join('+');
};

export const serializeSearch = (
	tags: kurosearch.SearchableTag[],
	sortProperty: kurosearch.SortProperty,
	sortDirection: kurosearch.SortDirection,
	scoreValue: number,
	rating: kurosearch.Rating,
	scoreComparator: kurosearch.ScoreComparator,
	blockedContent: kurosearch.BlockingGroup[],
	supertags: kurosearch.Supertag[]
) => {
	const parts = [`sort:${sortProperty}:${sortDirection}`];

	if (scoreValue !== 0 || scoreComparator !== '>=') {
		parts.push(`score:${scoreComparator}${scoreValue}`);
	}

	if (rating !== 'all') {
		parts.push(`rating:${rating}`);
	}

	if (tags.length > 0) {
		parts.push(serializeSearchableTags(tags));
	}

	if (supertags.length > 0) {
		const supertagString = supertags
			.map((supertag) => serializeSearchableTags(supertag.tags))
			.join('+');
		parts.push(supertagString);
	}

	if (blockedContent.length > 0) {
		const blockedTags: kurosearch.SearchableTag[] = blockedContent
			.flatMap((groupName) => BLOCKING_GROUP_TAGS[groupName])
			.map((name) => ({ modifier: '-', name }));
		const blockedString = serializeSearchableTags(blockedTags);

		parts.push(blockedString);
	}

	const result = parts.join('+');

	return result;
};

const serializeTags = (tags: kurosearch.SearchableTag[]) => tags.map(serializeSearchableTag);

const partitionTagsByModifier = (tags: kurosearch.SearchableTag[]) => {
	const partitions: Record<kurosearch.TagModifier, kurosearch.SearchableTag[]> = {
		'+': [],
		'-': [],
		'~': []
	};

	tags.forEach((t) => partitions[t.modifier].push(t));

	return partitions;
};
