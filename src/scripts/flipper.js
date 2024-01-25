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
            console.log(e)
        })
    })
    backs.forEach(back => {
        back.addEventListener('click', e => {

        })
    })
}

export default _flipper