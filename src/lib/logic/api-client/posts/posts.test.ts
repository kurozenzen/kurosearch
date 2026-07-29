import { afterEach, describe, expect, it } from 'vitest';
import { getPage, getPostsUrl } from './posts';
import { apiUrl } from '../url';

const originalFetch = global.fetch;

describe('posts', () => {
	afterEach(() => {
		global.fetch = originalFetch;
	});

	describe('getPage', () => {
		it('response not ok throws Error', () => {
			//@ts-expect-error
			global.fetch = vi.fn(() => Promise.resolve({ ok: false }));
			getPage(0, '').catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('empty response return []', () => {
			//@ts-expect-error
			global.fetch = vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve(null) }));
			getPage(0, '').catch((e) => expect(e).toBeInstanceOf(Error));
		});
	});

	describe('getPostsUrl', () => {
		it('does not include tags when they are empty', () => {
			expect(getPostsUrl(0, '', '', '')).toBe(
				`${apiUrl()}/posts?limit=20&pid=0`
			);
		});

		it('includes tags when they are not empty', () => {
			expect(getPostsUrl(0, 'example', '', '')).toBe(
				`${apiUrl()}/posts?limit=20&pid=0&tags=example`
			);
		});
	});
});
