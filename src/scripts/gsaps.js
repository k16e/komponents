import { gsap } from 'gsap'

const _zips = () => {
    let tl = () => gsap.timeline({
        defaults: { opacity: 1, visibility: 'visible', duration: 0.3, ease: 'circ.out',  }
    })

    const
        moveX = (el, props) => tl().to(el, { ...props }),
        slideOut = (el, props) => tl().to(el, { opacity: 0, visibility: 0, y: 48, ease: 'back.in', ...props }),
        slideIn = (el, props) => tl().to(el, { y: 0, ease: 'back.out', ...props })

    return { moveX, slideOut, slideIn }
}

export default _zips