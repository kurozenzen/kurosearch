<script lang="ts">
	import { formatTagname } from '$lib/logic/format-tag';
	import { TAG_TYPES_WITH_ICONS } from '$lib/logic/tag-type-data';
	import { MODIFIER_TITLES } from '$lib/logic/tag-modifier-data';
	import { longpress } from '$lib/actions/longpress';

	interface Props {
		tag: kurosearch.Tag;
		modifier?: kurosearch.TagModifier;
		oncontextmenu?: () => void;
		onclick?: () => void;
		onlongpress?: () => void;
	}

	let { tag, modifier, oncontextmenu, onclick, onlongpress }: Props = $props();

	// Memoize expensive computations
	let formattedTagName = $derived(formatTagname(tag.name));
	let dynamicTitle = $derived(MODIFIER_TITLES[modifier ?? '+']);
	let icon = $derived(TAG_TYPES_WITH_ICONS[tag.type] ?? 'no-icon');

	const handleContextMenu = (e: MouseEvent) => {
		if (oncontextmenu) {
			e.preventDefault();
			oncontextmenu();
		} else if (onlongpress) {
			e.preventDefault();
		}
	};
</script>

<li>
	<button
		type="button"
		title={dynamicTitle}
		{onclick}
		oncontextmenu={handleContextMenu}
		use:longpress={onlongpress}
		class:active={modifier === '+'}
		class:negated={modifier === '-'}
		class:optional={modifier === '~'}
		class={icon}
	>
		{formattedTagName}
	</button>
</li>

<style lang="scss">
	@use 'sass:map';

	// CSS Custom Properties for better performance

	// Color scheme maps (kept as SCSS variables for compilation efficiency)
	$default-colors: (
		background: var(--background-2),
		background-hover: var(--background-3),
		color: var(--text)
	);

	$accent-colors: (
		background: var(--accent),
		background-hover: var(--accent-light),
		color: var(--text-accent)
	);

	$modifier-colors: (
		active: (
			background: var(--tag-active-background),
			background-hover: var(--tag-active-background-hover),
			color: var(--tag-active-color)
		),
		negated: (
			background: var(--tag-negated-background),
			background-hover: var(--tag-negated-background-hover),
			color: var(--tag-negated-color)
		),
		optional: (
			background: var(--tag-optional-background),
			background-hover: var(--tag-optional-background-hover),
			color: var(--tag-optional-color)
		)
	);

	$tag-type-colors: (
		codicon-edit: (
			background: var(--artist-background),
			background-hover: var(--artist-background-hover),
			color: var(--artist-color)
		),
		codicon-person: (
			background: var(--character-background),
			background-hover: var(--character-background-hover),
			color: var(--character-color)
		),
		codicon-folder: (
			background: var(--copyright-background),
			background-hover: var(--copyright-background-hover),
			color: var(--copyright-color)
		),
		codicon-info: (
			background: var(--metadata-background),
			background-hover: var(--metadata-background-hover),
			color: var(--metadata-color)
		),
		codicon-tag: (
			background: var(--general-background),
			background-hover: var(--general-background-hover),
			color: var(--general-color)
		)
	);

	// Optimized mixins with better performance
	@mixin tag-base-style {
		display: inline-flex;
		align-items: center;
		gap: var(--tag-gap);
		height: var(--tag-height);
		border-radius: var(--tag-border-radius);
		font-size: var(--tag-font-size);
		user-select: none;
		padding-inline: 6px 12px;
		border: none;
		cursor: pointer;
		// Use transform for better performance than changing background
		transform: translateZ(0); // Force GPU acceleration
	}

	@mixin color-scheme($colors) {
		background-color: map.get($colors, background);
		color: map.get($colors, color);
		--bg-hover: #{map.get($colors, background-hover)};
	}

	@mixin hover-transition {
		@media (hover: hover) {
			// Use will-change for better performance during transitions
			will-change: background-color;
			transition: background-color 150ms ease-out;

			&:hover {
				background-color: var(--bg-hover);
			}
		}
	}

	// Main button styles - simplified and optimized
	button {
		@include tag-base-style;
		@include color-scheme($default-colors);
		@include hover-transition;

		// Optimize active state
		&:active {
			background-color: var(--background-1);
			transform: translateZ(0) scale(0.98);
		}

		// No icon modifier
		&.no-icon {
			padding-inline: 12px;
		}

		// Modifier states - simplified
		&.active {
			@include color-scheme(map.get($modifier-colors, active));
		}

		&.optional {
			@include color-scheme(map.get($modifier-colors, optional));
			font-style: italic;
			opacity: var(--tag-optional-opacity, 0.7);
		}

		&.negated {
			@include color-scheme(map.get($modifier-colors, negated));
			text-decoration: line-through;
			opacity: var(--tag-negated-opacity, 0.7);
		}

		// Supertag - simplified
		&.supertag {
			@include color-scheme($accent-colors);
			border: dashed var(--supertag-border-width) var(--text-accent);
		}

		// Tag type colors - more efficient selector
		@each $class, $colors in $tag-type-colors {
			&.#{$class}:not(.active):not(.optional):not(.negated) {
				@include color-scheme($colors);
			}
		}
	}
</style>
