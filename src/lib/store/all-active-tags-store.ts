import { derived } from 'svelte/store';
import activeTags from './active-tags-store';
import activeSupertags from './active-supertags-store';

/**
 * Derived store that combines active tags and active supertags into a single array.
 * This prevents unnecessary array concatenations on every component render.
 */
export const allActiveTags = derived(
	[activeTags, activeSupertags],
	([$activeTags, $activeSupertags]) => [...$activeTags, ...$activeSupertags]
);
