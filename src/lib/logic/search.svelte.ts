import { SearchBuilder } from './search-builder';
import { logSearch } from './firebase/analytics';
import {
	activeSupertags,
	activeTags,
	addPage,
	apiKey,
	blockedContent,
	filter,
	results,
	setFirstPage,
	setPage,
	sort,
	userId
} from '$lib/store';
import { ID_RESULT_HEADER } from './well-known-ids';
import { ApiError } from './api-client/tags/ApiError';

export const createDefaultSearch = () => {
	return new SearchBuilder()
		.withApiKey(apiKey.value)
		.withUserId(userId.value)
		.withPid(results.value.pageCount)
		.withBlockedContent(blockedContent.value)
		.withSortProperty(sort.value.property)
		.withSortDirection(sort.value.direction)
		.withScoreValue(filter.value.scoreValue)
		.withScoreComparator(filter.value.scoreComparator)
		.withRating(filter.value.rating)
		.withTags(activeTags.value)
		.withSupertags(activeSupertags.value);
};

const executeSearch = async (operation: () => Promise<void>) => {
	results.value.loading = true;
	results.value.error = undefined;
	try {
		const pid = results.value.pageCount;
		await operation();
		logSearch(pid).catch(() => {});
	} catch (error) {
		console.log(error);
		results.value.error = error as Error;
	} finally {
		results.value.loading = false;
	}
};

export const getFirstPage = async () => {
	results.reset();
	return executeSearch(async () => {
		const [page, count] = await createDefaultSearch().getPageAndCount();
		setFirstPage(results.value, page, count);
	});
};

export const getNextPage = async () => {
	return executeSearch(async () => {
		try {
			const page = await createDefaultSearch().getPage();
			addPage(results.value, page);
		} catch (err) {
			if (err instanceof ApiError && err.name === 'not-found') {
				results.value.hasLastPage = true;
			}
		}
	});
};

export const jumpToPage = async (pid: number) => {
	document.getElementById(ID_RESULT_HEADER)?.scrollIntoView();
	return executeSearch(async () => {
		const page = await createDefaultSearch().withPid(pid).getPage();
		setPage(results.value, page, pid);
	});
};
