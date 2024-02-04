import { _q, _ql, _empty } from './snips'
import { _toast, _setToast, _unsetToast } from './store'
import gsap from 'gsap'

const
    tl = gsap.timeline({
        defaults: {
            duration: 0.3,
            autoAlpha: 0,
            opacity: 0,
            ease: 'back.out',
        }
    }),
    slideIn = {
        y: 0,
        visibility: 'visible',
        opacity: 1
    },
    slideOut = {
        y: '100%',
        visibility: 'hidden'
    }

const _runToast = () => {
    const
        toast = _q('[data-toast]'),
        p = _q('[data-toast-value]'),
        close = _q('[data-toast-close]'),
        dismiss = () => tl.to(toast, slideOut),
        display = () => tl.to(toast, slideIn)

    return {
        dismiss,
        display
    }
}

export default _runToast