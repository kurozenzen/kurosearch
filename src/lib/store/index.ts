import { getTagDetails } from '$lib/logic/api-client/ApiClient';
import { semiPersistentStorage } from './generic/storage-semi.svelte';
import { PersistentState } from './persistent.state.svelte';
import { StorageKey } from './storage-keys';

export type FilterData = {
	scoreValue: number;
	scoreComparator: kurosearch.ScoreComparator;
	rating: kurosearch.Rating;
};

export type SortData = {
	property: kurosearch.SortProperty;
	direction: kurosearch.SortDirection;
};

export interface SortFilterData {
	sort: SortData;
	filter: FilterData;
}

export type ResultsData = {
	posts: kurosearch.Post[];
	pageCount: number;
	ids: Set<number>;
	postCount: number;
	hasPage: boolean;
	hasLastPage: boolean;
	loading: boolean;
	error: Error | undefined;
};

export const activeSupertags = PersistentState.semiJson(
	StorageKey.ActiveSupertags,
	[] as kurosearch.Supertag[]
);
export const activeTags = PersistentState.semiJson(
	StorageKey.ActiveTags,
	[] as kurosearch.ModifiedTag[]
);
export const sort = PersistentState.semiJson(StorageKey.Sort, {
	property: 'id',
	direction: 'desc'
} as SortData);
export const filter = PersistentState.semiJson(StorageKey.Filter, {
	scoreValue: 0,
	scoreComparator: '>=',
	rating: 'all'
} as FilterData);
export const results = new PersistentState(
	semiPersistentStorage,
	StorageKey.Results,
	{
		posts: [],
		pageCount: 0,
		ids: new Set(),
		postCount: 0,
		hasPage: false,
		hasLastPage: false,
		loading: false,
		error: undefined
	} as ResultsData,
	(value): ResultsData => {
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
	},
	(value) =>
		JSON.stringify({
			posts: value.posts,
			pageCount: value.pageCount,
			ids: [...value.ids.values()],
			postCount: value.postCount,
			requested: value.hasPage,
			allPagesRequested: value.hasLastPage
		})
);
export const alwaysLoop = PersistentState.localBool(StorageKey.AlwaysLoop, false);
export const autoplayFullscreenDelay = PersistentState.localNumber(
	StorageKey.AutoplayFullscreenDelay,
	10
);
export const autoplayFullscreenEnabled = PersistentState.localBool(
	StorageKey.AutoplayFullscreenEnabled,
	false
);
export const blockedContent = PersistentState.localJson(StorageKey.BlockedContent, {
	'AI-Generated': false,
	'Animal-Related': false,
	'Non-Consentual': false,
	Gore: false,
	Scat: false,
	Vore: false,
	Incest: false
});
export const cookiesAccepted = PersistentState.localBool(StorageKey.CookiesAccepted, false);
export const dataSaver = PersistentState.localBool(StorageKey.DataSaver, false);
export const fullscreenHintDone = PersistentState.localBool(StorageKey.FullscreenHintDone, false);
export const gifPreloadEnabled = PersistentState.localBool(StorageKey.GifPreloadEnabled, false);
export const highResolutionEnabled = PersistentState.localBool(
	StorageKey.HighResolutionEnabled,
	false
);
export const pageNavigationEnabled = PersistentState.localBool(
	StorageKey.PageNavigationEnabled,
	false
);
export const resultColumns = PersistentState.localNumber(StorageKey.ResultColumns, 1);
export const tagsShortcut = PersistentState.localBool(StorageKey.TagsShortcut, false);
export const theme = PersistentState.localString(StorageKey.Theme, 'crimson dark');
export const wideLayoutEnabled = PersistentState.localBool(StorageKey.WideLayoutEnabled, false);
export const apiKey = PersistentState.localString(StorageKey.ApiKey, '');
export const userId = PersistentState.localString(StorageKey.UserId, '');
export const supertags = PersistentState.local(
	StorageKey.Supertags,
	[],
	(value) => {
		const stored = JSON.parse(value);
		return stored.items as kurosearch.Supertag[];
	},
	(value) => JSON.stringify({ items: value })
);

export const createTagFromName = async (name: string, modifier: kurosearch.TagModifier) => {
	let newTag: kurosearch.ModifiedTag = { modifier, name, count: 0, type: 'general' };
	try {
		const tag = await getTagDetails(name, apiKey.value, userId.value);
		newTag.count = tag?.count ?? 0;
		newTag.type = tag?.type ?? 'tag';
	} catch {
		// ignore, getting details is just a nice to have
	}
	return newTag;
};

export const setFirstPage = (results: ResultsData, page: kurosearch.Post[], count: number) => {
	results.hasPage = true;
	results.hasLastPage = page.length === 0;
	results.postCount = count;
	results.pageCount = 1;
	results.posts = page;
	results.ids = new Set(page.map((x) => x.id));
};

export const addPage = (results: ResultsData, page: kurosearch.Post[]) => {
	const newPosts = page.filter((p) => !results.ids.has(p.id));
	newPosts.forEach((p) => results.ids.add(p.id));
	results.posts = results.posts.concat(newPosts);
	results.pageCount = results.pageCount + 1;
	results.hasPage = true;
};

export const setPage = (results: ResultsData, page: kurosearch.Post[], pid: number) => {
	page.forEach((p) => results.ids.add(p.id));
	results.posts = page;
	results.pageCount = pid + 1;
	results.hasPage = true;
};
