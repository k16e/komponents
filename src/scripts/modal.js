import { modal, setModal, unsetModal } from './store'
import { _q, _ql } from './snips'
import Click from './click'

const _modal = () => {
    if (!_q('[data-modal-trigger]')) return

    const
        trigger = _ql('[data-modal-trigger]'),
        close = _q('[data-modal-close]'),
        modalWindow = _q('[data-modal]'),
        html = document.documentElement,
        body = document.body,
        onn = () => {
            modalWindow.classList.remove('translate-x-full', 'opacity-0')
            modalWindow.classList.add('translate-x-0', 'opacity-100')
        },
        off = () => {
            modalWindow.classList.remove('translate-x-0', 'opacity-100')
            modalWindow.classList.add('translate-x-full', 'opacity-0')
            unsetModal()
        }

    trigger.map(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            modal.value ? unsetModal() : setModal()
        })
    })

    Click(close, off)
    modal.subscribe(value => value ? onn() : off())
}

export default _modal