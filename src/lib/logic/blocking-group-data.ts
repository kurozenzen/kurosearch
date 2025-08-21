export const ALL_BLOCKING_GROUPS: readonly kurosearch.BlockingGroup[] = Object.freeze([
	'Loli',
	'AI-Generated',
	'Animal-Related',
	'Non-Consentual',
	'Gore',
	'Scat',
	'Vore'
]);

export const BLOCKING_GROUP_TAGS: Record<kurosearch.BlockingGroup, readonly string[]> =
	Object.freeze({
		Loli: Object.freeze(['young*', 'loli*']),
		'AI-Generated': Object.freeze(['ai_generated']),
		'Animal-Related': Object.freeze([
			'zoophilia',
			'zoo',
			'canine*',
			'equine*',
			'*feral*',
			'bestiality',
			'zoophilia',
			'animal'
		]),
		'Non-Consentual': Object.freeze([
			'captive',
			'captured',
			'defeated',
			'rape',
			'*_slave',
			'no_consent',
			'molestation',
			'non-con*',
			'scared',
			'forced'
		]),
		Gore: Object.freeze(['gore', 'necrophilia', 'amputee', 'guro', 'blood']),
		Scat: Object.freeze(['scat', 'diaper', 'fart']),
		Vore: Object.freeze(['vore'])
	});
