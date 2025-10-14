import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getValue } from '../../../helpers/getValue';

const loadModule = async (browser: boolean) => {
	vi.resetModules();
	vi.doMock('$app/environment', () => ({ browser }));
	return await import('$lib/store/semi-persistent-store');
};

beforeEach(() => {
	localStorage.clear();
	sessionStorage.clear();
});

describe('semi-persistent-store', () => {
	it('returns initial when browser=false and does not write', async () => {
		const mod = await loadModule(false);
		const spyL = vi.spyOn(window.localStorage, 'setItem');
		const spyS = vi.spyOn(window.sessionStorage, 'setItem');
		const store = mod.semiPersistentWritable('k', { a: 1 });
		const v = await getValue(store);
		expect(v).toEqual({ a: 1 });
		store.set({ a: 2 });
		expect(spyL).not.toHaveBeenCalled();
		expect(spyS).not.toHaveBeenCalled();
	});

	it('reads from sessionStorage when localstorage-enabled is false', async () => {
		const mod = await loadModule(true);
		localStorage.setItem('Kurosearch:localstorage-enabled', 'false');
		sessionStorage.setItem('k', JSON.stringify({ a: 10 }));
		localStorage.setItem('k', JSON.stringify({ a: 99 }));
		const store = mod.semiPersistentWritable('k', { a: 1 });
		const v = await getValue<any>(store);
		expect(v).toEqual({ a: 10 });
	});

	it('reads from localStorage when localstorage-enabled is true', async () => {
		const mod = await loadModule(true);
		localStorage.setItem('Kurosearch:localstorage-enabled', 'true');
		sessionStorage.setItem('k', JSON.stringify({ a: 10 }));
		localStorage.setItem('k', JSON.stringify({ a: 7 }));
		const store = mod.semiPersistentWritable('k', { a: 1 });
		const v = await getValue<any>(store);
		expect(v).toEqual({ a: 7 });
	});

	it('writes to chosen storage with debouncing on set', async () => {
		const mod = await loadModule(true);
		const store = mod.semiPersistentWritable('k', { a: 1 });
		store.set({ a: 2 });

		// After optimization, writes are debounced (200ms), so we need to wait
		await new Promise((resolve) => setTimeout(resolve, 250));

		// Should write to localStorage by default (when localstorage-enabled is not set or true)
		expect(window.localStorage.getItem('k')).toBe(JSON.stringify({ a: 2 }));
	});

	it('merges objects, but not arrays', async () => {
		const mod = await loadModule(true);
		// object merge
		localStorage.setItem('Kurosearch:localstorage-enabled', 'true');
		window.localStorage.setItem('k', JSON.stringify({ b: 2 }));
		let store = mod.semiPersistentWritable('k', { a: 1 } as any);
		let v = await getValue<any>(store);
		expect(v).toEqual({ a: 1, b: 2 });

		// arrays should not be treated as objects for merge
		localStorage.setItem('Kurosearch:localstorage-enabled', 'true');
		window.localStorage.setItem('k', JSON.stringify([1, 2, 3]));
		store = mod.semiPersistentWritable('k', [9] as any);
		v = await getValue<any>(store);
		expect(v).toEqual([1, 2, 3]);
	});

	it('falls back to initial on parser undefined or error', async () => {
		const mod = await loadModule(true);
		// undefined
		vi.spyOn(window.localStorage, 'getItem').mockReturnValue('whatever');
		let parser = vi.fn(() => undefined);
		let store = mod.semiPersistentWritable('k', 3, mod.defaultSerializer, parser);
		let v = await getValue<number>(store);
		expect(v).toBe(3);

		// error
		vi.restoreAllMocks();
		vi.spyOn(window.localStorage, 'getItem').mockReturnValue('bad');
		parser = vi.fn(() => {
			throw new Error('bad');
		});
		// @ts-expect-error - passing wrong type to test error handling
		store = mod.semiPersistentWritable('k', 5, mod.defaultSerializer, parser);
		v = await getValue<number>(store);
		expect(v).toBe(5);
	});
});
