import { _ql, _q, _empty } from './snips'

export default function _elevatorPitch() {
    if (!_q('[data-elevator-pitch]')) return

    const
        mql = window.matchMedia('(min-width: 1024px)')

    rearrangeImages(mql)
    mql.addEventListener('change', rearrangeImages, false)

    function rearrangeImages(e) {
        if (e.matches) {
            console.log('Yes')
        }
    }
}