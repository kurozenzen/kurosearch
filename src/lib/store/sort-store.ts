import { semiPersistentWritable } from './semi-persistent-store';
import { StoreKey } from './store-keys';

export type SortStoreData = {
	property: kurosearch.SortProperty;
	direction: kurosearch.SortDirection;
};

const getInitial = (): SortStoreData => ({
	property: 'id',
	direction: 'desc'
});

const createSortStore = () => {
	const { subscribe, set, update } = semiPersistentWritable(StoreKey.Sort, getInitial());

	return {
		subscribe,
		set,
		update(value: Partial<SortStoreData>) {
			update((previous) => ({
				...previous,
				...value
			}));
		},
		reset() {
			set(getInitial());
		}
	};
};

export default createSortStore();
