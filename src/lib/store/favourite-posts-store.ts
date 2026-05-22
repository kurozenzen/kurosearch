import {
	addFavouritePost,
	getAllFavouritePosts,
	removeFavouritePost,
	type IndexedPost
} from '$lib/indexeddb/idb';
import { writable, type Writable } from 'svelte/store';

export interface FavouritePostsStore {
	posts: IndexedPost[];
	ids: Set<number>;
}

const createFavouritePostsStore = () => {
	const { subscribe, set, update } = writable<FavouritePostsStore>({ posts: [], ids: new Set() });

	getAllFavouritePosts().then((posts) => {
		set({
			posts,
			ids: new Set(posts.map((post) => post.id))
		});
	});

	return {
		subscribe: subscribe,
		set,
		update,
		toggleFavourite: (post: kurosearch.Post) => {
			update((state) => {
				if (state.ids.has(post.id)) {
					state.ids.delete(post.id);
					state.posts = state.posts.filter((p) => p.id !== post.id);
					removeFavouritePost(post.id);
				} else {
					const indexedPost: IndexedPost = { ...post, indexedAt: new Date() };
					state.ids.add(post.id);
					state.posts = [...state.posts, indexedPost];
					addFavouritePost(indexedPost);
				}
				return state;
			});
		}
	};
};

export const favouritePostsStore = createFavouritePostsStore();
