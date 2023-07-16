import { getAnalytics, logEvent } from 'firebase/analytics';

export const logSearch = async (pageNumber: number) =>
	logEvent(getAnalytics(), 'r34_search', {
		page_number: pageNumber
	});

export const logFirestoreRead = async () =>
	logEvent(getAnalytics(), 'firestore_read', {
		site: document.title || 'kurosearch_v3'
	});

export const logFirestoreWrite = async () =>
	logEvent(getAnalytics(), 'firestore_write', {
		site: document.title || 'kurosearch_v3'
	});
