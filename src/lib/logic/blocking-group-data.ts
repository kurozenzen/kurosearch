export const ALL_BLOCKING_GROUPS: readonly kurosearch.BlockingGroup[] = Object.freeze([
	'Loli',
	'Animal-Related',
	'Non-Consentual',
	'Gore'
]);

export const BLOCKING_GROUP_TAGS: Record<kurosearch.BlockingGroup, readonly string[]> =
	Object.freeze({
		Loli: Object.freeze(['young', 'younger', 'younger_*', 'young_*', 'lolita_*', 'loli*']),
		'Animal-Related': Object.freeze([
			'zoophilia',
			'zoo',
			'canine*',
			'equine*',
			'feral_*',
			'*_feral',
			'bestiality*',
			'zoophilia*',
			'animal'
		]),
		'Non-Consentual': Object.freeze([
			'captive',
			'captured',
			'defeated',
			'rape',
			'*_rape',
			'rape_*',
			'*_slave',
			'no_consent',
			'molestation',
			'non-consensual',
			'non-con',
			'scared',
			'forced'
		]),
		Gore: Object.freeze(['gore', 'necrophilia', 'amputee', 'guro', 'blood', 'amputed*'])
	});
