import { _q, _ql, _empty } from './snips'
import _zaps from './zaps'

const zap = _zaps()

const _runToast = () => {
    const
        toast = _q('[data-toast]'),
        p = _q('[data-toast-value]'),
        close = _q('[data-toast-close]'),
        dismiss = () => zap.slideOut(toast),
        display = (msg) => {
            p.textContent = msg
            zap.slideIn(toast)
            setTimeout(() => dismiss(), 5000)
        }

    close.addEventListener('click', dismiss)

    return {
        dismiss,
        display
    }
}

export default _runToast