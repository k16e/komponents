import { z, defineCollection, reference } from 'astro:content'
import { glob } from 'astro/loaders'
import { getImage } from 'astro:assets'

async function imageTransform(src, width = 1024, height = 768) {
    if (src.startsWith('@images/')) {
        const imagePath = src.replace('@images/', '/content/images/');
        const { src: optimizedSrc } = await getImage({
            src: imagePath,
            width,
            height
        });
        return { src: optimizedSrc, width, height };
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
            file: z.string(),
            alt: z.string(),
            width: z.number().optional(),
            height: z.number().optional(),
        }).transform(async ({ file, alt, width, height }) => {
            const transformed = await imageTransform(file, width, height);
            return { ...transformed, alt };
        }),
        logo: z.object({
            file: z.string(),
            alt: z.string(),
            width: z.number().optional(),
            height: z.number().optional(),
        }).transform(async ({ file, alt, width, height }) => {
            const transformed = await imageTransform(file, width, height);
            return { ...transformed, alt };
        }).optional(),
        seo: z.object({
            title: z.string(),
            description: z.string().max(200, 'Description must not exceed 200 characters'),
            thumbnail: z.object({
                file: z.string(),
                alt: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
            }).transform(async ({ file, alt, width, height }) => {
                const transformed = await imageTransform(file, width, height);
                return { ...transformed, alt };
            }),
        }),
    })
})

const products = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './content/products' }),
    schema: ({ image }) => z.object({
        title: z.string().max(70, 'Title must not exceed 70 characters'),
        description: z.string().max(200, 'Description must not exceed 200 characters'),
        image: z.object({
            src: z.string(),
            alt: z.string(),
            caption: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
        }).transform(async ({ src, alt, caption, width, height }) => {
            const transformed = await imageTransform(src, width, height);
            return { ...transformed, alt, caption };
        }),
        partner: reference('partners'),
        highlights: z.array(
            z.object({
                text: z.string(),
            })
        ).optional(),
        link: z.object({
            label: z.string(),
            slug: z.string(),
        }).optional(),
        is_new: z.boolean(),
        is_in_stock: z.boolean(),
        seo: z.object({
            title: z.string(),
            description: z.string().max(200, 'Description must not exceed 200 characters'),
            thumbnail: z.object({
                file: z.string(),
                alt: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
            }).transform(async ({ file, alt, width, height }) => {
                const transformed = await imageTransform(file, width, height);
                return { ...transformed, alt };
            }),
        }),
    })
})

export const collections = { partners, products, }