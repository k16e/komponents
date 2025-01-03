import { _q } from '@scripts/snips'
import _scroll from '@scripts/scroll'
import _runSheet from '@scripts/sheet'

export default function _allHeaderFunctions() {
    const _sheet = _runSheet()

    const header = _q('header'),
        height = header.getBoundingClientRect().height,
        activeClasses = [
            'shadow',
            'backdrop-filter',
            'backdrop-blur-lg',
            'bg-opacity-90',
        ],
        activate = () => header.classList.add(...activeClasses),
        deactivate = () => header.classList.remove(...activeClasses),
        toggle = () => (window.scrollY > height ? activate() : deactivate()),
        sheetTrigger = _q('[data-sheet-trigger]'),
        openSheet = e => {
            _sheet.display(e)
        }

    window.scrollY !== 0 ? activate() : deactivate()
    _scroll(toggle)

    sheetTrigger.addEventListener('click', openSheet)
}