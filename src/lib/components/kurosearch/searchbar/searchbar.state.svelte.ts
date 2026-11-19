import { nextModifier } from '$lib/logic/modifier-utils';
import { serializeTagName } from '$lib/logic/tag-serialization';

export class SearchBarState {
	#searchTerm: string;
	#previousSearchTerm: string;
	#suggestionPromise: Promise<kurosearch.Suggestion[]> | undefined;
	#suggestions: kurosearch.Suggestion[];
	#modifier: kurosearch.TagModifier;
	#selectedSuggestionIndex: number;
	#fetchSuggestions: (value: string) => Promise<kurosearch.Suggestion[]>;

	constructor(fetchSuggestions: (value: string) => Promise<kurosearch.Suggestion[]>) {
		this.#searchTerm = $state('');
		this.#previousSearchTerm = $state('');
		this.#suggestionPromise = $state(undefined);
		this.#suggestions = $state([]);
		this.#modifier = $state('+');
		this.#selectedSuggestionIndex = $state(0);
		this.#fetchSuggestions = fetchSuggestions;
	}

	get searchTerm() {
		return this.#searchTerm;
	}
	set searchTerm(value: string) {
		this.#searchTerm = value;
	}
	get previousSearchTerm() {
		return this.#previousSearchTerm;
	}
	set previousSearchTerm(value: string) {
		this.#previousSearchTerm = value;
	}
	get suggestionPromise() {
		return this.#suggestionPromise;
	}
	set suggestionPromise(value: Promise<kurosearch.Suggestion[]> | undefined) {
		this.#suggestionPromise = value;
	}
	get suggestions() {
		return this.#suggestions;
	}
	set suggestions(value: kurosearch.Suggestion[]) {
		this.#suggestions = value;
	}
	get modifier() {
		return this.#modifier;
	}
	set modifier(value: kurosearch.TagModifier) {
		this.#modifier = value;
	}
	get selectedSuggestionIndex() {
		return this.#selectedSuggestionIndex;
	}
	set selectedSuggestionIndex(value: number) {
		this.#selectedSuggestionIndex = value;
	}

	reset() {
		this.#searchTerm = '';
		this.#previousSearchTerm = '';
		this.#suggestionPromise = undefined;
		this.#suggestions = [];
		this.#selectedSuggestionIndex = 0;
	}

	rotateModifier() {
		this.#modifier = nextModifier(this.#modifier);
	}

	selectNextSuggestion() {
		this.#selectedSuggestionIndex = (this.#selectedSuggestionIndex + 1) % this.#suggestions.length;
	}

	selectPrevSuggestion() {
		this.#selectedSuggestionIndex =
			(this.#selectedSuggestionIndex + this.#suggestions.length - 1) % this.#suggestions.length;
	}

	async search() {
		if (this.#searchTerm === '') {
			this.#suggestionPromise = undefined;
			this.#suggestions = [];
		} else if (this.#searchTerm !== this.#previousSearchTerm) {
			this.#suggestionPromise = this.#fetchSuggestions(this.#searchTerm);
			this.#suggestionPromise
				.then((x) => {
					this.#suggestions = x;
				})
				.catch(() => {});
			this.#selectedSuggestionIndex = 0;
		}
		this.#previousSearchTerm = this.#searchTerm;
	}

	getSuggestions(): kurosearch.Suggestion[] {
		if (this.#searchTerm === '') {
			return [];
		}

		if (this.#suggestions.length > this.#selectedSuggestionIndex) {
			return [this.#suggestions[this.#selectedSuggestionIndex]];
		}

		return this.#searchTerm
			.split(';')
			.map(serializeTagName)
			.map((name) => ({
				type: 'tag' as kurosearch.TagType,
				label: name,
				count: 0
			}));
	}
}
