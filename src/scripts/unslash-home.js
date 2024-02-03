import { _ql, _q } from './snips'

const _unslashHome = () => {
    if (!_q('a')) return

    _ql('a').map(a => {
        if (a.pathname === '/home') a.pathname = ''
    })
}

export default _unslashHome