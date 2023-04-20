/** @typedef {"Loli" | "Animal-Related" | "Non-Consentual"} BlockingGroup */

/** @type {BlockingGroup[]} */
export const ALL_BLOCKING_GROUPS = ['Loli', 'Animal-Related', 'Non-Consentual']

/** @type {Record<BlockingGroup, string[]>} */
export const BLOCKING_GROUP_TAGS = {
  Loli: ['young', 'younger', 'younger_*', 'young_*', 'lolita_*', 'loli*'],
  'Animal-Related': [
    'zoophilia',
    'zoo',
    'canine*',
    'equine*',
    'feral_*',
    '*_feral',
    'bestiality*',
    'zoophilia*',
    'animal',
  ],
  'Non-Consentual': [
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
    'forced',
  ],
}
