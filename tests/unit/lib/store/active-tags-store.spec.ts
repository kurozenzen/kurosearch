import { beforeEach, describe, expect, it, vi } from 'vitest';

const loadStore = async () => {
	vi.resetModules();
	vi.doMock('$app/environment', () => ({ browser: true }));
	// mock API client getTagDetails
	vi.doMock('$lib/logic/api-client/tags/tags', () => ({
		getTagDetails: vi.fn(async (name: string) => ({ name, count: 5, type: 'artist' }))
	}));
	return await import('$lib/store/active-tags-store');
};

const current = async <T>(store: any) =>
	new Promise<T>((resolve) => {
		let unsub: () => void;

		unsub = store.subscribe((v: T) => {
			resolve(v as any);
			setTimeout(() => unsub(), 0);
		});
	});

beforeEach(() => {
	localStorage.clear();
	sessionStorage.clear();
});

describe('active-tags-store', () => {
	it('addOrReplace and removeByName work', async () => {
		const mod: any = await loadStore();
		const store = mod.default;
		// start empty
		expect(await current<any[]>(store)).toEqual([]);
		// add
		store.addOrReplace({ modifier: '+', name: 'a', count: 0, type: 'tag' });
		let v = await current<any[]>(store);
		expect(v).toEqual([{ modifier: '+', name: 'a', count: 0, type: 'tag' }]);
		// replace
		store.addOrReplace({ modifier: '-', name: 'a', count: 1, type: 'artist' });
		v = await current<any[]>(store);
		expect(v).toEqual([{ modifier: '-', name: 'a', count: 1, type: 'artist' }]);
		// remove
		store.removeByName('a');
		v = await current<any[]>(store);
		expect(v).toEqual([]);
		store.reset();
		v = await current<any[]>(store);
		expect(v).toEqual([]);
	});

	it('addByName adds tag and gracefully handles failures', async () => {
		// success path
		let mod: any = await loadStore();
		let store = mod.default;
		await store.addByName('tag1', '+', 'k', 'u');
		let v = await current<any[]>(store);
		expect(v[0]).toEqual({ modifier: '+', name: 'tag1', count: 5, type: 'artist' });

		// clear persisted state between scenarios and wait for debounce
		await new Promise((resolve) => setTimeout(resolve, 250));
		localStorage.clear();
		sessionStorage.clear();

		// failure path: mock getTagDetails to throw
		vi.resetModules();
		vi.doMock('$app/environment', () => ({ browser: true }));
		vi.doMock('$lib/logic/api-client/tags/tags', () => ({
			getTagDetails: vi.fn(async () => {
				throw new Error('fail');
			})
		}));
		mod = await import('$lib/store/active-tags-store');
		store = (mod as any).default;
		await store.addByName('x');
		v = await current<any[]>(store);
		expect(v[0]).toEqual({ modifier: '+', name: 'x', count: 0, type: 'general' });

		// duplicate addByName should not add a second copy
		await store.addByName('x');
		v = await current<any[]>(store);
		expect(v.length).toBe(1);
	});
});
