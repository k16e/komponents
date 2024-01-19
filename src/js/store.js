import { atom } from 'nanostores'

export const $headerUp = atom(false)

export function $activateHeader () { $headerUp.set(true) }
export function $deactivateHeader () { $headerUp.set(false) }