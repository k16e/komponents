import { gsap } from 'gsap'

const _gsap = () => {
    let tl = () => gsap.timeline({
        defaults: {
            autoAlpha: 1,
            duration: 0.3,
            ease: 'circ.out'
        }
    })

    const
        moveX = (el, props) => tl().to(el, { ...props }),
        slideOut = (el, props) => tl().to(el, { autoAlpha: 0, y: 48, ease: 'back.in', ...props }),
        slideIn = (el, props) => tl().to(el, { y: 0, ease: 'back.out', ...props }),
        slideTop = (el, props) => tl().to(el, { y: 0, ...props }),
        slideBottom = (el, props) => tl().to(el, { autoAlpha: 0, duration: 0.1, y: '100%', ease: 'circ.in' }),
        slideOff = (el, props) => tl().to(el, { y: 0, ease: 'back.out', ...props })

    return { moveX, slideOut, slideIn, slideTop, slideBottom, slideOff }
}

export default _gsap