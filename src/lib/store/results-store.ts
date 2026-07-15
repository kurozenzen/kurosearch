import { PAGE_SIZE } from '$lib/logic/api-client/ApiClient';
import { semiPersistentWritable } from './semi-persistent-store';
import { StoreKey } from './store-keys';

export type ResultsStore = {
	posts: kurosearch.Post[];
	pageCount: number;
	ids: Set<number>;
	postCount: number;
	hasPage: boolean;
	hasLastPage: boolean;
	loading: boolean;
	error: Error | undefined;
};

const getInitialResults = (): ResultsStore => ({
	posts: [],
	pageCount: 0,
	ids: new Set(),
	postCount: 0,
	hasPage: false,
	hasLastPage: false,
	loading: false,
	error: undefined
});

const serializer = (value: ResultsStore) =>
	JSON.stringify({
		posts: value.posts,
		pageCount: value.pageCount,
		ids: [...value.ids.values()],
		postCount: value.postCount,
		requested: value.hasPage,
		allPagesRequested: value.hasLastPage
	});

const parser = (value: string): ResultsStore => {
	const parsed = JSON.parse(value);
	return {
		posts: parsed.posts,
		pageCount: parsed.pageCount,
		ids: new Set(parsed.ids),
		postCount: parsed.postCount,
		hasPage: parsed.requested,
		hasLastPage: parsed.allPagesRequested ?? false,
		loading: false,
		error: undefined
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
					hasPage: true,
					hasLastPage: newPosts.length === 0,
					loading: false,
					error: undefined
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
					hasPage: true,
					hasLastPage: page.length === 0,
					loading: false,
					error: undefined
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
					hasPage: false,
					hasLastPage: false,
					loading: false,
					error: undefined
				};
			});
		},

		reset() {
			set(getInitialResults());
		},

		setLoading(loading: boolean) {
			update((previous) => ({ ...previous, loading }));
		},

		setError(error: Error | undefined) {
			update((previous) => ({ ...previous, error }));
		},

		setHasPage(hasPage: boolean) {
			update((previous) => ({ ...previous, hasPage }));
		}
	};
};

export default createResultsStore();
