import { gsap } from 'gsap'

const _zaps = () => {
    const
        tl = () => gsap.timeline({}),
        slideIn = (props) => ({
            opacity: 1,
            visibility: 'visible',
            y: 0,
            ease: 'back.out',
            ...props
        }),
        slideOut = () => ({
            opacity: 0,
            visibility: 0,
            y: 48,
            ease: 'back.in'
        }),
        slideOff = () => ({
            opacity: 0,
            visibility: 0,
            duration: .2,
            y: -48,
            ease: 'none'
        }),
        slideTop = () => ({ opacity: 1, visibility: 'visible', duration: 0.2, y: 0, ease: 'circ.out' }),
        slideBottom = () => ({ opacity: 0, visibility: 0, duration: 0.1, y: '100%', ease: 'circ.in' }),
        moveX = props => ({ opacity: 1, visibility: 'visible', duration: 0.3, ease: 'circ.out', ...props })

    return { tl, slideIn, slideOut, slideOff, slideTop, slideBottom, moveX }
}

export default _zaps