import { describe, it, expect } from 'vitest';
import { getNextModifier } from '$lib/logic/modifier-utils';

// Runtime uses simple string comparison; types enforce TagModifier at compile time
// We still assert behavior for valid and invalid inputs.

describe('modifier-utils nextModifier', () => {
	it("cycles '+' -> '~'", () => {
		expect(getNextModifier('+')).toBe('~');
	});

	it("cycles '+' -> '~'", () => {
		expect(getNextModifier('+')).toBe('~');
	});

	it("cycles '-' -> '+' (wrap-around)", () => {
		expect(getNextModifier('-')).toBe('+');
	});

	it('unknown modifier falls back to start "+"', () => {
		// @ts-expect-error intentionally providing invalid modifier to test runtime
		expect(getNextModifier('x')).toBe('+');
	});
});
