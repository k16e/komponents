import { _q, _ql, _empty } from './snips'
import { _sheet, _setSheet, _unsetSheet } from './store'
import _zaps from './gsap'

const zap = _zaps()
const _runSheet = () => {
    const
        sheet = _q('[data-sheet]'),
        dismiss = () => {
            zap.tl().to(sheet, zap.slideBottom())
            _unsetSheet()
        },
        display = () => {
            zap.tl().to(sheet, zap.slideTop())
            _setSheet()
        }

    _sheet.subscribe(value => value ? display() : dismiss())

    return {
        dismiss,
        display
    }
}

export default _runSheet