import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mockFetch, makeResponse } from '../../../../../setup/mocks/fetch';

// Ensure predictable origin for URL building
const setOrigin = (origin: string) => {
	Object.defineProperty(window, 'location', {
		value: new URL(origin),
		writable: true
	});
};

// Import SUT
import {
	getPage,
	getPost,
	getCount,
	getPostsUrl,
	getCountUrl,
	PAGE_SIZE
} from '$lib/logic/api-client/posts/posts';

const delay = (ms = 10) => new Promise((r) => setTimeout(r, ms));

const clearStores = async () => {
	await new Promise<void>((resolve, reject) => {
		const req = indexedDB.open('kurosearch', 4);
		req.addEventListener('success', (e) => {
			const db = (e.target as IDBOpenDBRequest).result;
			const tx = db.transaction(['comments', 'posts', 'tags'], 'readwrite');
			tx.objectStore('comments').clear();
			tx.objectStore('posts').clear();
			tx.objectStore('tags').clear();
			tx.addEventListener('complete', () => resolve());
			tx.addEventListener('error', (err) => reject(err));
			tx.addEventListener('abort', (err) => reject(err));
		});
		req.addEventListener('error', (e) => reject(e));
	});
};

const originalFetch = global.fetch as any;

describe('api-client/posts', () => {
	beforeEach(async () => {
		setOrigin('http://localhost:3000/');
		await delay(20);
		await clearStores();
	});

	afterEach(() => {
		global.fetch = originalFetch;
		vi.restoreAllMocks();
		vi.resetModules();
	});

	describe('getPostsUrl/getCountUrl', () => {
		it('builds urls with and without tags', () => {
			expect(getPostsUrl(1, '')).toBe(
				`http://localhost:3000/api/posts?fields=tag_info&limit=${PAGE_SIZE}&pid=1`
			);
			expect(getPostsUrl(2, 'a_b')).toBe(
				`http://localhost:3000/api/posts?fields=tag_info&limit=${PAGE_SIZE}&pid=2&tags=a_b`
			);

			expect(getCountUrl('', '', '')).toBe(`http://localhost:3000/api/posts?limit=0`);
			expect(getCountUrl('abc', '', '')).toBe(`http://localhost:3000/api/posts?limit=0&tags=abc`);
		});

		it('includes api_key and user_id when provided', () => {
			const u1 = getPostsUrl(3, 't', 'key123', 'user456');
			expect(u1).toContain('api_key=key123');
			expect(u1).toContain('user_id=user456');
			const u2 = getCountUrl('x', 'k', 'u');
			expect(u2).toContain('api_key=k');
			expect(u2).toContain('user_id=u');
		});

		it('does not include credentials when only one is provided', () => {
			const up1 = getPostsUrl(0, '', 'keyOnly', '');
			expect(up1).not.toContain('api_key=');
			expect(up1).not.toContain('user_id=');
			const up2 = getPostsUrl(0, '', '', 'userOnly');
			expect(up2).not.toContain('api_key=');
			expect(up2).not.toContain('user_id=');
			const uc1 = getCountUrl('', 'keyOnly', '');
			expect(uc1).not.toContain('api_key=');
			expect(uc1).not.toContain('user_id=');
			const uc2 = getCountUrl('', '', 'userOnly');
			expect(uc2).not.toContain('api_key=');
			expect(uc2).not.toContain('user_id=');
		});

		it('uses localhost base when window is undefined', () => {
			const orig = (globalThis as any).window;
			vi.stubGlobal('window', undefined as any);
			try {
				const u1 = getPostsUrl(0, '');
				expect(u1.startsWith('http://localhost/api/posts')).toBe(true);
				const u2 = getCountUrl('', '', '');
				expect(u2.startsWith('http://localhost/api/posts')).toBe(true);
			} finally {
				// restore
				// @ts-ignore
				(globalThis as any).window = orig;
			}
		});
	});

	describe('getPage', () => {
		it('maps valid posts and writes to cache', async () => {
			const payload: any[] = [
				// placeholder item that should be filtered out due to falsy change
				{ change: 0 },
				{
					height: '100',
					width: '200',
					preview_url: 'prev.jpg',
					file_url: 'video.webm',
					parent_id: null,
					sample_url: 'sample.jpg',
					sample_width: '100',
					sample_height: '100',
					rating: 'safe',
					tag_info: [
						{ tag: 'artist_one', count: 10, type: 'artist' },
						{ tag: 'general_tag', count: 1, type: 'general' }
					],
					tags: 'ignored',
					id: '1',
					change: '1700000000',
					comment_count: '5',
					score: '3',
					status: 'active',
					source: ''
				},
				{
					height: '10',
					width: '20',
					preview_url: 'prev2.jpg',
					file_url: 'anim.gif',
					parent_id: '5',
					sample_url: 'sample2.jpg',
					sample_width: '10',
					sample_height: '10',
					rating: 'questionable',
					tag_info: undefined,
					tags: 'tag1 tag2',
					id: '2',
					change: '1700000001',
					comment_count: '0',
					score: '0',
					status: 'active',
					source: ''
				},
				{
					height: '1',
					width: '2',
					preview_url: 'prev3.jpg',
					file_url: 'image.png',
					parent_id: null,
					sample_url: 'sample3.jpg',
					sample_width: '1',
					sample_height: '1',
					rating: 'explicit',
					tag_info: undefined,
					tags: 'tag3',
					id: '3',
					change: '1700000002',
					comment_count: '1',
					score: '2',
					status: 'active',
					source: ''
				},
				{
					height: '50',
					width: '60',
					preview_url: 'prev4.jpg',
					file_url: 'clip.mp4',
					parent_id: null,
					sample_url: 'sample4.jpg',
					sample_width: '50',
					sample_height: '60',
					rating: 'safe',
					tag_info: undefined,
					tags: 't4',
					id: '4',
					change: '1700000003',
					comment_count: '0',
					score: '1',
					status: 'active',
					source: ''
				}
			];

			mockFetch(async () => makeResponse({ json: payload }));
			const res = await getPage(0, '');
			expect(res).toHaveLength(4);
			expect(res[0]).toMatchObject({ id: 1, type: 'video' });
			expect(res[1]).toMatchObject({ id: 2, type: 'gif', parent_id: 5 });
			expect(res[2]).toMatchObject({ id: 3, type: 'image' });
			expect(res[3]).toMatchObject({ id: 4, type: 'video' });
			// tag_info parsed and sorted so that artist comes before general
			expect(res[0].tags[0].name).toBe('artist_one');
		});

		it('non-ok response rejects', async () => {
			mockFetch(async () => new Response('nope', { status: 500 }));
			await expect(getPage(0, '')).rejects.toBeInstanceOf(Error);
		});
	});

	describe('getCount', () => {
		it('returns parsed count from xml', async () => {
			mockFetch(async () => makeResponse({ text: '<posts count="42"></posts>' }));
			const count = await getCount('');
			expect(count).toBe(42);
		});

		it('returns 0 on non-ok response', async () => {
			mockFetch(async () => new Response('nope', { status: 503 }));
			const count = await getCount('');
			expect(count).toBe(0);
		});

		it('returns 0 when count is invalid (NaN)', async () => {
			mockFetch(async () => makeResponse({ text: '<posts count="oops"></posts>' }));
			const count = await getCount('');
			expect(count).toBe(0);
		});
	});

	describe('getPost', () => {
		it('fetches post and caches it; subsequent call uses cache', async () => {
			const payload = [
				{
					height: '100',
					width: '200',
					preview_url: 'prev.jpg',
					file_url: 'image.png',
					parent_id: null,
					sample_url: 'sample.jpg',
					sample_width: '100',
					sample_height: '100',
					rating: 'safe',
					tag_info: undefined,
					tags: 'a b',
					id: '99',
					change: '1700001234',
					comment_count: '0',
					score: '0',
					status: 'active',
					source: ''
				}
			];

			const spy = mockFetch(async () => makeResponse({ json: payload }));
			const p1 = await getPost(99);
			expect(p1).toMatchObject({ id: 99, type: 'image' });
			expect(spy).toHaveBeenCalledTimes(1);

			// Second call should hit the mocked idb cache (from addIndexedPost) and not call fetch
			const p2 = await getPost(99);
			expect(p2).toMatchObject({ id: 99 });
			expect(spy).toHaveBeenCalledTimes(1);
		});

		it('includes api_key and user_id in request when provided', async () => {
			const payload = [
				{
					height: '1',
					width: '1',
					preview_url: 'p.jpg',
					file_url: 'i.png',
					parent_id: null,
					sample_url: 's.jpg',
					sample_width: '1',
					sample_height: '1',
					rating: 'safe',
					tag_info: undefined,
					tags: '',
					id: '101',
					change: '1700000000',
					comment_count: '0',
					score: '0',
					status: 'active',
					source: ''
				}
			];
			const spy = mockFetch(async (input) => {
				const url = String(input);
				expect(url).toContain('api_key=ak');
				expect(url).toContain('user_id=ui');
				return makeResponse({ json: payload });
			});
			const p = await getPost(101, 'ak', 'ui');
			expect(p.id).toBe(101);
			expect(spy).toHaveBeenCalledOnce();
		});

		it('rejects when response is not ok', async () => {
			mockFetch(async () => new Response('nope', { status: 404 }));
			await expect(getPost(777)).rejects.toBeInstanceOf(Error);
		});

		it('uses localhost base when window is undefined', async () => {
			const payload = [
				{
					height: '1',
					width: '1',
					preview_url: 'p.jpg',
					file_url: 'i.png',
					parent_id: null,
					sample_url: 's.jpg',
					sample_width: '1',
					sample_height: '1',
					rating: 'safe',
					tag_info: undefined,
					tags: '',
					id: '202',
					change: '1700000000',
					comment_count: '0',
					score: '0',
					status: 'active',
					source: ''
				}
			];
			const orig = (globalThis as any).window;
			vi.stubGlobal('window', undefined as any);
			try {
				const spy = mockFetch(async (input) => {
					const url = String(input);
					expect(url.startsWith('http://localhost/api/posts?fields=tag_info&id=202')).toBe(true);
					return makeResponse({ json: payload });
				});
				const p = await getPost(202);
				expect(p.id).toBe(202);
				expect(spy).toHaveBeenCalledOnce();
			} finally {
				// @ts-ignore
				(globalThis as any).window = orig;
			}
		});
	});
});
