import { modal, setModal, unsetModal } from './store'
import { _q, _ql } from './snips'

const _modal = () => {
    if (!_q('[data-modal]')) return

    const
        trigger = _ql('[data-modal]')

    trigger.map(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            modal.value ? unsetModal() : setModal()
            console.log(modal.value)
        })
    })


    console.log(modal)
}

export default _modal