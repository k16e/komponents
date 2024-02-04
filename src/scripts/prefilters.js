import { _ql, _q } from './snips'

const _prefilters = () => {
    if (
        !_q('a') || !_q('p b')
    ) return

    if (_q('a')) _ql('a').map(a => (a.pathname === '/home' ? a.pathname = '' : false))
    if (_q('p b')) _ql('p b').map(b => (b.classList.add('text-dark-950', 'font-semibold')))
}

export default _prefilters