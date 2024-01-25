import {
    _slugify, _$$, _$
} from './snips'

const _flipper = () => {
    if (!_$('[data-flipper]')) return

    const
        faces = _$$('[data-flipper="face"]'),
        backs = _$$('[data-flipper="back"]')

    faces[0].classList.add('translate-y-full')

    faces.forEach(face => {
        face.addEventListener('click', e => {
            if (face.classList.contains('translate-y-0')) {
                face.classList.remove('translate-y-0')
            }
            face.classList.add('translate-y-full')
        })
    })
    backs.forEach(back => {
        back.addEventListener('click', e => {
            e.target.previousElementSibling.classList.add('translate-y-0')
        })
    })
}

export default _flipper