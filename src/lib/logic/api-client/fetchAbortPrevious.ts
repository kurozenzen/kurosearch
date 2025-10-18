import { isValidUrl } from '../url-utils';

export const fetchAbortPrevious = (
	url: string,
	abortController: AbortController | null
): Promise<Response> => {
	if (!isValidUrl(url)) {
		throw new TypeError('Invalid URL passed to fetchAbortPrevious');
	}

	if (!isValidAbortController(abortController)) {
		throw new TypeError('Invalid AbortController passed to fetchAbortPrevious');
	}

	if (abortController) {
		abortController.abort();
	}

	const newController = new AbortController();

	return fetch(url, {
		signal: newController.signal
	});
};

const isValidAbortController = (value: unknown) => {
	return value === null || value instanceof AbortController;
};
