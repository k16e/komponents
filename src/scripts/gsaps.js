import { gsap } from 'gsap'

const _zips = () => {
    let tl = () => gsap.timeline({
        defaults: { opacity: 1, visibility: 'visible', duration: 0.3,  }
    })

    const
        moveX = (el, props) => tl().to(el, { ease: 'circ.out', ...props })

    return { moveX }
}

export default _zips