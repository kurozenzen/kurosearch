import { isValidUrl } from '../url-utils';

export const getSourcesForPost = (post: kurosearch.Post) => [
	new URL(`${window.location.origin}/post?id=${post.id}`),
	new URL(`https://rule34.xxx/index.php?page=post&s=view&id=${post.id}`),
	new URL(post.file_url),
	...(post.source
		? post.source
				.split(' ')
				.filter((x) => isValidUrl(x))
				.map((x) => new URL(x))
		: [])
];
