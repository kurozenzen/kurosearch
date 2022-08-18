/**
 * @typedef {"+" | "-" | "~"} Modifier
 */

/** @type {readonly Modifier[]} */
const VALID_MODIFIERS = Object.freeze(['+', '-', '~'])

export const isValidModifier = (value) => {
  return VALID_MODIFIERS.includes(value)
}

export const getNextModifier = (currentModifier) => {
  if (!isValidModifier(currentModifier)) {
    throw new TypeError('Invalid modifier passed to getNextModifier')
  }

  const currentIndex = VALID_MODIFIERS.indexOf(currentModifier)
  const nextIndex = (currentIndex + 1) % VALID_MODIFIERS.length

  return VALID_MODIFIERS[nextIndex]
}

/** @type {Readonly<Record<Modifier, string>>} */
const SERIALIZED_MODIFIERS = Object.freeze({
  '+': '',
  '-': '-',
  '~': '',
})
export const serializeModifier = (value) => {
  if (!isValidModifier(value)) {
    throw TypeError('Invalid modifier passed to serializeModifier')
  }

  return SERIALIZED_MODIFIERS[value]
}
