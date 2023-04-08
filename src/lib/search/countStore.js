import { createDependentPersistentStore } from '../common/persistentStore'

const createCountStore = () => {
  const { subscribe, set } = createDependentPersistentStore('count', null)

  return {
    subscribe,
    set,
    reset() {
      set(0)
    },
  }
}

export default createCountStore()