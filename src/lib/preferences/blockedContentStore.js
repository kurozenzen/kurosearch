import { createDependentPersistentStore } from '../common/persistentStore'

/**
 * @typedef {import('../../types/definitions').BlockingGroup} BlockingGroup[]
 */

const createBlockListStore = () => {
  /** @type {BlockingGroup[]} */
  const initial = []
  const { subscribe, update } = createDependentPersistentStore('blockedContent', initial)

  return {
    subscribe,
    /** @param {BlockingGroup} groupName */
    toggle(groupName) {
      update((current) => {
        if (current.includes(groupName)) {
          return current.filter((x) => x !== groupName)
        } else {
          return [...current, groupName]
        }
      })
    },
  }
}

export default createBlockListStore()
