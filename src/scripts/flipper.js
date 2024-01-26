import {
    _q, _ql
} from './snips'

const _flipper = () => {
    if (!_q('[data-flipper]')) return

    const
        faces = _ql('[data-flipper="face"]'),
        backs = _ql('[data-flipper="back"]')

    faces[0].classList.add('translate-y-full')

    faces.forEach(face => {
        face.addEventListener('click', e => {
            const
                currFace = e.target,
                otherFaces = faces.filter(i => (i !== currFace))

            if (face.classList.contains('translate-y-0')) face.classList.remove('translate-y-0')
            face.classList.add('translate-y-full')
            otherFaces.forEach(i => i.classList.remove('translate-y-full'))
        })
    })
    backs.forEach(back => {
        back.addEventListener('click', e => {
            const backface = e.target.previousElementSibling

            if (backface.classList.contains('translate-y-full')) backface.classList.remove('translate-y-full')
            backface.classList.add('translate-y-0')
        })
    })
}

export default _flipper