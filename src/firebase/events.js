import { logEvent } from 'firebase/analytics'
import { analytics } from './firebase'

export const logSearch = (search_term) =>
  logEvent(analytics, 'search', {
    search_term,
  })
