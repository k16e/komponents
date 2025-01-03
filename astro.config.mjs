import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
    site: 'https://komponents.ng',
    prefetch: {
        prefetchAll: true
    },
    adapter: netlify({
        imageCDN: false,
    }),
    image: {
        domains: ['a.storyblok.com']
    },
    integrations: [
        tailwind({
            nesting: true
        }),
        mdx({
            ignoreIndentation: true
        }),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            livePreview: false,
            bridge: import.meta.env.DEV,
            components: {
                page: 'templates/Page',
                product: 'templates/Product',
                partner: 'templates/Partner',
                elevatorPitch: 'composites/ElevatorPitch',
                flipfone: 'composites/Flipfone',
                callout: 'composites/Callout',
                feature: 'composites/Feature',
                logoClouds: 'composites/LogoClouds',
                splitContent: 'composites/SplitContent',
                twinSlats: 'composites/TwinSlats',
                values: 'composites/Values',
                vSplit: 'composites/VSplit',
                solarArray: 'composites/SolarArray',
                awardsCloud: 'composites/AwardsCloud',
                pageHeader: 'composites/PageHeader',
                products: 'composites/Products',
                affiliates: 'composites/Affiliates',
                collection: 'composites/Collection',
                plotSummary: 'composites/PlotSummary',
                copySplit: 'composites/CopySplit',
                quote: 'composites/Quote',
                form: 'composites/Form',
                longform: 'composites/Longform',
            }
        })
    ],
    build: {
        format: 'preserve'
    },
    // trailingSlash: 'never',
    assets: {
        baseAssetUrl: '/content/images',
        fileAssetUrl: '/content/images',
    },
    vite: {
        resolve: {
            alias: {
                '@images': '/content/images'
            }
        }
    }
})