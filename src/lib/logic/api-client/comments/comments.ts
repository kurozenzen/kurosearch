import { addIndexedComments, getIndexedComments } from '$lib/indexeddb/idb';
import { parseXml } from '$lib/logic/parse-utils';

export type Comment = {
	author: string;
	createdAt: string;
	content: string;
};

// Request deduplication cache: Maps postId to in-flight request Promise
const inflightRequests = new Map<number, Promise<Comment[]>>();

export const getComments = async (postId: number, apiKey: string = '', userId: string = '') => {
	if (typeof postId !== 'number') {
		throw new TypeError('Invalid postId');
	}

	// Check IndexedDB cache first
	const indexedComments = await getIndexedComments(postId);
	if (indexedComments !== undefined) {
		return indexedComments;
	}

	// Check if there's already an in-flight request for this post
	const existingRequest = inflightRequests.get(postId);
	if (existingRequest) {
		return existingRequest;
	}

	// Create and cache the request promise
	const requestPromise = (async () => {
		try {
			const API_ENDPOINT = '/api/comments';
			const url = new URL(
				`${API_ENDPOINT}`,
				typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
			);
			url.searchParams.append('post_id', String(postId));
			if (userId && apiKey) {
				url.searchParams.append('api_key', apiKey);
				url.searchParams.append('user_id', userId);
			}

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Failed to get comments');
			}

			const text = await response.text();
			const xml = parseXml(text);

			const comments: Comment[] = [];
			for (const comment of xml.getElementsByTagName('comment')) {
				comments.push(parseComment(comment.attributes));
			}
			addIndexedComments(postId, comments);

			return comments;
		} finally {
			// Remove from inflight cache once complete (success or error)
			inflightRequests.delete(postId);
		}
	})();

	// Store the promise in the inflight cache
	inflightRequests.set(postId, requestPromise);

	return requestPromise;
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
