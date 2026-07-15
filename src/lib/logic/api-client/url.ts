import { browser } from "$app/environment";

export const API_URLS = [
	'https://rule34-api.netlify.app',
	'https://rule-34-api-vercel.vercel.app'
];
export const R34_API_URL = `https://api.rule34.xxx/index.php?page=dapi`;

let currentUrlIndex = browser ? Number(sessionStorage.getItem('kurosearch:api-index') ?? '0') : 0;

export const apiUrl = () => {
	return API_URLS[currentUrlIndex];
};

export const switchApiUrl = () => {
	currentUrlIndex = (currentUrlIndex + 1) % API_URLS.length;
	sessionStorage.setItem('kurosearch:api-index', currentUrlIndex.toString());
	console.warn(`Switched API URL to ${apiUrl()}`);
};

/**
 * Only for debugging. Cycles through API URLs in a loop.
 */
export const cycleApiUrl = () => {
	currentUrlIndex = (currentUrlIndex + 1) % API_URLS.length;
	sessionStorage.setItem('kurosearch:api-index', currentUrlIndex.toString());
	console.warn(`Switched API URL to ${apiUrl()}`);
};
