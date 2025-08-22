import { addIndexedTag } from '$lib/indexeddb/idb';
import { replaceHtmlEntities } from '$lib/logic/replace-html-entities';
import { getTagTypePriority } from '$lib/logic/tag-type-data';
import { fetchAbortPrevious } from '../fetchAbortPrevious';
import { API_URL, R34_API_URL } from '../url';

const postCache = new Map<number, kurosearch.Post>();

export const PAGE_SIZE = 20;

let getPageAbortController: AbortController | null = null;

export const getPage = async (
	pageNumber: number,
	tags: string,
	apiKey: string = '',
	userId: string = ''
) => {
	const url = getPostsUrl(pageNumber, tags, apiKey, userId);
	const response = await fetchAbortPrevious(url, getPageAbortController);
	throwOnUnexpectedStatus(response);

	try {
		let data = await response.json();
		data = data.filter((x: r34.Post) => x.change); // sometimes api returns placeholders that cause lots of null issues

		const posts = data.map(parsePost) as kurosearch.Post[];

		posts.forEach((post) => {
			postCache.set(post.id, post);
			post.tags.forEach((tag) => {
				addIndexedTag(tag);
			});
		});

		return posts;
	} catch (error) {
		console.warn('Failed to get posts', error);
		return [];
	}
};

export const getCount = async (tags: string, apiKey: string = '', userId: string = '') => {
	const response = await fetchAbortPrevious(
		getCountUrl(tags, apiKey, userId),
		getPageAbortController
	);

	throwOnUnexpectedStatus(response);

	const text = await response.text();
	const parser = new DOMParser();
	const xml = parser.parseFromString(text, 'text/xml');
	const count = Number(xml.getElementsByTagName('posts')[0].getAttribute('count'));

	throwOnInvalidCount(count);

	return count;
};

export const getPost = async (id: number, apiKey: string = '', userId: string = '') => {
	if (!postCache.has(id)) {
		let url = '';
		if (userId && apiKey) {
			url = `${R34_API_URL}&s=post&q=index&fields=tag_info&json=1&id=${id}&api_key=${apiKey}&user_id=${userId}`;
		} else {
			url = `${API_URL}/post?id=${id}`;
		}
		const response = await fetch(url);
		throwOnUnexpectedStatus(response);
		const data = await response.json();
		const post = parsePost(data[0]);
		postCache.set(post.id, post);
	}

	const post = postCache.get(id);

	if (post === undefined) {
		throw new Error('Post cannot be undefined');
	}

	return post;
};

const throwOnUnexpectedStatus = (response: Response) => {
	if (!response.ok) {
		throw new Error(`getPage failed with http status ${response.status}`);
	}
};

const parsePost = (post: r34.Post): kurosearch.Post => {
	const height = post.height;
	const score = post.score;
	const preview_url = post.preview_url;
	const file_url = post.file_url;
	const parent_id = post.parent_id;
	const sample_url = post.sample_url;
	const sample_width = post.sample_width;
	const sample_height = post.sample_height;
	const rating = post.rating;
	const tagInfo = post.tag_info;
	const tags = post.tags;
	const id = post.id;
	const width = post.width;
	const change = post.change;
	const comment_count = post.comment_count;
	const status = post.status;
	const source = post.source;

	return {
		preview_url,
		sample_url,
		file_url,
		comment_count: Number(comment_count),
		height: Number(height),
		id: Number(id),
		change: Number(change) * 1000,
		parent_id: parent_id ? Number(parent_id) : undefined,
		rating: rating as kurosearch.Rating,
		sample_height: Number(sample_height),
		sample_width: Number(sample_width),
		score: Number(score),
		source,
		status,
		tags: tagInfo ? parseTagInfo(tagInfo) : parseSimpleTags(tags),
		width: Number(width),
		type: parsePostType(file_url)
	};
};

const parseTagInfo = (tagInfo: r34.Tag[]): kurosearch.Tag[] => {
	return tagInfo.map(parseTag).sort(byDescendingPriority);
};

const parseSimpleTags = (tags: string): kurosearch.Tag[] => {
	return tags.split(' ').map(parseSimpleTag);
};

const parseTag = ({ tag, count, type }: r34.Tag): kurosearch.Tag => ({
	name: replaceHtmlEntities(tag),
	count,
	type
});

const parseSimpleTag = (name: string): kurosearch.Tag => ({
	name: replaceHtmlEntities(name),
	count: 0,
	type: 'ambiguous'
});

const byDescendingPriority = (a: kurosearch.Tag, b: kurosearch.Tag) =>
	getTagTypePriority(a.type) - getTagTypePriority(b.type);

export const getPostsUrl = (
	pageNumber: number,
	serializedTags: string,
	apiKey: string,
	userId: string
) => {
	let url = '';
	if (userId && apiKey) {
		url = `${R34_API_URL}&s=post&q=index&fields=tag_info&json=1&api_key=${apiKey}&user_id=${userId}&limit=${PAGE_SIZE}&pid=${pageNumber}`;
	} else {
		url = `${API_URL}/posts?limit=${PAGE_SIZE}&pid=${pageNumber}`;
	}
	return serializedTags === '' ? url : `${url}&tags=${serializedTags}`;
};

export const getCountUrl = (serializedTags: string, apiKey: string, userId: string) => {
	let url = '';
	if (userId && apiKey) {
		url = `${R34_API_URL}&s=post&q=index&limit=0&api_key=${apiKey}&user_id=${userId}`;
	} else {
		url = `${API_URL}/count`;
	}
	return serializedTags === '' ? url : `${url}?tags=${serializedTags}`;
};

const throwOnInvalidCount = (count: unknown) => {
	if (typeof count !== 'number') {
		throw new Error('Unexpected response received in getPage');
	}
};

const parsePostType = (file_url: string): kurosearch.PostType => {
	return file_url.endsWith('.webm') || file_url.endsWith('.mp4')
		? 'video'
		: file_url.includes('.gif')
			? 'gif'
			: 'image';
};
