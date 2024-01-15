/** @type {import('tailwindcss').Config} */
const
    defaultTheme = require('tailwindcss/defaultTheme'),
    colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontFamily: {
                sans: ['Kumbh Sans Variable', ...defaultTheme.fontFamily.sans],
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
                    '950': '#450e0a',
                }
            }
        }
	},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}