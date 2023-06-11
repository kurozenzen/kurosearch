import { isValidModifier } from '../tag-modifier/modifier'

export const isValidName = (value) => {
  return typeof value === 'string' && value !== ''
}

export const isValidCount = (value) => {
  return typeof value === 'number'
}

export const isValidPageNumber = (value) => {
  return typeof value === 'number' && value >= 0
}

export const isValidSearchableTagsArray = (value) => {
  return Array.isArray(value) && (value.length === 0 || value.every(isValidSearchableTag))
}

export const isValidMinScore = (value) => {
  return typeof value === 'number' && value >= 0
}

export const isValidSearchableTag = (object) => {
  return isValidModifier(object.modifier) && isValidName(object.name)
}
