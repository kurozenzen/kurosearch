export const API_URLS = ['https://rule34-api.netlify.app', 'https://rule-34-api-vercel.vercel.app'];
export const R34_API_URL = `https://api.rule34.xxx/index.php?page=dapi`;

let currentUrlIndex = 0;

export const apiUrl = () => {
	return API_URLS[currentUrlIndex];
};

export const switchApiUrl = () => {
	currentUrlIndex = Math.min(currentUrlIndex + 1, API_URLS.length - 1);
	console.warn(`Switched API URL to ${apiUrl()}`);
};
