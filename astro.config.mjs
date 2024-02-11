import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import pages from 'astro-pages'

const
    env = loadEnv('', process.cwd(), 'STORYBLOK'),
    redirectHome = { status: 301, destination: '/' }

export default defineConfig({
    site: 'https://komponents-v2.netlify.app',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
        ignoreSlowConnection: true
    },
    integrations: [
        pages('routes'),
        tailwind({
            nesting: true
        }),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'composites/Page',
                hero: 'composites/Hero',
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
                carousel: 'composites/Carousel',
                form: 'composites/Form',
                longform: 'composites/Longform',
            }
        })
    ],
    redirects: {
        '/pages': redirectHome,
        '/pages/': redirectHome,
        '/home': redirectHome,
        '/home/': redirectHome,
    },
    image: {
        domains: ['a.storyblok.com']
    },
    build: {
        format: 'preserve'
    }
})