import {
    _q, _ql
} from './snips'
import _zaps from './gsap'
import _siblings from './siblings'
import gsap from 'gsap'
import _zips from './gsaps'

const zap = _zaps()
const zip = _zips()

const _flipfone = () => {
    if (!_q('[data-flipfone]') || import.meta.env.SSR) return

    const
        flipfones = _ql('[data-flipfone]'),
        progressbar = _q('[data-progressbar]'),
        flips = _ql('[data-flipfone-content]'),
        initialWidth = 100 / flips.length

    let progressbarWidth = initialWidth

    zip.moveX(progressbar, { width: `${progressbarWidth}%` })

    flipfones.map(el => {
        const
            flipfone = el,
            buttons = _ql('button', el)

        buttons.map((button, idx) => {
            button.addEventListener('click', e => { showFlip(e, flips, idx) })
        })
    })

    function showFlip(event, flips, currentIdx) {
        const
            toggle = event.target,
            flip = flips.find(flip => (flip.dataset.flipfoneContent === toggle.dataset.flipfoneToggle))

        progressbarWidth = (currentIdx + 1) * initialWidth
        zip.moveX(progressbar, { width: `${progressbarWidth}%` })

        toggle.classList.add('active')
        _siblings(toggle).map(sib => sib.classList.remove('active'))

        _siblings(flip).map(el => zap.tl().to(el, zap.slideOut()))
        zap.tl().to(flip, zap.slideIn({ delay: 0.6 }))
    }
}

export default _flipfone