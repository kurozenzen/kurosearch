import { getAnalytics, logEvent } from 'firebase/analytics';

export const logSearch = async (pageNumber: number) =>
	logEvent(getAnalytics(), 'r34_search', {
		page_number: pageNumber
	});
