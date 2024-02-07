import { _q, _ql, _empty } from './snips'
import { _sheet, _setSheet, _unsetSheet } from './store'
import _siblings from './siblings'
import _gsap from './gsap'

const gsap = _gsap()

const _runSheet = () => {
    const
        sheet = _q('[data-sheet]'),
        contents = _ql('[data-sheet-display]'),
        close = _q('[data-sheet-close]'),
        anchors = _ql('a', sheet),
        dismiss = () => {
            gsap.slideBottom(sheet)
            _unsetSheet()
        },
        display = target => {
            const
                match = target.srcElement.dataset.sheetTrigger,
                inside = contents.find(content => (content.dataset.sheetDisplay === match)),
                siblings = _siblings(inside)

            gsap.slideTop(sheet)
            siblings.map(sibling => gsap.slideOut(sibling))
            gsap.slideIn(inside)

            _setSheet()
        }

    contents.map(content => content.classList.add('opacity-0', 'invisible', 'absolute', 'inset-0'))
    anchors.map(a => a.addEventListener('click', dismiss))
    close.addEventListener('click', dismiss)

    _sheet.subscribe(value => value ? '' : dismiss())

    return {
        dismiss,
        display
    }
}

export default _runSheet