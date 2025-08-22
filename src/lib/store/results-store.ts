import { semiPersistentWritable } from './semi-persistent-store';
import { StoreKey } from './store-keys';

type ResultsStore = {
	posts: kurosearch.Post[];
	pageCount: number;
	ids: Set<number>;
	postCount: number;
	requested: boolean;
};

const getInitialResults = (): ResultsStore => ({
	posts: [],
	pageCount: 0,
	ids: new Set(),
	postCount: 0,
	requested: false
});

const serializer = (value: ResultsStore) =>
	JSON.stringify({
		posts: value.posts,
		pageCount: value.pageCount,
		ids: [...value.ids.values()],
		postCount: value.postCount,
		requested: value.requested
	});

const parser = (value: string): ResultsStore => {
	const parsed = JSON.parse(value);
	return {
		posts: parsed.posts,
		pageCount: parsed.pageCount,
		ids: new Set(parsed.ids),
		postCount: parsed.postCount,
		requested: parsed.requested
	};
};

const createResultsStore = () => {
	const { subscribe, update, set } = semiPersistentWritable(
		StoreKey.Results,
		getInitialResults(),
		serializer,
		parser
	);

	return {
		subscribe,
		addPage(page: kurosearch.Post[], count: number | undefined = undefined) {
			update((previous) => {
				const newPosts = page.filter((p) => !previous.ids.has(p.id));

				newPosts.forEach((p) => previous.ids.add(p.id));

				return {
					posts: [...previous.posts, ...newPosts],
					pageCount: previous.pageCount + 1,
					ids: previous.ids,
					postCount: count ?? previous.postCount,
					requested: true
				};
			});
		},

		setPage(page: kurosearch.Post[], pid: number) {
			update((previous) => {
				page.forEach((p) => previous.ids.add(p.id));
				return {
					posts: [...page],
					pageCount: pid + 1,
					ids: previous.ids,
					postCount: previous.postCount,
					requested: true
				};
			});
		},

		resetPosts() {
			update((previous) => {
				previous.ids.clear();
				return {
					posts: [],
					pageCount: previous.pageCount,
					ids: previous.ids,
					postCount: previous.postCount,
					requested: true
				};
			});
		},

		reset() {
			set(getInitialResults());
		}
	};
};

export default createResultsStore();
