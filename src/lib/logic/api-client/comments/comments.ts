import { addIndexedComments, getIndexedComments } from '$lib/indexeddb/idb';
import { API_URL, R34_API_URL } from '../url';

export type Comment = {
	author: string;
	createdAt: string;
	content: string;
};

export const getComments = async (postId: number, apiKey: string = '', userId: string = '') => {
	if (typeof postId !== 'number') {
		throw new TypeError('Invalid postId');
	}

	const indexedComments = await getIndexedComments(postId);
	if (indexedComments !== undefined) {
		return indexedComments;
	}

	let url: URL;
	if (userId && apiKey) {
		url = new URL(`${R34_API_URL}&s=comment&q=index&json=1&api_key=${apiKey}&user_id=${userId}`);
	} else {
		url = new URL(`${API_URL}/comments`);
	}
	url.searchParams.append('post_id', String(postId));

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
	addIndexedComments(postId, comments);

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
