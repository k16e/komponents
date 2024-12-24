import { z, defineCollection, reference } from 'astro:content'
import { glob } from 'astro/loaders'
import { getImage } from 'astro:assets'

async function imageTransform(src) {
    if (src.startsWith('@images/')) {
        const imagePath = src.replace('@images/', '/content/images/');
        const { src: optimizedSrc } = await getImage({ src: imagePath });
        return optimizedSrc;
    }
    return src;
}

const partners = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './content/partners' }),
    schema: ({ image }) => z.object({
        title: z.string().max(55, 'Title must not exceed 55 characters'),
        description: z.string().max(1000, 'Description must not exceed 1000 characters'),
        link: z.object({
            label: z.string(),
            slug: z.string(),
        }),
        image: z.object({
            file: image().transform(imageTransform),
            alt: z.string(),
        }),
        logo: z.object({
            file: image().transform(imageTransform),
            alt: z.string(),
        }).optional(),
        seo: z.object({
            title: z.string(),
            description: z.string().max(155, 'Description must not exceed 155 characters'),
            thumbnail: z.object({
                file: image().transform(imageTransform),
                alt: z.string(),
            }),
        }),
    })
})

const products = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './content/products' }),
    schema: ({ image }) => z.object({
        title: z.string().max(55, 'Title must not exceed 55 characters'),
        description: z.string().max(200, 'Description must not exceed 200 characters'),
        long_description: z.string(),
        image: z.object({
            src: z.string().transform(imageTransform),
            alt: z.string(),
            caption: z.string().optional(),
        }),
        partner: reference('partners'),
        highlights: z.array(
            z.object({
                text: z.string(),
            })
        ),
        links: z.array(
            z.object({
                label: z.string(),
                slug: z.string(),
            })
        ),
        is_new: z.boolean(),
        is_in_stock: z.boolean(),
        seo: z.object({
            title: z.string(),
            description: z.string(),
            thumbnail: z.object({
                file: image().transform(imageTransform),
                alt: z.string(),
            }),
        }),
    })
})

export const collections = { partners, products, }