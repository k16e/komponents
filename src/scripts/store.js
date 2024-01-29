import { atom } from 'nanostores'

export const
    topbar = atom(false),
    modal = atom(false)

export function setTopbar() { topbar.set(true) }
export function setModal() { modal.set(true) }

export function unsetTopbar() { topbar.set(false) }
export function unsetModal() { modal.set(false) }