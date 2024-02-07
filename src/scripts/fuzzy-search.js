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
        hide = (item) => {
            item.classList.remove('opacity-0', 'invisible', 'hidden')
        },
        show = (item) => {
            item.classList.add('opacity-0', 'invisible', 'hidden')
        },
        search = (input, list) => {
            const query = input.value.toLowerCase().trim()

            list.map(el => {
                if (el.textContent.toLowerCase().includes(query)) hide(el)
                else show(el)
            })
        },
        action = (input, list) => {
            clearTimeout(typingTimer)
            typingTimer = setTimeout(search(input, list), typeInterval)
        }

    input.addEventListener('keyup', () => action(input, entries))
}

export default _fuzzySearch