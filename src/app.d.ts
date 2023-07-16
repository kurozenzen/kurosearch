// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace kurosearch {
		type BlockingGroup = 'Loli' | 'Animal-Related' | 'Non-Consentual';
		type TagModifier = '+' | '-' | '~';
		type TagType =
			| 'general'
			| 'character'
			| 'ambiguous'
			| 'artist'
			| 'copyright'
			| 'rating'
			| 'source'
			| 'metadata'
			| 'supertag'
			| 'tag';
		type PostType = 'image' | 'gif' | 'video';
		type ActiveTag = {
			modifier: TagModifier;
			name: string;
			count: number;
			type: TagType;
		};
		type Suggestion = {
			type: TagType;
			label: string;
			count: number;
		};
		type Tag = {
			name: string;
			count: number;
			type: TagType;
		};
		type SearchableTag = {
			modifier: TagModifier;
			name: string;
		};
		type Post = {
			preview_url: string;
			sample_url: string;
			file_url: string;
			comment_count: number;
			height: number;
			id: number;
			change: number;
			parent_id: number | undefined;
			rating: string;
			sample_height: number;
			sample_width: number;
			score: number;
			source: string;
			status: string;
			tags: Tag[];
			width: number;
			type: string;
		};
		type SortProperty = 'id' | 'score' | 'updated';
		type SortDirection = 'asc' | 'desc';
		type ScoreComparator = '>=' | '<=';
		type Supertag = {
			name: string;
			description: string;
			tags: SearchableTag[];
		};
		type Rating = 'safe' | 'questionable' | 'explicit' | 'all';
	}

	namespace r34 {
		type Post = {
			height: string;
			score: string;
			preview_url: string;
			file_url: string;
			parent_id: string;
			sample_url: string;
			sample_width: string;
			sample_height: string;
			rating: string;
			tag_info: r34.Tag[];
			id: string;
			width: string;
			change: string;
			comment_count: string;
			status: string;
			source: string;
		};
		type Tag = {
			tag: string;
			count: number;
			type: TagType;
		};
		type Suggestion = {
			value: string;
			label: string;
		};
	}
}

export {};
