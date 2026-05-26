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

const executeSearch = async (operation: () => Promise<void>) => {
	const $results = get(resultsStore);
	try {
		$results.loading = true;
		$results.error = undefined;
		const pid = $results.pageCount;
		await operation();
		logSearch(pid).catch(() => {});
	} catch (_) {
		switchApiUrl();
		try {
			const pid = $results.pageCount;
			await operation();
			logSearch(pid).catch(() => {});
		} catch (error) {
			$results.error = error instanceof Error ? error : new Error(String(error));
		}
	} finally {
		$results.loading = false;
		$results.requested = true;
	}
};

export const getFirstPage = async () => {
	resultsStore.reset();
	executeSearch(async () => {
		const [page, count] = await createDefaultSearch().getPageAndCount();
		resultsStore.addPage(page, count);
	});
};

export const getPage = async (pid: number) => {
	resultsStore.resetPosts();
	executeSearch(async () => {
		const page = await createDefaultSearch().withPid(pid).getPage();
		resultsStore.setPage(page, pid);
	});
};

export const getNextPage = async () => {
	executeSearch(async () => {
		const page = await createDefaultSearch().getPage();
		resultsStore.addPage(page);
	});
};
