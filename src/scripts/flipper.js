import {
    _slugify, _$$, _$
} from './snips'

const _flipper = () => {
    if (!_$('[data-flipper]')) return

    const
        faces = _$$('[data-flipper="face"]'),
        backs = _$$('[data-flipper="back"]'),
        translateDown = (obj) => obj.classList.add('translate-y-full'),
        translateUp = (obj) => obj.classList.add('translate-y-0')

    translateDown(faces[0])
}

export default _flipper