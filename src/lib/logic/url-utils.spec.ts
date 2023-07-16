import { describe, expect, it } from 'vitest';
import { isValidUrl } from './url-utils';

describe('isValidUrl', () => {
	it('returns true for urls', () => {
		expect(isValidUrl('http://localhost:9000/asdf')).toBe(true);
		expect(isValidUrl('http://kurosearch.com')).toBe(true);
	});

	it('returns false for invalid inputs', () => {
		// @ts-expect-error - passing invalid input
		expect(isValidUrl(undefined)).toBe(false);
		// @ts-expect-error - passing invalid input
		expect(isValidUrl(null)).toBe(false);
		expect(isValidUrl('')).toBe(false);
		expect(isValidUrl('asdf')).toBe(false);
		// @ts-expect-error - passing invalid input
		expect(isValidUrl(1)).toBe(false);
	});
});
