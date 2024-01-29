import { atom } from 'nanostores'
import { map } from 'nanostores'

export const
    topbar = atom(false),
    modal = atom(false),
    product = map({})

export function setTopbar() { topbar.set(true) }
export function setModal() { modal.set(true) }
export function addProduct(obj) { product.set(obj) }

export function unsetTopbar() { topbar.set(false) }
export function unsetModal() { modal.set(false) }