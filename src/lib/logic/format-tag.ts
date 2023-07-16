import { formatCount } from './format-count';

export const formatTagname = (tagname: string) => tagname.replace(/_/g, ' ');

export const formatActiveTag = (tag: { name: string; count?: number }) => {
	if (typeof tag.name !== 'string') {
		return 'error';
	}
	const name = formatTagname(tag.name);

	if (typeof tag.count !== 'number') {
		return name;
	}
	const count = formatCount(tag.count);

	return `${name} (${count})`;
};
