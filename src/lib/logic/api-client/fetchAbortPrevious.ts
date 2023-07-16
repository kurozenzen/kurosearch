import { isValidUrl } from '../url-utils';

export const fetchAbortPrevious = (url: string, abortController: AbortController | null) => {
	if (!isValidUrl(url)) {
		throw new TypeError('Invalid URL passed to fetchAbortPrevious');
	}

	if (!isValidAbortController(abortController)) {
		throw new TypeError('Invalid AbortController passed to fetchAbortPrevious');
	}

	if (abortController) {
		abortController.abort();
	}

	abortController = new AbortController();

	return fetch(url, {
		signal: abortController.signal
	});
};

const isValidAbortController = (value: unknown) => {
	return value === null || value instanceof AbortController;
};
