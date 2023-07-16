import { describe, expect, it } from 'vitest';
import { formatVideoTime } from './format-time';

describe('formatVideoTime', () => {
	it('formats correctly', () => {
		expect(formatVideoTime(0)).toBe('00:00');
		expect(formatVideoTime(59)).toBe('00:59');
		expect(formatVideoTime(60)).toBe('01:00');
		expect(formatVideoTime(3599)).toBe('59:59');
		expect(formatVideoTime(3600)).toBe('60:00');
	});
});
