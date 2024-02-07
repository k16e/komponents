import { _q, _ql, _empty } from './snips'
import _gsap from './gsap'

const gsap = _gsap()

const _runToast = () => {
    const
        toast = _q('[data-toast]'),
        p = _q('[data-toast-value]'),
        close = _q('[data-toast-close]'),
        dismiss = () => gsap.slideOut(toast),
        display = (msg) => {
            p.textContent = msg
            gsap.slideIn(toast)
            setTimeout(() => dismiss(), 5000)
        }

    close.addEventListener('click', dismiss)

    return {
        dismiss,
        display
    }
}

export default _runToast