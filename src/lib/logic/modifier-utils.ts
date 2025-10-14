export const MODIFIER_ORDER = ['+', '~', '-'] as const satisfies kurosearch.TagModifier[];
const NULLABLE_MODIFIER_ORDER = [
	...MODIFIER_ORDER,
	undefined
] as const satisfies kurosearch.NullableTagModifier[];

export const getNextModifier = (modifier: kurosearch.TagModifier) => {
	const index = MODIFIER_ORDER.indexOf(modifier as any);
	if (index === -1) {
		return MODIFIER_ORDER[0];
	}
	const nextIndex = (index + 1) % MODIFIER_ORDER.length;
	return MODIFIER_ORDER[nextIndex];
};

export const getNextModifierNullable = (modifier: kurosearch.NullableTagModifier) => {
	const index = NULLABLE_MODIFIER_ORDER.indexOf(modifier as any);
	if (index === -1) {
		return NULLABLE_MODIFIER_ORDER[0];
	}
	const nextIndex = (index + 1) % NULLABLE_MODIFIER_ORDER.length;
	return NULLABLE_MODIFIER_ORDER[nextIndex];
};

export const getIndexOfModifier = (modifier: kurosearch.NullableTagModifier) =>
	modifier === undefined ? 0 : MODIFIER_ORDER.indexOf(modifier as any);
