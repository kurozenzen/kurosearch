import { addIndexedTag, getIndexedTag } from '$lib/indexeddb/idb';
import { replaceHtmlEntities } from '$lib/logic/replace-html-entities';
import { fetchAbortPrevious } from '../fetchAbortPrevious';
import { API_URL, R34_API_URL } from '../url';

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

export const getTagDetails = async (
	name: string,
	apiKey: string,
	userId: string
): Promise<kurosearch.Tag | undefined> => {
	let indexedTag = await getIndexedTag(name);
	if (indexedTag) {
		return indexedTag;
	}

	let url: URL;
	if (userId && apiKey) {
		url = new URL(`${R34_API_URL}&s=tag&q=index&limit=1&api_key=${apiKey}&user_id=${userId}`);
	} else {
		url = new URL(`${API_URL}/tag-details`);
	}
	url.searchParams.append('name', name);

	const response = await fetch(url.toString());
	const text = await response.text();
	const parser = new DOMParser();
	const xml = parser.parseFromString(text, 'text/xml');
	const tagXml = xml.getElementsByTagName('tag')[0];

	const tag = parseTag(tagXml.attributes);
	if (tag) {
		addIndexedTag(tag);
	}
	return tag;
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
