import { modal, setModal, unsetModal } from './store'
import { _q, _ql } from './snips'

const _backdrop = () => {
    if (!_q('[data-backdrop]')) return

    const
        body = document.body,
        backdrop = _q('[data-backdrop]'),
        onn = () => {
            backdrop.classList.remove('opacity-0', 'invisible')
            backdrop.classList.add('opacity-70')
            body.style.overflow = 'hidden'
        },
        off = () => {
            backdrop.classList.add('opacity-0')
            backdrop.classList.remove('opacity-70')
            setTimeout(() => backdrop.classList.add('invisible'), 300)
            body.style.overflow = ''
            unsetModal()
        }

    modal.subscribe(value => value ? onn() : off())
    backdrop.addEventListener('click', () => {
        off()
    })
}

export default _backdrop