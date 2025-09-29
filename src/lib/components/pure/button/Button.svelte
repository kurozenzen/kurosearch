<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export interface ButtonProps extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'custom';
		size?: 'small' | 'medium' | 'large';
		children?: Snippet;
	}

	let {
		variant = 'primary',
		size = 'medium',
		class: className = '',
		children,
		...restProps
	}: ButtonProps = $props();

	let type = $derived(restProps.type || 'button');
	let computedClasses = $derived(`button--${variant} button--${size} ${className} button`.trim());
</script>

<button {type} {...restProps} class={computedClasses}>
	{@render children?.()}
</button>

<style lang="scss">
	@use 'sass:map';

	$button-sizes: (
		small: (
			height: var(--line-height),
			padding-inline: 1rem,
			font-size: 0.875rem
		),
		medium: (
			height: var(--box-height),
			padding-inline: var(--box-height),
			font-size: inherit
		),
		large: (
			height: calc(var(--box-height) * 1.2),
			padding-inline: calc(var(--box-height) * 1.2),
			font-size: 1.125rem
		)
	);

	$button-variants: (
		primary: (
			color: var(--text-accent),
			background: var(--accent),
			background-hover: var(--accent-light)
		),
		secondary: (
			color: var(--text),
			background: var(--background-1),
			background-hover: var(--background-2)
		)
	);

	// Mixins for better reusability
	@mixin button-size($size-config) {
		height: map.get($size-config, height);
		padding-inline: map.get($size-config, padding-inline);
		font-size: map.get($size-config, font-size);
	}

	@mixin button-variant($variant-config) {
		color: map.get($variant-config, color);
		background-color: map.get($variant-config, background);

		@media (hover: hover) {
			&:hover {
				background-color: map.get($variant-config, background-hover);
			}
		}

		&:focus-visible {
			outline: 2px solid map.get($variant-config, background);
			outline-offset: 2px;
		}

		&:active {
			background-color: map.get($variant-config, background);
			filter: brightness(0.9);
			transform: translateY(1px);
		}
	}

	@mixin button-disabled-state {
		background-color: var(--background-2) !important;
		color: var(--text-disabled, rgba(128, 128, 128, 0.6)) !important;
		cursor: not-allowed !important;
		filter: none !important;
		transform: none !important;

		&:hover,
		&:focus-visible,
		&:active {
			background-color: var(--background-2) !important;
			color: var(--text-disabled, rgba(128, 128, 128, 0.6)) !important;
		}
	}

	// Base button class
	.button {
		/* CSS custom properties with fallbacks */
		--button-padding-inline: var(--box-height);
		--button-height: var(--box-height);
		--button-border-radius: var(--border-radius);
		--button-font-size: inherit;
		--button-font-weight: 500;

		// New properties for icon button customization
		--button-width: auto;
		--button-min-height: var(--button-height);
		--button-aspect-ratio: auto;

		// Reset styles
		border: none;
		margin: 0;
		padding: 0;
		background: none;

		// Base styling
		width: var(--button-width);
		min-height: var(--button-min-height);
		aspect-ratio: var(--button-aspect-ratio);
		@include button-size(map.get($button-sizes, medium));
		border-radius: var(--button-border-radius);
		cursor: pointer;
		font-family: inherit;
		font-weight: var(--button-font-weight);
		font-size: var(--button-font-size);
		text-align: center;
		text-transform: uppercase;
		white-space: nowrap;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--small-gap, 0.5rem);

		// Smooth transitions
		transition: all var(--default-transition-behaviour, 0.2s ease);

		// Focus handling for accessibility
		&:focus {
			outline: none;
		}

		&:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}

		// Disabled state
		&:disabled {
			@include button-disabled-state;
		}

		// Loading state
		&.loading {
			position: relative;
			color: transparent !important;

			&::after {
				content: '';
				position: absolute;
				width: 16px;
				height: 16px;
				border: 2px solid transparent;
				border-top: 2px solid currentColor;
				border-radius: 50%;
				animation: button-spin 1s linear infinite;
			}
		}

		// Icon-only button
		&.icon-only {
			--button-padding-inline: calc(var(--button-height) / 2);
			aspect-ratio: 1;
		}

		// Full-width button
		&.full-width {
			width: 100%;
		}
	}

	// Size variants using the map and mixin
	@each $size, $config in $button-sizes {
		@if $size != medium {
			.button--#{$size} {
				@include button-size($config);
			}
		}
	}

	// Color variants using the map and mixin
	@each $variant, $config in $button-variants {
		.button--#{$variant}:not(:disabled) {
			@include button-variant($config);
		}
	}

	// Custom variant for extensibility
	// Use .button--custom class and override with CSS custom properties or additional classes

	// Animation keyframes
	@keyframes button-spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	// Responsive adjustments
	@media (max-width: 768px) {
		.button {
			// Slightly larger touch targets on mobile
			min-height: 44px;
		}

		.button--small {
			min-height: 36px;
		}
	}

	// High contrast mode support
	@media (prefers-contrast: more) {
		.button:not(:disabled) {
			border: 2px solid currentColor;
		}
	}

	// Reduced motion support
	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}

		.button.loading::after {
			animation: none;
		}
	}
</style>
