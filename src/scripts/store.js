import { atom } from 'nanostores'

export const
    topbar = atom(false),
    modal = atom(false),
    _products = atom([]),
    _productsNew = atom([]),
    _affiliates = atom([])

export function setTopbar() { topbar.set(true) }
export function setModal() { modal.set(true) }
export function _addProducts(item) { _products.set(item) }
export function _addProductsNew(item) { _productsNew.set(item) }
export function _addAffiliates(item) { _affiliates.set(item) }

export function unsetTopbar() { topbar.set(false) }
export function unsetModal() { modal.set(false) }