import { semiPersistentWritable } from './semi-persistent-store';
import { StoreKey } from './store-keys';

const createActiveTagsStore = () => {
	const { subscribe, update, set } = semiPersistentWritable(
		StoreKey.ActiveSupertags,
		[] as kurosearch.Supertag[]
	);

	return {
		subscribe,
		set,
		addOrReplace: (tag: kurosearch.Supertag) =>
			update((previous) => {
				const i = previous.findIndex((active) => active.name === tag.name);
				if (i === -1) {
					previous.push(tag);
				} else {
					previous[i] = tag;
				}
				return previous;
			}),
		removeByName: (name: string) =>
			update((previous) => {
				const i = previous.findIndex((active) => active.name === name);
				previous.splice(i, 1);
				return previous;
			}),
		reset: () => set([])
	};
};

export default createActiveTagsStore();
