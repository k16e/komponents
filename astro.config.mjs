import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
    site: 'https://komponents.ng',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
        ignoreSlowConnection: true
    },
    integrations: [
        tailwind({
            nesting: true
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
    image: {
        domains: ['a.storyblok.com']
    },
    build: {
        format: 'preserve'
    }
})