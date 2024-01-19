import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const topbar = atom(false)

export function setTopbar () { topbar.set(true) }
export function unsetTopbar () { topbar.set(false) }