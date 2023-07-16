import { afterAll, describe, expect, it } from 'vitest';
import { fetchAbortPrevious } from './fetchAbortPrevious';

const originalFetch = global.fetch;
const RESOLVED = true;

//@ts-expect-error
global.fetch = vi.fn(() => Promise.resolve(RESOLVED));

describe('fetchAbortPrevious', () => {
	afterAll(() => {
		global.fetch = originalFetch;
	});
	describe('url', () => {
		it('undefined throws TypeError', () => {
			//@ts-expect-error
			expect(() => fetchAbortPrevious(undefined, null)).toThrow(TypeError);
		});

		it('null throws TypeError', () => {
			//@ts-expect-error
			expect(() => fetchAbortPrevious(null, null)).toThrow(TypeError);
		});

		it('empty string throws TypeError', () => {
			expect(() => fetchAbortPrevious('', null)).toThrow(TypeError);
		});
	});

	describe('abortController', () => {
		it('undefined throws TypeError', () => {
			//@ts-expect-error
			expect(() => fetchAbortPrevious('http://localhost', undefined)).toThrow(TypeError);
		});

		it('empty object throws TypeError', () => {
			//@ts-expect-error
			expect(() => fetchAbortPrevious('http://localhost', {})).toThrow(TypeError);
		});
	});

	it('aborts previous request with valid abortController', () => {
		const abortController = new AbortController();
		//@ts-expect-error
		const abortSpy = vi.spyOn(abortController, 'abort');
		fetchAbortPrevious('http://localhost', abortController);
		expect(abortSpy).toBeCalledTimes(1);
	});

	it('does not abort previous request without valid abortController', () => {
		//@ts-expect-error
		const abortSpy = vi.spyOn(AbortController.prototype, 'abort');
		fetchAbortPrevious('http://localhost', null);
		expect(abortSpy).not.toBeCalled();
	});
});
