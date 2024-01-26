import {
    _q, _scrollToTopOffset
} from './snips'

const _intoView = () => {
    if (!_q('[data-scroll-into-view]')) return

    const
        target = _q('[data-scroll-into-view]'),
        section = target.closest('section').nextElementSibling

    if (!section) return

    target.addEventListener('click', () => _scrollToTopOffset(section))
}

export default _intoView