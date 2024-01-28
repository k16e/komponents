import { modal, setModal, unsetModal } from './store'
import { _q, _ql } from './snips'

const _modal = () => {
    if (!_q('[data-modal]')) return

    const
        newProducts = _ql('[data-modal]')

    console.log(newProducts)
}

export default _modal