import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'

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
        tailwind({
            nesting: true
        }),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'composites/Page',
                hero: 'composites/Hero',
                flipPhone: 'composites/FlipPhone',
                callout: 'composites/Callout',
                feature: 'composites/Feature',
                logoClouds: 'composites/LogoClouds',
            }
        }),
    ],
    redirects: {},
    image: {
        domains: ['a.storyblok.com']
    }
})