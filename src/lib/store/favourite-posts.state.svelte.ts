import { browser } from '$app/env';
import {
	addFavouritePost,
	getAllFavouritePosts,
	removeFavouritePost,
	replaceAllFavouritePosts,
	type IndexedPost
} from '$lib/indexeddb/idb';
import { SvelteSet } from 'svelte/reactivity';

export interface FavouritePostsStore {
	posts: IndexedPost[];
	ids: Set<number>;
}

class FavouritePostsState {
	posts: IndexedPost[];
	ids: SvelteSet<number>;

	constructor() {
		this.posts = $state([]);
		this.ids = new SvelteSet();
	}

	async loadIdb() {
		this.posts = await getAllFavouritePosts();
		this.ids.clear();
		this.posts.forEach((x) => this.ids.add(x.id));
	}

	async restoreAll(posts: IndexedPost[]) {
		await replaceAllFavouritePosts(posts);
		this.posts = posts;
		this.ids.clear();
		this.posts.forEach((x) => this.ids.add(x.id));
	}

	toggleFavourite(post: kurosearch.Post) {
		if (this.ids.has(post.id)) {
			this.ids.delete(post.id);
			this.posts.splice(
				this.posts.findIndex((p) => p.id === post.id),
				1
			);
			removeFavouritePost(post.id);
		} else {
			const indexedPost: IndexedPost = { ...$state.snapshot(post), indexedAt: new Date() };
			this.ids.add(post.id);
			this.posts.push(indexedPost);
			addFavouritePost(indexedPost);
		}
	}
}

export const favouritePostsStore = new FavouritePostsState();

if (browser) {
	favouritePostsStore.loadIdb().catch((err) => console.error(err));
}
