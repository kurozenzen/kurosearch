export const isValidUrl = (value: string) => {
	try {
		new URL(value);
		return true;
	} catch {
		return false;
	}
};

export const replaceHost = (urlString: string, hostname: string) => {
	if (hostname === 'automatic') {
		return urlString;
	}

	try {
		const url = new URL(urlString);
		url.hostname = hostname;
		return url.toString();
	} catch {
		return urlString;
	}
};
