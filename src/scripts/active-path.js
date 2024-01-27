import { _ql, _q } from './snips'
import _slugify from './slugify'

const _activePath = () => {
    if (!_q('[data-anchor]')) return

    const
        navA = _ql('[data-anchor]'),
        currLoc = _slugify(location.pathname),
        activeA = navA.find(a => (a.getAttribute('data-anchor') === currLoc))

    if (activeA) {
        navA.map(a => a.classList.remove('active'))
        activeA.classList.add('active')
    } else {
        navA.map(a => a.classList.remove('active'))
    }
}

export default _activePath