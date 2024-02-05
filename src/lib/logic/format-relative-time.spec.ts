import { describe, expect, it } from 'vitest';
import { formatCreatedAt } from './format-relative-time';

describe('formatCreatedAt', () => {
	const NOW = new Date();
	const ONE_MINUTE = 60_000;
	const ONE_HOUR = 60 * ONE_MINUTE;
	const ONE_DAY = 24 * ONE_HOUR;
	const ONE_WEEK = 7 * ONE_DAY;
	const ONE_MONTH = 31 * ONE_DAY;
	const ONE_YEAR = 366 * ONE_DAY;

	it('undefined throws TypeError', () => {
		// @ts-expect-error - passing invalid value
		expect(() => formatCreatedAt(undefined)).toThrow(TypeError);
	});

	it('null throws TypeError', () => {
		// @ts-expect-error - passing invalid value
		expect(() => formatCreatedAt(null)).toThrow(TypeError);
	});

	it('empty string throws TypeError', () => {
		expect(() => formatCreatedAt('')).toThrow(TypeError);
	});

	it('invalid string throws TypeError', () => {
		expect(() => formatCreatedAt('asdf')).toThrow(TypeError);
	});
	[
		['Just now', new Date(NOW.getTime() - 50_000).toString()],
		['1 minute ago', new Date(NOW.getTime() - ONE_MINUTE).toString()],
		['59 minutes ago', new Date(NOW.getTime() - 59 * ONE_MINUTE).toString()],
		['1 hour ago', new Date(NOW.getTime() - ONE_HOUR).toString()],
		['23 hours ago', new Date(NOW.getTime() - 23 * ONE_HOUR).toString()],
		['1 day ago', new Date(NOW.getTime() - ONE_DAY).toString()],
		['6 days ago', new Date(NOW.getTime() - 6 * ONE_DAY).toString()],
		['1 week ago', new Date(NOW.getTime() - ONE_WEEK).toString()],
		['4 weeks ago', new Date(NOW.getTime() - 4 * ONE_WEEK).toString()],
		['1 month ago', new Date(NOW.getTime() - ONE_MONTH).toString()],
		['11 months ago', new Date(NOW.getTime() - 11 * ONE_MONTH).toString()],
		['1 year ago', new Date(NOW.getTime() - ONE_YEAR).toString()],
		['10 years ago', new Date(NOW.getTime() - 10 * ONE_YEAR).toString()]
	].forEach(([expected, input]) => {
		it(expected, () => {
			expect(formatCreatedAt(input)).toBe(expected);
		});
	});
});
