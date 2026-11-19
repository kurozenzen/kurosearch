import { supertags } from '$lib/store';
import { findItemByName } from './array-ops';
import { serializeTagName } from './tag-serialization';
import { createSearchableTag } from './tag-utils';

const DELIMITER = ';';

export const parseShareTags = (value: string): kurosearch.SearchableTag[] =>
	value
		.replaceAll(' ', '+')
		.split(DELIMITER)
		.map((x) => x.trim())
		.map((group) =>
			createSearchableTag(group.charAt(0) as kurosearch.TagModifier, group.substring(1))
		);

export const parseShareSupertags = (value: string): kurosearch.Supertag[] =>
	value
		.split(DELIMITER)
		.map((x) => x.trim())
		.map((x) => findItemByName(supertags.value, x))
		.filter((x) => x !== undefined);

export const serializeShareTags = (tags: kurosearch.SearchableTag[]): string =>
	tags.map((t) => `${t.modifier}${serializeTagName(t.name)}`).join(DELIMITER);

export const serializeShareSupertags = (tags: kurosearch.Supertag[]): string =>
	tags.map((t) => serializeTagName(t.name)).join(DELIMITER);
