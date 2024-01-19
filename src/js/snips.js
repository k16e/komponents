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

const
    _transition = () => new Array('transition', 'duration-300', 'ease-out'),
    _translateDown = () => new Array('translate-y-1.5', 'lg:translate-y-3'),
    _padY = () => new Array('py-12', 'lg:py-24'),
    _padB = () => new Array('pb-12', 'lg:pb-24')


// Exports
export {
    _body, _slugify, _$, _$$, _transition, _padY, _padB, _translateDown
}