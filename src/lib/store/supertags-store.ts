import { persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

export type SupertagsStore = {
	items: kurosearch.Supertag[];
};

const getInitial = (): SupertagsStore => ({
	items: []
});

const createSupertagsStore = () => {
	const { subscribe, set, update } = persistentWritable(StoreKey.Supertags, getInitial());

	return {
		subscribe,
		set,
		add(supertag: kurosearch.Supertag) {
			update((old) => {
				old.items.push(supertag);
				return old;
			});
		},
		remove(supertag: kurosearch.Supertag) {
			update((old) => {
				old.items = old.items.filter((i) => i.name !== supertag.name);
				return old;
			});
		},
		update(oldName: string, supertag: kurosearch.Supertag) {
			update((old) => {
				const index = old.items.findIndex((i) => i.name === oldName);
				if (index !== -1) {
					old.items[index] = supertag;
				}
				return old;
			});
		},
		reset() {
			set(getInitial());
		}
	};
};

export default createSupertagsStore();
