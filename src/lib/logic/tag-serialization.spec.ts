import { describe, expect, it } from 'vitest';
import {
	serializeModifier,
	serializeSearch,
	serializeSearchableTag,
	serializeSearchableTags,
	serializeTagName
} from './tag-serialization';

describe('Serialization', () => {
	describe('modifier', () => {
		it("only serializes '-' visibly", () => {
			expect(serializeModifier('+')).toBe('');
			expect(serializeModifier('-')).toBe('-');
			expect(serializeModifier('~')).toBe('');
		});

		it('returns empty string on invalid modifiers', () => {
			// @ts-expect-error - passing invalid modifiers
			expect(serializeModifier(null)).toBe('');
			// @ts-expect-error - passing invalid modifiers
			expect(serializeModifier(undefined)).toBe('');
			// @ts-expect-error - passing invalid modifiers
			expect(serializeModifier('')).toBe('');
			// @ts-expect-error - passing invalid modifiers
			expect(serializeModifier('a')).toBe('');
			// @ts-expect-error - passing invalid modifiers
			expect(serializeModifier(1)).toBe('');
		});
	});

	describe('tag name', () => {
		it('replaces spaces with underscores', () => {
			expect(serializeTagName('some tag')).toBe('some_tag');
		});

		// it('can handle characters that need to be encoded', () => {
		// 	expect(serializeTagName('tags=score:>=0')).toBe('score:>=0');
		// });
	});

	describe('searchable tag', () => {
		it('includes modifier and name', () => {
			expect(serializeSearchableTag({ modifier: '-', name: '<some tag>' })).toBe('-<some_tag>');
			expect(serializeSearchableTag({ modifier: '~', name: 'hi' })).toBe('hi');
		});
	});

	describe('searchable tag list', () => {
		it('works with combination of tags', () => {
			const tags: kurosearch.SearchableTag[] = [
				{ modifier: '+', name: 'hi <3' },
				{ modifier: '~', name: 'a (1) thing' },
				{ modifier: '-', name: 'some stuff' },
				{ modifier: '-', name: 'more_stuff' },
				{ modifier: '+', name: 'hehe :3' },
				{ modifier: '~', name: 'another thing (2)' }
			];
			expect(serializeSearchableTags(tags)).toBe(
				'hi_<3+hehe_:3+-some_stuff+-more_stuff+( a_(1)_thing ~ another_thing_(2) )'
			);
		});
	});

	describe('search', () => {
		it('minimally includes sort', () => {
			expect(serializeSearch([], 'id', 'desc', 0, 'all', '>=', [], [])).toBe('sort:id:desc');
		});
		it('includes score if neccessary', () => {
			expect(serializeSearch([], 'id', 'desc', 1, 'safe', '>=', [], [])).toBe(
				'sort:id:desc+score:>=1+rating:safe'
			);
			expect(serializeSearch([], 'id', 'desc', 0, 'safe', '<=', [], [])).toBe(
				'sort:id:desc+score:<=0+rating:safe'
			);
		});
		it('includes rating if neccessary', () => {
			expect(serializeSearch([], 'id', 'desc', 0, 'safe', '>=', [], [])).toBe(
				'sort:id:desc+rating:safe'
			);
		});
		it('includes tags if neccessary', () => {
			expect(
				serializeSearch(
					[
						{ modifier: '+', name: 'tag 1' },
						{ modifier: '-', name: 'tag 2' },
						{ modifier: '~', name: 'tag 3' },
						{ modifier: '~', name: 'tag 4' }
					],
					'id',
					'desc',
					0,
					'all',
					'>=',
					[],
					[]
				)
			).toBe('sort:id:desc+tag_1+-tag_2+( tag_3 ~ tag_4 )');
		});
		it('includes supertags if neccessary', () => {
			expect(
				serializeSearch(
					[],
					'id',
					'desc',
					0,
					'all',
					'>=',
					[],
					[
						{
							name: 'supertag 1',
							description: '',
							tags: [
								{ modifier: '~', name: 'tag 2' },
								{ modifier: '-', name: 'tag 1' },
								{ modifier: '~', name: 'tag 3' }
							]
						},
						{
							name: 'supertag 1',
							description: '',
							tags: [
								{ modifier: '~', name: 'tag 6' },
								{ modifier: '-', name: 'tag 4' },
								{ modifier: '~', name: 'tag 7' },
								{ modifier: '-', name: 'tag 5' }
							]
						}
					]
				)
			).toBe('sort:id:desc+-tag_1+( tag_2 ~ tag_3 )+-tag_4+-tag_5+( tag_6 ~ tag_7 )');
		});
		it('includes blocked content if neccessary', () => {
			expect(serializeSearch([], 'id', 'desc', 0, 'all', '>=', ['Loli'], [])).toBe(
				'sort:id:desc+-young+-younger+-younger_*+-young_*+-lolita_*+-loli*'
			);
		});
	});
});
