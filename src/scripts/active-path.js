import { _slugify, _$$, _$ } from './snips'

const _activePath = () => {
    if (!_$('[data-anchor]')) return

    const
        navA = _$$('[data-anchor]'),
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