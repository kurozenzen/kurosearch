const coinFlip = Math.random() > 0.5;
export const API_URL = coinFlip
	? "https://rule34-api.netlify.app"
	: "https://rule34-api-shiro.netlify.app";
export const R34_API_URL = `https://api.rule34.xxx/index.php?page=dapi`;
