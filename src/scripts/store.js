import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const
    topbar = atom(false),
    modal = atom(false),
    _toast = persistentAtom('toast', false),
    _products = atom([]),
    _productsNew = atom([]),
    _affiliates = atom([]),
    _affiliate = persistentAtom('affiliate', '')

export function setTopbar() { topbar.set(true) }
export function setModal() { modal.set(true) }
export function _setToast() { _toast.set(true) }

export function _addProducts(item) { _products.set(item) }
export function _addProductsNew(item) { _productsNew.set(item) }
export function _addAffiliates(item) { _affiliates.set(item) }
export function _addAffiliate(item) { _affiliate.set(item) }

export function unsetTopbar() { topbar.set(false) }
export function unsetModal() { modal.set(false) }
export function _unsetToast() { _toast.set(false) }