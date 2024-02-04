import { _q, _ql, _empty } from './snips'
import { _toast, _setToast, _unsetToast } from './store'
import _zaps from './gsap'

const zap = _zaps()

const _runToast = () => {
    const
        toast = _q('[data-toast]'),
        p = _q('[data-toast-value]'),
        close = _q('[data-toast-close]'),
        dismiss = () => {
            zap.tl().to(toast, zap.slideOut())
            _unsetToast()
        },
        display = (msg) => {
            p.textContent = msg
            zap.tl().to(toast, zap.slideIn())
            _setToast()
            setTimeout(() => dismiss(), 5000)
        }

    close.addEventListener('click', dismiss)

    return {
        dismiss,
        display
    }
}

export default _runToast