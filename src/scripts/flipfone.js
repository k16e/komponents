import {
    _q, _ql
} from './snips'
import _zaps from './gsap'
import _siblings from './siblings'

const zap = _zaps()

const _flipfone = () => {
    if (!_q('[data-flipfone]') || import.meta.env.SSR) return

    const
        flipfones = _ql('[data-flipfone]')

    flipfones.map(el => {
        const
            flipfone = el,
            buttons = _ql('button', el),
            flips = _ql('[data-flipfone-content]', el)

        buttons.map(button => {
            button.addEventListener('click', showFlip)

            function showFlip(evt) {
                const
                    toggle = evt.target,
                    flip = flips.find(flip => (flip.dataset.flipfoneContent === toggle.dataset.flipfoneToggle))

                toggle.classList.add('active')
                _siblings(toggle).map(sib => sib.classList.remove('active'))

                _siblings(flip).map(el => zap.tl().to(el, zap.slideOut()))
                zap.tl().to(flip, zap.slideIn({ delay: 0.6 }))
            }
        })
    })
}

export default _flipfone