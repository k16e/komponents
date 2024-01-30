import { modal, setModal, unsetModal } from './store'
import { _q, _ql } from './snips'

const _modal = () => {
    if (!_q('[data-modal-trigger]')) return

    const
        trigger = _ql('[data-modal-trigger]'),
        close = _q('[data-modal-close]'),
        window = _q('[data-modal]'),
        slots = _ql('[data-modal-display]'),
        inactive = ['sr-only'],
        active = ['overflow-auto', 'h-full', 'not-sr-only'],
        onn = () => {
            window.classList.remove('translate-x-full', 'opacity-0')
            window.classList.add('translate-x-0', 'opacity-100')
        },
        off = () => {
            window.classList.remove('translate-x-0', 'opacity-100')
            window.classList.add('translate-x-full', 'opacity-0')
            slots.map(el => el.classList.add(...inactive))
            unsetModal()
        },
        display = (e) => {
            e.preventDefault()

            const
                target = e.target,
                attr = target.getAttribute('data-display'),
                slot = slots.find(el => (el.dataset.modalDisplay === attr))

            slot.classList.remove(...inactive)
            slot.classList.add(...active)
            modal.value ? unsetModal() : setModal()
        }

    slots.map(el => el.classList.add(...inactive))
    trigger.map(el => el.addEventListener('click', e => display(e)))
    close.addEventListener('click', () => off())

    modal.subscribe(value => value ? onn() : off())
}

export default _modal