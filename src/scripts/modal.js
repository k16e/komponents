import { modal, setModal, unsetModal } from './store'
import { _q, _ql } from './snips'

const _modal = () => {
    if (!_q('[data-modal]')) return

    const
        trigger = _ql('[data-modal]'),
        html = document.documentElement,
        fix = () => html.classList.add('overflow-hidden'),
        free = () => html.classList.remove('overflow-hidden')

    trigger.map(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            modal.value ? unsetModal() : setModal()
            console.log(modal.value)
        })
    })

    modal.subscribe(value => value ? fix() : free())

    console.log(modal)
}

export default _modal