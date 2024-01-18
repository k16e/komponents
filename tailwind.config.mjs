/** @type {import('tailwindcss').Config} */
const
    defaultTheme = require('tailwindcss/defaultTheme'),
    colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontSize: {
                sm: ['0.825rem', '1.25rem']
            },
            fontFamily: {
                sans: ['Kumbh Sans Variable, sans-serif', ...defaultTheme.fontFamily.sans],
                display: 'Plus Jakarta Sans Variable, sans-serif'
            },
            colors: {
                punch: {
                    '50': '#fef3f2',
                    '100': '#fee4e2',
                    '200': '#fececa',
                    '300': '#fcaba5',
                    '400': '#f87a71',
                    '500': '#ef5044',
                    '600': '#de3d31',
                    '700': '#b9271c',
                    '800': '#99241b',
                    '900': '#7f241d',
                    '950': '#450e0a'
                },
                surface: {
                    '50': '#f9fafa',
                    '100': '#f3f4f4',
                    '200': '#e5e9e9',
                    '300': '#d0d6d7',
                    '400': '#b4bcbe',
                    '500': '#94a0a1',
                    '600': '#7a8688',
                    '700': '#60696b',
                    '800': '#4f5759',
                    '900': '#3d3d3d',
                    '950': '#262a2c'
                }
            }
        }
	},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}