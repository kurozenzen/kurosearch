import { browser } from '$app/environment';
import { addIndexedTag, getIndexedTag } from '#lib/indexeddb/idb';
import { formatTagname } from '#lib/logic/format-tag';
import { replaceHtmlEntities } from '#lib/logic/replace-html-entities';
import { serializeAutocompleteTag } from '#lib/logic/tag-serialization';
import { apiUrl, R34_API_URL } from '../url';
import { ApiError } from './ApiError';

let abortController: AbortController | undefined;

export const getTagSuggestions = async (term: string): Promise<kurosearch.Suggestion[]> => {
	if (!browser) {
		return [];
	}

	abortController?.abort();
	abortController = new AbortController();

	const url = new URL('https://api.rule34.xxx/autocomplete.php');
	url.searchParams.append('q', serializeAutocompleteTag(term));

	let res: Response;
	try {
		res = await fetch(url.toString(), { signal: abortController.signal });
	} catch (err) {
		if (err instanceof DOMException && err.name === 'AbortError') {
			throw new ApiError('aborted', 'Interrupted by new request', { cause: err });
		}
		throw new ApiError('fetch-error', 'Failed to fetch suggestions', {
			cause: err
		});
	}

	if (!res.ok) {
		throw new ApiError('fetch-error', `Failed to fetch suggestions (HTTP ${res.status})`);
	}
	
	let text: string;
	try {
		text = await res.text();
	} catch (err) {
		throw new ApiError('parse-error', 'Failed to parse TEXT response', { cause: err });
	}

	if (text.trim().length === 0) {
		throw new ApiError('not-found', 'No tags found');
	}

	let json: unknown;
	try {
		json = JSON.parse(text);
	} catch (err) {
		throw new ApiError('parse-error', 'Failed to parse JSON response', { cause: err });
	}

	if (typeof json === 'object' && json !== null && 'message' in json) {
		throw new ApiError('fetch-error', String(json.message));
	}

	if (!Array.isArray(json)) {
		throw new ApiError('parse-error', 'Failed to parse suggestions. Not an array.');
	}

	if (json.length === 0) {
		throw new ApiError('not-found', 'No tags found');
	}

	return json.map(parseSuggestion);
};

export const getTagDetails = async (
	name: string,
	apiKey: string,
	userId: string
): Promise<kurosearch.Tag | undefined> => {
	if (!browser) {
		return undefined;
	}

	let indexedTag = await getIndexedTag(name);
	if (indexedTag) {
		return indexedTag;
	}

	let url: URL;
	if (userId && apiKey) {
		url = new URL(`${R34_API_URL}&s=tag&q=index&limit=1&api_key=${apiKey}&user_id=${userId}`);
	} else {
		url = new URL(`${apiUrl()}/tag-details`);
	}
	url.searchParams.append('name', name);

	const response = await fetch(url.toString());
	if (!response.ok) {
		throw new Error('Failed to get tag details');
	}

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

const parseSuggestion = (data: unknown): kurosearch.Suggestion => {
	try {
		const suggestion = data as r34.Suggestion;
		return {
			label: formatTagname(suggestion.value),
			count: extractCount(suggestion.label),
			type: 'tag'
		};
	} catch (err) {
		throw new ApiError('parse-error', 'Failed to parse Suggestion.', { cause: err });
	}
};

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
