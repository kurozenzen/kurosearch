export const MODIFIERS_ICONS = Object.freeze({
	'+': 'codicon codicon-plus',
	'-': 'codicon codicon-dash',
	'~': 'custom-icon custom-icon-wave'
} as const satisfies Record<kurosearch.TagModifier, string>);

export const MODIFIERS_HINTS = Object.freeze({
	'+': 'Included. Tags will be included in the search.',
	'-': 'Blocked. Tags will be blocked.',
	'~': 'Optional. At least one of all optional tags will on each post.'
} as const satisfies Record<kurosearch.TagModifier, string>);

export const MODIFIER_NAMES = Object.freeze({
	'+': 'include',
	'-': 'exclude',
	'~': 'optional'
} as const satisfies Record<kurosearch.TagModifier, string>);

export const MODIFIER_TITLES = Object.freeze({
	'+': 'Include tag',
	'-': 'Exclude tag',
	'~': 'Try including tag'
} as const satisfies Record<kurosearch.TagModifier, string>);
