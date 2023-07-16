import { afterEach, describe, expect, it } from 'vitest';
import { getPage, getPostsUrl } from './posts';

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
			expect(getPostsUrl(0, '')).toBe(
				'https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=20&pid=0'
			);
		});

		it('includes tags when they are not empty', () => {
			expect(getPostsUrl(0, 'example')).toBe(
				'https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=20&pid=0&tags=example'
			);
		});
	});

	describe('serializeTags', () => {
		it('empty tags still include sort and score', () => {
			expect(serializeSearchParameters([], 'id', 0)).toBe('score:>=0+sort:id:desc');
		});

		it('+ tags are included in string', () => {
			expect(
				serializeSearchParameters(
					[
						{ modifier: '+', name: 'tag1' },
						{ modifier: '+', name: 'tag2' }
					],
					'id',
					0
				)
			).toBe('tag1+tag2+score:>=0+sort:id:desc');
		});

		it('- tags are included in string', () => {
			expect(
				serializeSearchParameters(
					[
						{ modifier: '+', name: 'tag1' },
						{ modifier: '-', name: 'tag2' }
					],
					'id',
					0
				)
			).toBe('tag1+-tag2+score:>=0+sort:id:desc');
		});
		it('~ tags are included in string', () => {
			expect(
				serializeSearchParameters(
					[
						{ modifier: '~', name: 'tag2' },
						{ modifier: '~', name: 'tag3' }
					],
					'id',
					0
				)
			).toBe('score:>=0+sort:id:desc+( tag2 ~ tag3 )');
		});
	});
});
