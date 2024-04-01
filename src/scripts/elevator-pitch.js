import { _ql, _q, _empty } from './snips'

export default function _elevatorPitch() {
    if (!_q('[data-elevator-pitch]')) return

    const
        mql = window.matchMedia('(min-width: 1024px)'),
        scroller = _q('[data-elevator-pitch]'),
        images = _ql('img', scroller),
        container = scroller.nextElementSibling,
        clone = images.map(x => x),
        s3 = clone.slice(-3)

    rearrangeImages(mql)
    mql.addEventListener('change', rearrangeImages, false)

    function rearrangeImages(e) {
        if (e.matches) {
            s3.map(x => container.appendChild(x))
        }
    }
}