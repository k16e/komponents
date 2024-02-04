import { _q, _ql, _empty } from './snips'
import { _toast, _setToast, _unsetToast } from './store'
import gsap from 'gsap'

const
    tl = gsap.timeline({
        defaults: {
            duration: .5,
            autoAlpha: 0
        }
    }),
    slideIn = {
        y: 0,
        opacity: 1,
        visibility: 'visible',
        ease: 'back.out',
    },
    slideOut = {
        y: '100%',
        opacity: 0,
        visibility: 0,
        ease: 'back.in',
    }

const _runToast = () => {
    const
        toast = _q('[data-toast]'),
        p = _q('[data-toast-value]'),
        close = _q('[data-toast-close]'),
        dismiss = () => tl.to(toast, slideOut),
        display = (msg) => {
            p.textContent = msg
            tl.to(toast, slideIn)
        }

    close.addEventListener('click', dismiss)

    return {
        dismiss,
        display
    }
}

export default _runToast