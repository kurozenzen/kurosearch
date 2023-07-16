export const replaceHtmlEntities = (raw: string) =>
	raw
		.replaceAll('&#034;', '"')
		.replaceAll('&#038;', '&')
		.replaceAll('&#039;', "'")
		.replaceAll('&eacute;', 'é');
