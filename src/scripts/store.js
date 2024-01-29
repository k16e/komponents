import { atom } from 'nanostores'

export const
    topbar = atom(false),
    modal = atom(false),
    _products = atom([])

export function setTopbar() { topbar.set(true) }
export function setModal() { modal.set(true) }
export function _addProducts(products) { _products.set(products) }

export function unsetTopbar() { topbar.set(false) }
export function unsetModal() { modal.set(false) }