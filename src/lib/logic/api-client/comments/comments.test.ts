import { afterEach, describe, expect, it, vi } from 'vitest';
import { getComments } from './comments';

const COMMENT_XML =
	'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" body="comment" creator="kurozenzen" id="2" creator_id="1"/></comments>';

const mockFetch = (response: object) =>
	vi.stubGlobal(
		'fetch',
		vi.fn(() => Promise.resolve(response))
	);

describe('pages', () => {
	describe('getComments', () => {
		afterEach(() => {
			vi.unstubAllGlobals();
		});

		it('invalid postId throws TypeError', () => {
			// @ts-expect-error
			return getComments('a').catch((e) => expect(e).toBeInstanceOf(TypeError));
		});

		it('response not ok throws Error', () => {
			mockFetch({ ok: false });
			getComments(0).catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('missing created_at throws error', async () => {
			mockFetch({
				ok: true,
				text: () =>
					Promise.resolve(
						'<comments type="array"><comment post_id="3" body="comment" creator="kurozenzen" id="2" creator_id="1"/></comments>'
					)
			});
			getComments(0).catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('missing body throws error', async () => {
			mockFetch({
				ok: true,
				text: () =>
					Promise.resolve(
						'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" creator="kurozenzen" id="2" creator_id="1"/></comments>'
					)
			});
			getComments(0).catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('missing creator throws error', async () => {
			mockFetch({
				ok: true,
				text: () =>
					Promise.resolve(
						'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" body="comment" id="2" creator_id="1"/></comments>'
					)
			});
			getComments(0).catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('parses comments with postId', async () => {
			mockFetch({
				ok: true,
				text: () => Promise.resolve(COMMENT_XML)
			});

			const comments = await getComments(0);
			expect(comments.length).toBe(1);
			expect(comments[0]).toEqual({
				author: 'kurozenzen',
				createdAt: '2023-01-01 10:20',
				content: 'comment'
			});
		});

		it('parses comments without specifying a postId (uses 0)', async () => {
			mockFetch({
				ok: true,
				text: () => Promise.resolve(COMMENT_XML)
			});

			const comments = await getComments(0);
			expect(comments.length).toBe(1);
			expect(comments[0]).toEqual({
				author: 'kurozenzen',
				createdAt: '2023-01-01 10:20',
				content: 'comment'
			});
		});
	});
});
