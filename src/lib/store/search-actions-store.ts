import { writable } from 'svelte/store';

/**
 * Actions that can be triggered to control search behavior.
 * Used to avoid prop drilling callbacks through multiple component layers.
 */
export interface SearchActions {
	/**
	 * Refresh the search by fetching the first page with current filters/sort.
	 * Typically called after sort or filter changes.
	 */
	refreshSearch: () => void;
}

const defaultActions: SearchActions = {
	refreshSearch: () => {
		console.warn('searchActions.refreshSearch called before being initialized');
	}
};

export const searchActions = writable<SearchActions>(defaultActions);
