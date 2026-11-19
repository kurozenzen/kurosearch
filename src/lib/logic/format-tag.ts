import { formatCount } from './format-count';
import { replaceHtmlEntities } from './replace-html-entities';

export const formatTagname = (tagname: string) => replaceHtmlEntities(tagname.trim().replaceAll('_', ' '));

export const formatActiveTag = (tag: { name: string; count?: number }) => {
	if (typeof tag.name !== 'string') {
		return 'error';
	}
	const name = formatTagname(tag.name);

	if (typeof tag.count !== 'number' || tag.count === 0) {
		return name;
	}
	const count = formatCount(tag.count);

	return `${name} (${count})`;
};
