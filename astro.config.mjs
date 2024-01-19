import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'

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
        tailwind(),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'storyblok/Page',
                hero: 'storyblok/Hero',
                flipphone: 'storyblok/FlipPhone',
            }
        })
    ],
    redirects: {},
    image: {
        domains: ['a.storyblok.com']
    }
})