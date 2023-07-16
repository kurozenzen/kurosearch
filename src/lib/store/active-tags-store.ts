import { getTagDetails } from '$lib/logic/api-client/tags/tags';
import { semiPersistentWritable } from './semi-persistent-store';

const createActiveTagsStore = () => {
	const { subscribe, update, set } = semiPersistentWritable(
		'kurosearch:active-tags',
		[] as kurosearch.ActiveTag[]
	);

	return {
		subscribe,
		set,
		addOrReplace: (tag: kurosearch.ActiveTag) =>
			update((previous) => {
				const i = previous.findIndex((active) => active.name === tag.name);
				if (i === -1) {
					previous.push(tag);
				} else {
					previous[i] = tag;
				}
				return previous;
			}),
		addByName: async (name: string) => {
			let newTag: kurosearch.ActiveTag = { modifier: '+', name, count: 0, type: 'general' };

			try {
				debugger;
				const tag = await getTagDetails(name);
				newTag.count = tag.count;
				newTag.type = tag.type;
			} catch {
				// ignore, getting details is just a nice to have
			}

			update((tags) => {
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
