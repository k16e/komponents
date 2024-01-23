// Selectors
const _body = () => document.body
const _$ = (selector, parent) => (parent ? parent : document).querySelector(selector)
const _$$ = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector))



// Snippets
const _slugify = str => {
    // Thanks to https://dev.to/bybydev/how-to-slugify-a-string-in-javascript-4o9n
    str = str.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase()
    str = str
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    return str
}


const _empty = obj => {
    if (obj === undefined || obj === null) return true
    if (!Object.keys(obj).length) return true
}

const _intoView = obj => {
    if (!obj) return
    const sibling = obj.closest('section').nextElementSibling
    if (!sibling) return
    obj.addEventListener('click', () => sibling.scrollIntoView())
}

const _activePath = () => {
    const
        navA = _$$('[data-anchor]'),
        currLoc = _slugify(location.pathname),
        activeA = navA.find(a => (a.getAttribute('data-anchor') === currLoc))

    if (activeA) {
        navA.map(a => a.classList.remove('active'))
        activeA.classList.add('active')
    } else {
        navA.map(a => a.classList.remove('active'))
    }
}

const
    _transition = () => new Array('transition', 'duration-300', 'ease-out'),
    _padY = () => new Array('py-12', 'lg:py-24'),
    _padB = () => new Array('pb-12', 'lg:pb-24'),
    _padT = () => new Array('pt-12', 'lg:pt-24'),
    _gradientLight = () => new Array('bg-gradient-to-b', 'from-white', 'via-punch-50', 'to-white'),
    _gradientSurface = () => new Array('bg-gradient-to-b', 'from-white', 'via-surface-200', 'to-white')


// Exports
export {
    _body, _slugify, _empty, _$, _$$, _transition, _padY, _padB, _padT, _gradientLight, _gradientSurface, _intoView, _activePath
}