import {
    _q, _ql
} from './snips'

const _flipper = () => {
    if (!_q('[data-flipper]')) return

    const
        faces = _ql('[data-flipper="face"]'),
        backs = _ql('[data-flipper="back"]'),
        close = ['translate-y-0', 'scale-1', 'opacity-1'],
        open = ['translate-y-full', 'scale-[0.96]', 'opacity-0']

    faces[0].classList.add('translate-y-full')

    faces.forEach(i => {
        i.addEventListener('click', e => {
            const
                currFace = e.target,
                otherFaces = faces.filter(i => (i !== currFace))

            if (i.classList.contains('translate-y-0')) i.classList.remove(...close)
            i.classList.add(...open)
            otherFaces.forEach(i => i.classList.remove(...open))
        })
    })
    backs.forEach(i => {
        i.addEventListener('click', e => {
            const backface = e.target.previousElementSibling

            if (backface.classList.contains('translate-y-full')) backface.classList.remove(...open)
            backface.classList.add(...close)
        })
    })
}

export default _flipper