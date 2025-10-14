import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// We'll dynamically import the module under different envs

const withMockedEnv = async (
	browser: boolean,
	fn: (mod: typeof import('$lib/logic/gif-observer')) => Promise<void> | void
) => {
	vi.resetModules();
	vi.doMock('$app/environment', () => ({ browser }));
	// Provide a minimal IntersectionObserver when browser=true
	if (browser) {
		class IO {
			static cb: IntersectionObserverCallback | null = null;
			static options: IntersectionObserverInit | null = null;
			static observed: Element[] = [];
			constructor(cb: IntersectionObserverCallback, options?: IntersectionObserverInit) {
				IO.cb = cb;
				IO.options = options ?? null;
			}
			observe(el: Element) {
				IO.observed.push(el);
			}
			unobserve(_el: Element) {
				// no-op for test tracking
			}
		}
		// @ts-ignore assign to global for test
		globalThis.IntersectionObserver = IO as unknown as typeof IntersectionObserver;
	}
	const mod = await import('$lib/logic/gif-observer');
	await fn(mod);
	vi.unmock('$app/environment');
};

describe('gif-observer', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	afterEach(() => {
		// cleanup global IO between tests
		// @ts-ignore
		delete (globalThis as any).IntersectionObserver;
	});

	it('observes node and swaps src on intersect (no unload optimization)', async () => {
		await withMockedEnv(true, async ({ observeGif }) => {
			// Prepare element
			const img = document.createElement('img');
			img.setAttribute('data-src', 'https://example.com/a.gif');
			const spy = vi.spyOn(img, 'setAttribute');

			const { destroy } = observeGif(img);
			// simulate intersection
			const IO = globalThis.IntersectionObserver as any;
			IO.cb?.([{ target: img, isIntersecting: true } as any], {} as any);
			expect(spy).toHaveBeenCalledWith('src', 'https://example.com/a.gif');

			// simulate leaving viewport
			spy.mockClear();
			IO.cb?.([{ target: img, isIntersecting: false } as any], {} as any);
			// After optimization, we no longer unload GIFs for better performance
			expect(spy).not.toHaveBeenCalled();

			// cleanup should not throw
			expect(() => destroy()).not.toThrow();
		});
	});

	it('uses empty string when data-src is missing (nullish coalescing branch)', async () => {
		await withMockedEnv(true, async ({ observeGif }) => {
			const img = document.createElement('img');
			const spy = vi.spyOn(img, 'setAttribute');
			observeGif(img);
			const IO = globalThis.IntersectionObserver as any;
			IO.cb?.([{ target: img, isIntersecting: true } as any], {} as any);
			expect(spy).toHaveBeenCalledWith('src', '');
		});
	});

	it('SSR no-op does not throw when browser=false', async () => {
		await withMockedEnv(false, async ({ observeGif }) => {
			const img = document.createElement('img');
			const handle = observeGif(img);
			expect(() => handle.destroy()).not.toThrow();
		});
	});
});
