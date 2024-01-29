import _unslash from './unslash'

const _slug = linkObj => {
    const
        iLink = linkObj.linktype === 'story',
        xLink = linkObj.linktype === 'url'

    if (iLink && linkObj.story) {
        return linkObj.story.full_slug === 'home' ? '' : `/${ linkObj.story.full_slug }`
    } else if (!linkObj.story && !xLink) {
        return linkObj
    }
    if (xLink) return linkObj.cached_url
}

export default _slug