import { _q, _ql, _empty } from './snips'
import _gsap from './gsap'

const g = _gsap()

export default function _runToast() {
    const
        toast = _q('[data-toast]'),
        p = _q('[data-toast-value]'),
        close = _q('[data-toast-close]'),
        dismiss = () => g.slideOut(toast),
        display = (msg) => {
            p.textContent = msg
            g.slideIn(toast)
            setTimeout(() => dismiss(), 5000)
        }

    close.addEventListener('click', dismiss)

    return { dismiss, display }
}