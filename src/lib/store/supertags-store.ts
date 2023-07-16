import { persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

type SupertagsStore = {
	last_sync: number;
	items: kurosearch.Supertag[];
};

const getInitial = (): SupertagsStore => ({
	last_sync: 0,
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
