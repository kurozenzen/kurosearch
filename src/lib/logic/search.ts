import { get } from 'svelte/store';
import { SearchBuilder } from './search-builder';
import apiKeyStore from '$lib/store/api-key-store';
import userIdStore from '$lib/store/user-id-store';
import resultsStore from '$lib/store/results-store';
import activeTagsStore from '$lib/store/active-tags-store';
import blockedContentStore from '$lib/store/blocked-content-store';
import sortStore from '$lib/store/sort-store';
import filterStore from '$lib/store/filter-store';
import activeSupertagsStore from '$lib/store/active-supertags-store';
import { switchApiUrl } from './api-client/url';
import { logSearch } from './firebase/analytics';

let activeSearchId = 0;

const createDefaultSearch = () => {
	const $apiKey = get(apiKeyStore);
	const $userId = get(userIdStore);
	const $results = get(resultsStore);
	const $activeTags = get(activeTagsStore);
	const $blockedContent = get(blockedContentStore);
	const $sort = get(sortStore);
	const $filter = get(filterStore);
	const $activeSupertags = get(activeSupertagsStore);

	return new SearchBuilder()
		.withApiKey($apiKey)
		.withUserId($userId)
		.withPid($results.pageCount)
		.withTags($activeTags)
		.withBlockedContent($blockedContent)
		.withSortProperty($sort.property)
		.withSortDirection($sort.direction)
		.withScoreValue($filter.scoreValue)
		.withScoreComparator($filter.scoreComparator)
		.withRating($filter.rating)
		.withSupertags($activeSupertags);
};

const executeSearch = async (
	operation: () => Promise<() => void>,
	force: boolean = false
) => {
	const searchId = ++activeSearchId;
	const $results = get(resultsStore);

	if (!force && $results.loading) return;

	resultsStore.setLoading(true);
	resultsStore.setError(undefined);

	const pid = $results.pageCount;

	const applyIfCurrent = (commit: () => void) => {
		if (searchId === activeSearchId) {
			commit();
		}
	};

	try {
		const commit = await operation();
		applyIfCurrent(commit);
		logSearch(pid).catch(() => {});
	} catch (_) {
		switchApiUrl();
		try {
			const commit = await operation();
			applyIfCurrent(commit);
			logSearch(pid).catch(() => {});
		} catch (error) {
			applyIfCurrent(() =>
				resultsStore.setError(error instanceof Error ? error : new Error(String(error)))
			);
		}
	} finally {
		if (searchId === activeSearchId) {
			resultsStore.setLoading(false);
		}
	}
};

export const getFirstPage = async () => {
	resultsStore.reset();
	executeSearch(async () => {
		const [page, count] = await createDefaultSearch().withPid(0).getPageAndCount();
		return () => resultsStore.addPage(page, count);
	}, true);
};

export const getPage = async (pid: number) => {
	resultsStore.resetPosts();
	executeSearch(async () => {
		const page = await createDefaultSearch().withPid(pid).getPage();
		return () => resultsStore.setPage(page, pid);
	}, true);
};

export const getNextPage = async () => {
	executeSearch(async () => {
		const page = await createDefaultSearch().getPage();
		return () => resultsStore.addPage(page);
	}, false);
};
