import { createPersistentStore } from '../common/persistentStore'

export const isPersistedLocally = createPersistentStore('isPersistedLocally', false)
