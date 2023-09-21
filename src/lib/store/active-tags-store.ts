import { getTagDetails } from '$lib/logic/api-client/tags/tags';
import { semiPersistentWritable } from './semi-persistent-store';
import { StoreKey } from './store-keys';

const createActiveTagsStore = () => {
	const { subscribe, update, set } = semiPersistentWritable(
		StoreKey.ActiveTags,
		[] as kurosearch.ModifiedTag[]
	);

	return {
		subscribe,
		set,
		addOrReplace: (tag: kurosearch.ModifiedTag) =>
			update((previous) => {
				const i = previous.findIndex((active) => active.name === tag.name);
				if (i === -1) {
					previous.push(tag);
				} else {
					previous[i] = tag;
				}
				return previous;
			}),
		addByName: async (name: string, modifier: kurosearch.TagModifier = '+') => {
			let newTag: kurosearch.ModifiedTag = { modifier, name, count: 0, type: 'general' };

			try {
				const tag = await getTagDetails(name);
				newTag.count = tag?.count ?? 0;
				newTag.type = tag?.type ?? 'tag';
			} catch {
				// ignore, getting details is just a nice to have
			}

			update((tags) => {
				if (tags.some((activeTag) => activeTag.name === name)) {
					return tags;
				}

				tags.push(newTag);
				return tags;
			});
		},
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
