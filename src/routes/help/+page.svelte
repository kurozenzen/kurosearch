<script>
	import DetailedTag from '$lib/components/kurosearch/tag-detailed/DetailedTag.svelte';
	import SimpleTag from '$lib/components/kurosearch/tag-simple/SimpleTag.svelte';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import SummaryCard from '$lib/components/pure/summary-card/SummaryCard.svelte';
	import { MODIFIERS_ICONS } from '$lib/logic/tag-modifier-data';
	import { createModifiedTag, createTag } from '$lib/logic/tag-utils';
</script>

<svelte:head>
	<title>kurosearch - Documentation</title>
	<meta
		name="description"
		content="Documentation for kurosearch. This page explains how to use the website."
	/>
</svelte:head>

<section>
	<Heading1>Documentation</Heading1>

	<div class="cards">
		<SummaryCard
			id="search"
			icon="search"
			title="Searching"
			description="Explains how the searching in the app works on a high level."
		/>
		<SummaryCard
			id="tags"
			icon="tag"
			title="Tags"
			description="Get information on tags, the different types and how to use them in a search."
		/>
		<SummaryCard
			id="account"
			icon="account"
			title="Account & Data"
			description="Understand what data is collected from you, where it is stored and how you can control it."
		/>
		<SummaryCard
			id="development"
			icon="code"
			title="Development"
			description="Read up on how kurosearch works under the hood. See the technologies used and how they fit together."
		/>
	</div>

	<h2 id="search">Searching</h2>

	<p>
		All searching in kurosearch is based on so-called <em>tags</em>. In that sense it is not like
		Google. With Google you can search for whole sentences or questions. In kurosearch you have to
		search for one of the predefined tags. Luckily, there are quite a lot of them.
	</p>

	<p>
		You can find all of them at:
		<a href="https://rule34.xxx/index.php?page=tags&s=list" target="_blank">rule34.xxx</a>
	</p>

	<p>
		The results you get when you click search are called <em>posts</em>. If you start a search
		without any tags, you will get all posts.
	</p>

	<Heading3>Number Of Results</Heading3>

	<p>
		In addition to the posts themselves you can also see how many posts matched your search. The
		count is located to the left immediately above the first post.
	</p>

	<p>
		If your search did not match any posts that means you search for some tags that do not have any
		posts in common. You will also get a cute error message saying so.
	</p>

	<Heading3>Sorting results</Heading3>

	<p>
		Once you have searched, you can sort your results by using the selector above the first post. At
		the moment there are only two options available.
	</p>

	<ul>
		<li>
			<em>Date</em>
			<p>
				This is the default sorting. It will order the results in a way that newer results appear at
				the top of the search and older results at the bottom. This is useful if you want to see new
				posts.
			</p>
		</li>
		<li>
			<em>Score</em>
			<p>
				This option will order posts according to the number of likes they received. Posts with more
				likes will be shown first. This is useful if you are interested in the most popular posts.
			</p>
		</li>
		<li>
			<em>Updated</em>
			<p>Orders posts by when they were last update. More recent means higher up in the search</p>
		</li>
	</ul>

	<Heading3>Filtering results</Heading3>

	<p>
		In addition to sorting kurosearch also support a simple form of filtering. Currently, only
		filtering by score is supported.
	</p>

	<p>The filter selection is located at the top right of the first post</p>

	<h2 id="tags">Tags</h2>

	<p>
		When you input something into the searchbar you will get some suggestions. These things are
		called <em>tags</em>. They will usually be presented like this.
	</p>

	<div class="flex-row">
		<DetailedTag
			tag={{ modifier: '+', name: 'some_tag_you_search_for', count: 124232, type: 'copyright' }}
			active
		/>
		<DetailedTag tag={{ modifier: '+', name: 'some_tag', count: 1123, type: 'ambiguous' }} />
	</div>

	<p>A tag is characterised by four things.</p>

	<ul>
		<li>Name</li>
		<li>Type</li>
		<li>Count</li>
		<li>Modifier</li>
	</ul>

	<Heading3>Name</Heading3>

	<p>
		The name of the tag is what you actually search for. It is usually pretty descriptive and well
		defined. Oftentimes, there are multiple tags for the same thing though so it might take a bit of
		trial and error to find the best one for you.
	</p>

	<Heading3>Type</Heading3>

	<p>
		The type indicates what kind of tag it is. It is displayed in form of an icon right before the
		name of the tag. the possible types are the following.
	</p>

	<ul>
		<li>
			<em>Artist</em>
			<p>Target artists or content creators.</p>
			<div class="flex-row">
				<DetailedTag tag={createModifiedTag('+', 'aroma_sensei', 3000, 'artist')} />
				<SimpleTag tag={createTag('aroma_sensei', 3000, 'artist')} />
			</div>
		</li>
		<li>
			<em>Character</em>
			<p>Indicates that the tag is targeting a character of some sort.</p>
			<div class="flex-row">
				<DetailedTag tag={createModifiedTag('+', 'samus_aran', 16000, 'character')} />
				<SimpleTag tag={createTag('samus_aran', 16000, 'character')} />
			</div>
		</li>
		<li>
			<em>Copyright</em>
			<p>Targets a certain franchise or similar.</p>
			<div class="flex-row">
				<DetailedTag tag={createModifiedTag('+', 'harry_potter', 5800, 'copyright')} />
				<SimpleTag tag={createTag('harry_potter', 5800, 'copyright')} />
			</div>
		</li>
		<li>
			<em>Metadata</em>
			<p>Tags of this type are information about the post itself and not the content.</p>
			<div class="flex-row">
				<DetailedTag tag={createModifiedTag('+', 'animated', 294000, 'metadata')} />
				<SimpleTag tag={createTag('animated', 294000, 'metadata')} />
			</div>
		</li>
		<li>
			<em>Supertag</em>
			<p>
				Indicates that the tag is not a simple tag, but rather a collection of tags called a
				supertag.
			</p>
			<DetailedTag tag={createModifiedTag('+', 'my_tag_collection', 5, 'supertag')} />
		</li>
	</ul>

	<Heading3>Count</Heading3>

	<p>The count of a tag displays how many post are tagged with it.</p>

	<p>For supertags the count shows how many tags are in it.</p>

	<Heading3>Modifier</Heading3>

	<p>
		In kurosearch tags can have modifiers that change how they influence your search. You can change
		the modifier directly in the searchbar. Intuitively, you would think like this: Picking a tag
		means posts in the results will have it, right? In kurosearch this is done with the <em
			>include</em
		> modifier.
	</p>

	<p>The available modifiers are:</p>

	<ul>
		<li>
			<em>Include</em> (+)
			<p>
				This is the default modifier. Using it with tags will make the search include them. This
				means that all posts in the results will have every include tag on them. Use this modifier
				for all things that you definitely want to see.
			</p>
			<div class="flex-row">Icon:<i class={MODIFIERS_ICONS['+']} /></div>
			<div class="flex-row">
				Example:
				<DetailedTag tag={createModifiedTag('+', 'good', 5, 'general')} />
			</div>
		</li>
		<li>
			<em>Exclude</em> (-)
			<p>
				The exclude modifier is subtractive. If you exclude a tag, the results will NOT have that
				tag. Even if a post would be included in your search otherwise, if it has one of your
				exclude tags on it, it will not be shown. Use this for all things that you dislike and don't
				want to see at all.
			</p>
			<p>
				<em>TIP:</em> You can create a supertag with all your exclude tags so they are saved between
				site visits. That makes excluding your turnoffs really easy.
			</p>
			<div class="flex-row">Icon:<i class={MODIFIERS_ICONS['-']} /></div>
			<div class="flex-row">
				Example:
				<DetailedTag tag={createModifiedTag('-', 'bad', 5, 'general')} />
			</div>
		</li>
		<li>
			<em>Optional</em> (~)
			<p>
				The optional tags are the most complicated ones. When adding multiple optional tags, all
				results will include at least one of the optional tags. That means that optional tags only
				become effective once you have two of them. Optional tags are useful when there are multiple
				tags for the same thing or you are not searching for one specific thing but multiple
				instead.
			</p>
			<p>To understand it better here is an example. If you search for the following tags...</p>
			<div class="flex-row">
				<DetailedTag tag={createModifiedTag('~', 'princess_peach', 16000, 'character')} />
				<DetailedTag tag={createModifiedTag('~', 'princess_zelda', 13000, 'character')} />
				<DetailedTag tag={createModifiedTag('~', 'princess_rosalina', 7400, 'character')} />
				<DetailedTag tag={createModifiedTag('~', 'princess_daisy', 6900, 'character')} />
			</div>
			<p>
				...then all results will have at least one of the princesses in them, but not neccessarily
				all of them.
			</p>
			<div class="flex-row">Icon:<i class={MODIFIERS_ICONS['~']} /></div>
		</li>
	</ul>

	<h2 id="account">Account</h2>
	<span>To Do</span>

	<h2 id="development">Development</h2>
	<span>To Do</span>
</section>

<ScrollUpButton />

<style>
	section {
		padding-inline: var(--grid-gap);
	}

	h2 {
		color: var(--text-highlight);
		font-size: 2.25em;
		padding-block-start: 4rem;
		padding-block-end: var(--grid-gap);
	}

	em {
		color: var(--text-highlight);
	}

	p,
	li {
		line-height: 1.75rem;
		padding-block: var(--small-gap);
		font-size: var(--text-size-large);
	}

	ul {
		padding-inline-start: 2rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(1, minmax(0px, 1fr));
		gap: var(--grid-gap);
	}

	@media (min-width: 768px) {
		.cards {
			grid-template-columns: repeat(2, minmax(0px, 1fr));
			gap: 2rem;
		}
	}

	.flex-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--grid-gap);
	}
</style>
