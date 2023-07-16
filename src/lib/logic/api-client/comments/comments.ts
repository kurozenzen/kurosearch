export type Comment = {
	author: string;
	createdAt: string;
	content: string;
};

const baseUrl = 'https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1';

export const getComments = async (postId: number | undefined = undefined) => {
	if (typeof postId !== 'number' && postId !== undefined) {
		throw new TypeError('Invalid postId');
	}

	const url = new URL(baseUrl);
	if (postId !== undefined) {
		url.searchParams.append('post_id', String(postId));
	}

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Failed to get tag suggestions');
	}

	const text = await response.text();
	const parser = new DOMParser();
	const xml = parser.parseFromString(text, 'text/xml');

	const comments: Comment[] = [];
	for (const comment of xml.getElementsByTagName('comment')) {
		comments.push(parseComment(comment.attributes));
	}

	return comments;
};

const parseComment = (comment: NamedNodeMap): Comment => {
	const creator = comment.getNamedItem('creator');
	const createdAt = comment.getNamedItem('created_at');
	const body = comment.getNamedItem('body');

	if (creator == null || createdAt == null || body == null) {
		throw new Error(
			`Failed to parse comment, attribute was null. ${creator}, ${createdAt}, ${body}`
		);
	}

	return {
		author: creator.value,
		createdAt: createdAt.value,
		content: body.value
	};
};
