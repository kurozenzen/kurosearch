import { replaceHtmlEntities } from '$lib/logic/replace-html-entities';
import { parseJson, parseXml } from '$lib/logic/parse-utils';

let getTagSuggestionsAbortController: AbortController | null = null;
const API_ENDPOINT = '/api/tags';

export const getTagSuggestions = async (term: string): Promise<kurosearch.Suggestion[]> => {
	// Abort previous request if it exists
	if (getTagSuggestionsAbortController) {
		getTagSuggestionsAbortController.abort();
	}

	// Create new controller for this request
	getTagSuggestionsAbortController = new AbortController();

	const url = new URL(
		`${API_ENDPOINT}?autocomplete=1&q=${encodeURIComponent(term.replaceAll(' ', '_'))}`,
		typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
	);

	const res = await fetch(url.toString(), { signal: getTagSuggestionsAbortController.signal });
	if (res.ok) {
		const json = await parseJson(res);
		if (Array.isArray(json)) {
			if (json.length === 0) {
				throw new Error('No tags found');
			} else {
				return json.map(parseSuggestion);
			}
		} else if ((json as any).message) {
			throw new Error((json as any).message);
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
	// Try IndexedDB cache only in a browser with IndexedDB
	if (typeof window !== 'undefined' && 'indexedDB' in window) {
		try {
			const { getIndexedTag } = await import('$lib/indexeddb/idb');
			const indexedTag = await getIndexedTag(name);
			if (indexedTag) {
				return indexedTag;
			}
		} catch {
			// ignore cache if idb module fails to load
			/* c8 ignore next */
			void 0;
		}
	}

	const url = new URL(
		`${API_ENDPOINT}`,
		typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
	);
	url.searchParams.append('name', name);
	if (userId && apiKey) {
		url.searchParams.append('api_key', apiKey);
		url.searchParams.append('user_id', userId);
	}

	const response = await fetch(url.toString());
	const text = await response.text();
	const xml = parseXml(text);
	const tagXml = xml.getElementsByTagName('tag')[0];

	const tag = tagXml ? parseTag(tagXml.attributes) : undefined;
	if (tag && typeof window !== 'undefined' && 'indexedDB' in window) {
		// Best-effort caching; don't block on failures
		try {
			const { addIndexedTag } = await import('$lib/indexeddb/idb');
			addIndexedTag(tag);
		} catch {
			// ignore caching errors
		}
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
