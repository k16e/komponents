// Selectors
const
    _body = () => document.body,
    _q = (selector, parent) => (parent ? parent : document).querySelector(selector),
    _ql = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector)),
    _transition = () => new Array('transition', 'duration-[250ms]', 'ease-out'),
    _padY = () => new Array('py-8', 'sm:py-12', 'lg:py-24'),
    _padB = () => new Array('pb-8', 'sm:pb-12', 'lg:pb-24'),
    _padT = () => new Array('pt-8', 'sm:pt-12', 'lg:pt-24'),
    _gradientLight = () => new Array('bg-gradient-to-b', 'from-white', 'via-accent-50', 'to-white'),
    _gradientSurface = () => new Array('bg-gradient-to-b', 'from-white', 'via-surface-50', 'to-white'),
    _even = n => n % 2 == 0,
    _odd = n => Math.abs(n % 2) == 1


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


const _scrollToTopOffset = (target, offset = 56) => {
    // Credit here @ https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
    const
        topOffset = offset,
        elPos = Math.round(target.getBoundingClientRect().top),
        offsetPos = (elPos + window.scrollY) - topOffset

    window.scrollTo({ top: offsetPos })
}


const _empty = obj => {
    if (obj === undefined || obj === null) return true
    if (!Object.keys(obj).length) return true
}



// Exports
export {
    _body, _slugify, _empty, _q, _ql, _transition, _padY, _padB, _padT, _gradientLight, _gradientSurface, _scrollToTopOffset, _even, _odd
}