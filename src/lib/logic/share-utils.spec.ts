import { describe, expect, it } from 'vitest';
import { parseShareTags } from './share-utils';

describe('Parsing', () => {
	describe('search', () => {
		it('full', () => {
			const expectedTags: kurosearch.SearchableTag[] = [
				{
					name: 'samus_aran',
					modifier: '+'
				},
				{
					name: 'animated',
					modifier: '+'
				},
				{
					name: 'cum_in_pussy',
					modifier: '-'
				},
				{
					name: 'cum_in_ass',
					modifier: '~'
				},
				{
					name: 'cum_in_mouth',
					modifier: '~'
				}
			];

			expect(
				parseShareTags('+samus_aran;+animated;-cum_in_pussy;~cum_in_ass;~cum_in_mouth')
			).toEqual(expectedTags);
		});
	});
});
