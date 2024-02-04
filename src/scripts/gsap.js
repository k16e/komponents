import { gsap } from 'gsap'

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