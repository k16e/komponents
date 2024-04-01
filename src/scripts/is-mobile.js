import { _ql, _q, _empty } from './snips'

export default function _isMobile() {
    const
        mql = window.matchMedia('(min-width: 1024px)')

    matches(mql)
    mql.addEventListener('change', matches, false)

    function matches(e) {
        return e.matches ? false : true
    }
}