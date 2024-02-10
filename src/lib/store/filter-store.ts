import { semiPersistentWritable } from './semi-persistent-store';
import { StoreKey } from './store-keys';

export type FilterStoreData = {
	scoreValue: number;
	scoreComparator: kurosearch.ScoreComparator;
	rating: kurosearch.Rating;
};

const getInitial = (): FilterStoreData => ({
	scoreValue: 0,
	scoreComparator: '>=',
	rating: 'all'
});

const createFilterStore = () => {
	const { subscribe, set, update } = semiPersistentWritable(StoreKey.Filter, getInitial());

	return {
		subscribe,
		set(value: FilterStoreData) {
			console.log('set store', value);
			set({
				...value,
				scoreValue: value.scoreValue ?? 0
			});
		},
		update(value: Partial<FilterStoreData>) {
			console.log('update store', value);

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

export default createFilterStore();
