/**
 * @typedef AdZone
 * @property {number} id
 * @property {number} width
 * @property {number} height
 */

/** @type {AdZone} */
const EMPTY_ZONE = { id: 0, width: 0, height: 0 }

/** @type {AdZone[]} */
const AD_ZONES = [
  { id: 996911, width: 300, height: 112 },
  { id: 996914, width: 728, height: 102 },
]

const fitting_zones = AD_ZONES.filter((zone) => zone.width < window.innerWidth)
let best_fit = EMPTY_ZONE

for (const fit of fitting_zones) {
  if (fit.width > best_fit?.width) {
    best_fit = fit
  }
}

/**
 * @returns {AdZone}
 */
export const getAdZone = () => best_fit
