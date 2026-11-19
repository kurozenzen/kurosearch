import {
	activeSupertags,
	activeTags,
	createTagFromName,
	supertags
} from '$lib/store';
import { addOrReplace } from './array-ops';
import { getTagSuggestions } from './api-client/ApiClient';

export const fetchCombinedSuggestions = async (term: string) => {
	const matchingTags = getTagSuggestions(term);
	const matchingSupertags = supertags.value
		.filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()))
		.map((supertag) => ({
			label: supertag.name,
			count: supertag.tags.length,
			type: 'supertag' as kurosearch.TagType
		}));

	return [...matchingSupertags, ...(await matchingTags)];
};

export const activateSuggestion = async (
	suggestion: kurosearch.Suggestion,
	modifier: kurosearch.TagModifier
) => {
	if (suggestion.type === 'supertag') {
		const supertag = supertags.value.find((x) => x.name === suggestion.label);
		if (!supertag) {
			console.warn('Supertag not present.');
			return;
		}
		addOrReplace(activeSupertags.value, supertag);
	} else {
		let tag = await createTagFromName(suggestion.label, modifier);
		addOrReplace(activeTags.value, tag);
	}
};
