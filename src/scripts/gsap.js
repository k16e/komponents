import { gsap } from 'gsap'

const _gsaps = () => {
    gsap.defaults({
        autoAlpha: 1,
        duration: 0.3,
        ease: 'circ.out'
    })

    const
        moveX = (el, props) => gsap.to(el, { ...props }),
        slideOut = (el, props) => gsap.to(el, { autoAlpha: 0, y: 48, ease: 'back.in', ...props }),
        slideIn = (el, props) => gsap.to(el, { y: 0, ease: 'back.out', ...props }),
        slideTop = (el, props) => gsap.to(el, { y: 0, ...props }),
        slideBottom = (el, props) => gsap.to(el, { autoAlpha: 0, duration: 0.1, y: '100%', ease: 'circ.in' }),
        slideOff = (el, props) => gsap.to(el, { y: 0, ease: 'back.out', ...props })

    return { moveX, slideOut, slideIn, slideTop, slideBottom, slideOff }
}

export default _gsaps