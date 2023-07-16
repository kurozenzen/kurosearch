type SortFilter = {
	sortProperty: kurosearch.SortProperty;
	sortDirection: kurosearch.SortDirection;
	scoreValue: number;
	scoreComparator: kurosearch.ScoreComparator;
	rating: kurosearch.Rating;
};

import { semiPersistentWritable } from './semi-persistent-store';
import { StoreKey } from './store-keys';

const getInitial = () =>
	({
		sortProperty: 'id',
		scoreValue: 0,
		scoreComparator: '>=',
		sortDirection: 'desc',
		rating: 'all'
	} as SortFilter);

const createSortStore = () => {
	const { subscribe, set } = semiPersistentWritable(StoreKey.SortFilter, getInitial());

	return {
		subscribe,
		set(value: SortFilter) {
			const scoreValue = value.scoreValue ?? 0;
			set({ ...value, scoreValue });
		},
		reset() {
			set(getInitial());
		}
	};
};

export default createSortStore();
