import { createDependentPersistentStore } from '../common/persistentStore'

const createBlockListStore = () => {
  /** @type {import('src/types/blocking-groups/BlockingGroup').BlockingGroup[]} */
  const initial = []
  const { subscribe, update } = createDependentPersistentStore('blockedContent', initial)

  return {
    subscribe,
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
