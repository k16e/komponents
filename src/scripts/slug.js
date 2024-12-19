import _unslash from './unslash'

export default function _slug(linkObj) {
    if (typeof linkObj === 'string') return linkObj

    const iLink = linkObj.linktype === 'story'
    const xLink = linkObj.linktype === 'url'

    if (iLink && linkObj.story) {
        return linkObj.story.full_slug === 'home' ? '/' : `/${ _unslash(linkObj.story.full_slug) }`
    } else if (!linkObj.story && !xLink) {
        return linkObj
    }
    if (xLink) return linkObj.cached_url
}