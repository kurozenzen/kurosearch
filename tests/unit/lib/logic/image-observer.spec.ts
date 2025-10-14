import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const withMockedEnv = async (
	browser: boolean,
	fn: (mod: typeof import('$lib/logic/image-observer')) => Promise<void> | void
) => {
	vi.resetModules();
	vi.doMock('$app/environment', () => ({ browser }));
	if (browser) {
		class IO {
			static cb: IntersectionObserverCallback | null = null;
			constructor(cb: IntersectionObserverCallback) {
				IO.cb = cb;
			}
			observe(_el: Element) {}
			unobserve(_el: Element) {}
		}
		// expose class for spying on prototype methods
		// @ts-ignore
		(globalThis as any).__TEST_IO = IO;
		// @ts-ignore test shim
		globalThis.IntersectionObserver = IO as unknown as typeof IntersectionObserver;
	}
	const mod = await import('$lib/logic/image-observer');
	await fn(mod);
	vi.unmock('$app/environment');
};

describe('image-observer', () => {
	beforeEach(() => vi.restoreAllMocks());
	afterEach(() => {
		// @ts-ignore
		delete (globalThis as any).IntersectionObserver;
	});

	it('sets src from data-src when intersecting and different', async () => {
		await withMockedEnv(true, async ({ observeImage }) => {
			const img = document.createElement('img');
			img.setAttribute('data-src', 'https://example.com/a.jpg');
			img.setAttribute('src', '');
			const spy = vi.spyOn(img, 'setAttribute');
			observeImage(img);
			const IO = globalThis.IntersectionObserver as any;
			IO.cb?.([{ target: img, isIntersecting: true } as any], {} as any);
			expect(spy).toHaveBeenCalledWith('src', 'https://example.com/a.jpg');
		});
	});

	it('does not set src again if current src equals data-src', async () => {
		await withMockedEnv(true, async ({ observeImage }) => {
			const img = document.createElement('img');
			img.setAttribute('data-src', 'https://example.com/a.jpg');
			img.setAttribute('src', '');
			const spy = vi.spyOn(img, 'setAttribute');
			observeImage(img);
			const IO = globalThis.IntersectionObserver as any;
			IO.cb?.([{ target: img, isIntersecting: true } as any], {} as any);
			// First call sets src to data-src
			expect(spy).toHaveBeenLastCalledWith('src', 'https://example.com/a.jpg');
			spy.mockClear();
			// Now current src equals data-src; callback should early-return without calling setAttribute
			IO.cb?.([{ target: img, isIntersecting: true } as any], {} as any);
			expect(spy).not.toHaveBeenCalled();
		});
	});

	it('does not unload src when not intersecting (optimization)', async () => {
		await withMockedEnv(true, async ({ observeImage }) => {
			const img = document.createElement('img');
			img.setAttribute('data-src', 'x');
			const spy = vi.spyOn(img, 'setAttribute');
			observeImage(img);
			const IO = globalThis.IntersectionObserver as any;
			IO.cb?.([{ target: img, isIntersecting: false } as any], {} as any);
			// After optimization, we no longer unload images for better performance
			expect(spy).not.toHaveBeenCalled();
		});
	});

	it('SSR no-op when browser=false', async () => {
		await withMockedEnv(false, async ({ observeImage }) => {
			const img = document.createElement('img');
			const handle = observeImage(img);
			expect(() => handle.destroy()).not.toThrow();
		});
	});
});

it('uses nullish defaults for data-src and src; early return without setting', async () => {
	await withMockedEnv(true, async ({ observeImage }) => {
		const img = document.createElement('img');
		const spy = vi.spyOn(img, 'setAttribute');
		observeImage(img);
		const IO = globalThis.IntersectionObserver as any;
		IO.cb?.([{ target: img, isIntersecting: true } as any], {} as any);
		expect(spy).not.toHaveBeenCalled();
	});
});

it('destroy() unobserves the node when observer exists', async () => {
	await withMockedEnv(true, async ({ observeImage }) => {
		const IOClass: any = (globalThis as any).__TEST_IO;
		const unobserveSpy = vi.spyOn(IOClass.prototype, 'unobserve');
		const img = document.createElement('img');
		const handle = observeImage(img);
		handle.destroy();
		expect(unobserveSpy).toHaveBeenCalledWith(img);
	});
});
