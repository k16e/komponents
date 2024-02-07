import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { _q, _ql } from './snips'

gsap.registerPlugin(Flip)

const _fuzzySearch = () => {
    let typingTimer

    const
        wrapper = _q('[data-fuzzy-search]'),
        input = _q('input', wrapper),
        entries = _ql(`[data-list-${wrapper.dataset.list}] > *`),
        typeInterval = 150,
        clear = _q('[data-clear]', wrapper),
        hide = (item) => {
            item.classList.remove('hidden')
        },
        show = (item) => {
            item.classList.add('hidden')
        },
        search = (input, list) => {
            const
                query = input.value.toLowerCase().trim(),
                state = Flip.getState(list)

            list.map(el => {
                if (el.textContent.toLowerCase().includes(query)) hide(el)
                else show(el)
            })

            Flip.from(state, {
                duration: 0.5,
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
        },
        action = (input, list) => {
            clearTimeout(typingTimer)
            typingTimer = setTimeout(search(input, list), typeInterval)
        }

    clear.addEventListener('click', () => {
        input.value = ''
        input.focus()
        entries.map(el => hide(el))
    })
    input.addEventListener('keyup', () => action(input, entries))
}

export default _fuzzySearch