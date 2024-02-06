import { gsap } from 'gsap'

const _zaps = () => {
    const
        tl = () => gsap.timeline({}),
        slideIn = (props) => ({
            y: 0,
            opacity: 1,
            visibility: 'visible',
            ease: 'back.out',
            ...props
        }),
        slideOut = () => ({
            y: 48,
            opacity: 0,
            visibility: 0,
            ease: 'back.in'
        }),
        slideOff = () => ({
            y: -48,
            opacity: 0,
            visibility: 0,
            ease: 'none',
            duration: .2
        }),
        slideTop = () => ({ y: 0, opacity: 1, visibility: 'visible', duration: 0.2, ease: 'circ.out' }),
        slideBottom = () => ({ y: '100%', opacity: 0, visibility: 0, duration: 0.1, ease: 'circ.in' }),
        moveX = props => ({ opacity: 1, visibility: 'visible', duration: 0.3, ease: 'circ.out', ...props })

    return { tl, slideIn, slideOut, slideOff, slideTop, slideBottom, moveX }
}

export default _zaps