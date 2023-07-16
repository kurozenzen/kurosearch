import { afterEach, describe, expect, it } from 'vitest';
import { getComments } from './comments';

const originalFetch = global.fetch;
const RESOLVED = true;

//@ts-expect-error
global.fetch = vi.fn(() => Promise.resolve(RESOLVED));

describe('pages', () => {
	describe('getComments', () => {
		afterEach(() => {
			global.fetch = originalFetch;
		});

		it('invalid postId throws TypeError', () => {
			// @ts-expect-error
			return getComments('a').catch((e) => expect(e).toBeInstanceOf(TypeError));
		});

		it('response not ok throws Error', () => {
			//@ts-expect-error
			global.fetch = vi.fn(() => Promise.resolve({ ok: false }));
			getComments(0).catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('missing created_at throws error', async () => {
			//@ts-expect-error
			global.fetch = vi.fn(() =>
				Promise.resolve({
					ok: true,
					text: () =>
						Promise.resolve(
							'<comments type="array"><comment post_id="3" body="comment" creator="kurozenzen" id="2" creator_id="1"/></comments>'
						)
				})
			);
			getComments(0).catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('missing body throws error', async () => {
			//@ts-expect-error
			global.fetch = vi.fn(() =>
				Promise.resolve({
					ok: true,
					text: () =>
						Promise.resolve(
							'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" creator="kurozenzen" id="2" creator_id="1"/></comments>'
						)
				})
			);

			getComments(0).catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('missing creator throws error', async () => {
			//@ts-expect-error
			global.fetch = vi.fn(() =>
				Promise.resolve({
					ok: true,
					text: () =>
						Promise.resolve(
							'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" body="comment" id="2" creator_id="1"/></comments>'
						)
				})
			);

			getComments(0).catch((e) => expect(e).toBeInstanceOf(Error));
		});

		it('parses comments with postId', async () => {
			//@ts-expect-error
			global.fetch = vi.fn(() =>
				Promise.resolve({
					ok: true,
					text: () =>
						Promise.resolve(
							'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" body="comment" creator="kurozenzen" id="2" creator_id="1"/></comments>'
						)
				})
			);

			const comments = await getComments(0);
			expect(comments.length).toBe(1);
			expect(comments[0]).toEqual({
				author: 'kurozenzen',
				createdAt: '2023-01-01 10:20',
				content: 'comment'
			});
		});

		it('parses comments without postId', async () => {
			//@ts-expect-error
			global.fetch = vi.fn(() =>
				Promise.resolve({
					ok: true,
					text: () =>
						Promise.resolve(
							'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" body="comment" creator="kurozenzen" id="2" creator_id="1"/></comments>'
						)
				})
			);

			const comments = await getComments();
			expect(comments.length).toBe(1);
			expect(comments[0]).toEqual({
				author: 'kurozenzen',
				createdAt: '2023-01-01 10:20',
				content: 'comment'
			});
		});
	});
});
