const _slug = (linkObj) => {
    const
        iLink = linkObj.linktype === 'story',
        xLink = linkObj.linktype === 'url'

    if (iLink) {
        return linkObj.story.full_slug === 'home' ? '' : linkObj.story.full_slug
    }
    if (xLink) {
        return linkObj.cached_url
    }
}

export default _slug