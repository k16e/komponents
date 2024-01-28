import { modal, setModal, unsetModal } from './store'
import { _q, _ql } from './snips'

const _modal = () => {
    if (!_q('[data-modal]')) return

    const
        trigger = _ql('[data-modal]'),
        html = document.documentElement,
        body = document.body,
        fix = () => body.classList.add('modal-active'),
        free = () => body.classList.remove('modal-active')

    trigger.map(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            modal.value ? unsetModal() : setModal()
        })
    })

    modal.subscribe(value => value ? fix() : free())
}

export default _modal