import { describe, expect, it } from 'vitest';
import { formatCount } from './format-count';

describe('format-count', () => {
	const cases = [
		{ input: undefined, expectedOutput: '-' },
		{ input: null, expectedOutput: '-' },
		{ input: -999, expectedOutput: '-999' },
		{ input: -1, expectedOutput: '-1' },
		{ input: 0, expectedOutput: '0' },
		{ input: 1, expectedOutput: '1' },
		{ input: 999, expectedOutput: '999' },
		{ input: 1000, expectedOutput: '1K' },
		{ input: 999499, expectedOutput: '999K' },
		{ input: 1000000, expectedOutput: '1M' },
		{ input: 999499999, expectedOutput: '999M' }
	];

	cases.forEach(({ input, expectedOutput }) => {
		it(`renders ${input} correctly`, () => {
			expect(formatCount(input)).toBe(expectedOutput);
		});
	});
});
