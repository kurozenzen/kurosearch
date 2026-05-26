import { PAGE_SIZE } from '$lib/logic/api-client/ApiClient';
import { semiPersistentWritable } from './semi-persistent-store';
import { StoreKey } from './store-keys';

type ResultsStore = {
	posts: kurosearch.Post[];
	pageCount: number;
	ids: Set<number>;
	postCount: number;
	requested: boolean;
	allPagesRequested: boolean;
};

const getInitialResults = (): ResultsStore => ({
	posts: [],
	pageCount: 0,
	ids: new Set(),
	postCount: 0,
	requested: false,
	allPagesRequested: false
});

const serializer = (value: ResultsStore) =>
	JSON.stringify({
		posts: value.posts,
		pageCount: value.pageCount,
		ids: [...value.ids.values()],
		postCount: value.postCount,
		requested: value.requested,
		allPagesRequested: value.allPagesRequested
	});

const parser = (value: string): ResultsStore => {
	const parsed = JSON.parse(value);
	return {
		posts: parsed.posts,
		pageCount: parsed.pageCount,
		ids: new Set(parsed.ids),
		postCount: parsed.postCount,
		requested: parsed.requested,
		allPagesRequested: parsed.allPagesRequested ?? false
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
					requested: true,
					allPagesRequested: newPosts.length < PAGE_SIZE
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
					requested: true,
					allPagesRequested: page.length < PAGE_SIZE
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
					requested: false,
					allPagesRequested: false
				};
			});
		},

		reset() {
			set(getInitialResults());
		}
	};
};

export default createResultsStore();
