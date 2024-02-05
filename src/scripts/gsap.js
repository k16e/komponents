import { gsap } from 'gsap'

const _zaps = () => {
    const
        tl = () => gsap.timeline({
            defaults: {
                duration: .5,
                autoAlpha: 0
            }
        }),
        slideIn = () => ({
            y: 0,
            opacity: 1,
            visibility: 'visible',
            ease: 'back.out',
        }),
        slideOut = () => ({
            y: 48,
            opacity: 0,
            visibility: 0,
            ease: 'back.in',
        }),
        slideOff = () => ({
            y: -48,
            opacity: 0,
            visibility: 0,
            ease: 'none',
            duration: .2
        })

    return { tl, slideIn, slideOut, slideOff }
}

export default _zaps