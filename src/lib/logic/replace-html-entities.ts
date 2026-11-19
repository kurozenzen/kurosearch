const HTML_ENTITY_TABLE = Object.freeze({
	'&#034;': '"',
	'&#038;': '&',
	'&#039;': "'",
	'&eacute;': 'é'
});

export const replaceHtmlEntities = (raw: string) =>
	Object.entries(HTML_ENTITY_TABLE).reduce(
		(result, [entity, readable]) => result.replaceAll(entity, readable),
		raw
	);

export const insertHtmlEntities = (raw: string) =>
	Object.entries(HTML_ENTITY_TABLE).reduce(
		(result, [entity, readable]) => result.replaceAll(readable, entity),
		raw
	);
