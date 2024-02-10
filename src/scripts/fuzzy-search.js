import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { _q, _ql } from './snips'
import _gsap from './gsap'

gsap.registerPlugin(Flip)
const g = _gsap()

export default function _fuzzySearch() {
    if (!_q('[data-fuzzy-search]')) return

    let typingTimer
    const
        wrapper = _q('[data-fuzzy-search]'),
        input = _q('input', wrapper),
        entries = _ql(`[data-list-${wrapper.dataset.list}] > *`),
        typeInterval = 150,
        clear = _q('[data-clear]', wrapper),
        allText = 'All OEMs',
        firstOpt = _q('[data-first-option="all-oems"]')

    clear.addEventListener('click', () => {
        entries.map(el => show(el))
        input.value = ''
        input.focus()
    })
    input.addEventListener('keyup', () => action(input, entries))
    firstOpt.textContent = allText


    function show(item) {
        g.on(item)
        item.style.display = 'block'
    }

    function hide(item) {
        g.off(item)
        item.style.display = 'none'
    }

    function search(input, list) {
        const
            query = input.value.toLowerCase().trim(),
            state = Flip.getState(list)

        list.map(el => {
            if (el.textContent.toLowerCase().includes(query)) show(el)
            else hide(el)
        })

        Flip.from(state, {
            scale: true,
            ease: 'power1.inOut',
            absoluteOnLeave: true,
            prune: true,
            absolute: true,
            fade: true,
            simple: true,
            onEnter: els => gsap.fromTo(els, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }),
            onLeave: els => gsap.to(els, { opacity: 0, scale: 0 })
        })
    }

    function action(input, list) {
        clearTimeout(typingTimer)
        typingTimer = setTimeout(search(input, list), typeInterval)
    }
}