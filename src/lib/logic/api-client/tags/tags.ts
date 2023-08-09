import { replaceHtmlEntities } from '$lib/logic/replace-html-entities';
import { fetchAbortPrevious } from '../fetchAbortPrevious';

let getTagSuggestionsAbortController: AbortController | null = null;

export const getTagSuggestions = async (term: string): Promise<kurosearch.Suggestion[]> => {
	const url = new URL('https://api.rule34.xxx/autocomplete.php');
	url.searchParams.append('q', term.replaceAll(' ', '_'));

	const res = await fetchAbortPrevious(url.toString(), getTagSuggestionsAbortController);
	if (res.ok) {
		const json = await res.json();
		if (Array.isArray(json)) {
			if (json.length === 0) {
				throw new Error('No tags found');
			} else {
				return json.map(parseSuggestion);
			}
		} else if (json.message) {
			throw new Error(json.message);
		} else {
			throw new Error('Invalid tag suggestions received');
		}
	} else {
		throw new Error('Failed to get tag suggestions');
	}
};

export const getTagDetails = async (name: string): Promise<kurosearch.Tag | undefined> => {
	const url = new URL('https://api.rule34.xxx/index.php?page=dapi&s=tag&q=index&limit=1');
	url.searchParams.append('name', name);

	const response = await fetch(url.toString());
	const text = await response.text();
	const parser = new DOMParser();
	const xml = parser.parseFromString(text, 'text/xml');
	const tagXml = xml.getElementsByTagName('tag')[0];

	return parseTag(tagXml.attributes);
};

const parseSuggestion = (suggestion: r34.Suggestion): kurosearch.Suggestion => ({
	label: replaceHtmlEntities(suggestion.value),
	count: extractCount(suggestion.label),
	type: 'tag'
});

const extractCount = (label: string) => {
	return Number(label.substring(label.lastIndexOf('(') + 1, label.length - 1));
};

const parseTag = (tag: NamedNodeMap): kurosearch.Tag | undefined => {
	const name = tag.getNamedItem('name');
	const count = tag.getNamedItem('count');
	const typeId = tag.getNamedItem('type');

	if (name === null || count === null || typeId === null) {
		return undefined;
	}

	return {
		name: replaceHtmlEntities(name.value),
		count: Number(count.value),
		type: parseType(typeId.value)
	};
};

const parseType = (value: string): kurosearch.TagType => {
	const types: kurosearch.TagType[] = [
		'general',
		'artist',
		'general',
		'copyright',
		'character',
		'metadata'
	];

	return types[Number(value)];
};
