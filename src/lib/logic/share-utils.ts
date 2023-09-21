import { createSearchableTag } from './tag-utils';

const DELIMITER = ';';

export const parseShareTags = (value: string): kurosearch.SearchableTag[] =>
	value
		.split(DELIMITER)
		.map((x) => x.trim())
		.map((group) =>
			createSearchableTag(group.charAt(0) as kurosearch.TagModifier, group.substring(1))
		);

export const serializeShareTags = (tags: kurosearch.SearchableTag[]): string =>
	tags.map((t) => `${t.modifier}${t.name}`).join(DELIMITER);
