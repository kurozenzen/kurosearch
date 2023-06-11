import { createDependentPersistentStore } from '../common/persistentStore'

const createCountStore = () => {
  /** @type {null | number} */
  const initial = null;
  const { subscribe, set } = createDependentPersistentStore('count', initial)

  return {
    subscribe,
    set,
    reset() {
      set(0)
    },
  }
}

export default createCountStore()
