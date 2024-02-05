import {
    _q, _ql
} from './snips'

const _flipfone = () => {
    if (!_q('[data-flipfone]')) return

    console.log('Yes, there is data-flipfone')
}

export default _flipfone