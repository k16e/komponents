import { useStoryblokApi } from '@storyblok/astro'
import { RELATIONS } from '@scripts/constants'

export async function _getPageData(slug) {
    const storyblokApi = useStoryblokApi()

    const { data } = await storyblokApi.get(
        `cdn/stories/${slug === undefined ? 'home' : slug}`,
        {
            version: 'published',
            resolve_links: 'url',
            resolve_relations: RELATIONS,
        }
    )

    const page = data.story
    const content = page.content
    const meta = content.meta[0]

    return { page, content, meta }
}