/** @type {import('tailwindcss').Config} */
const
    defaultTheme = require('tailwindcss/defaultTheme'),
    colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
        extend: {
            screens: {
                'xs': '475px',
                ...defaultTheme.screens
            },
            fontSize: {
                xs: ['0.785rem', '1.245rem'],
                sm: ['0.875rem', '1.265rem'],
                base: ['1rem', '1.555rem'],
                md: ['1.055rem', '1.675rem'],
            },
            fontFamily: {
                sans: ['Kumbh Sans Variable, sans-serif', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                accent: {
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
                    '50': '#F7F8F8',
                    '100': '#F1F2F2',
                    '200': '#E3E7E7',
                    '300': '#CDD4D4',
                    '400': '#AEB7B8',
                    '500': '#889697',
                    '600': '#7A8688',
                    '700': '#647072',
                    '800': '#545E60',
                    '900': '#495152',
                    '950': '#282E2F'
                },
                dark: {
                    '50': '#F6F6F6',
                    '100': '#E7E7E7',
                    '200': '#D1D1D1',
                    '300': '#B0B0B0',
                    '400': '#888888',
                    '500': '#6D6D6D',
                    '600': '#5D5D5D',
                    '700': '#4F4F4F',
                    '800': '#454545',
                    '900': '#3D3D3D',
                    '950': '#090909',
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        function ({ addComponents, theme }) {
            addComponents({
                '.clip-path-xs': { clipPath: 'polygon(0 9%, 100% 0%, 100% 91%, 0% 100%)' },
                '.clip-path-sm': { clipPath: 'polygon(0 12%, 100% 0%, 100% 88%, 0% 100%)' },
                '.clip-path-slat': { clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 25%)' },
                '.clip-path-b': { clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0% 100%)' },
                '.clip-path-t': { clipPath: 'polygon(0 12%, 100% 0%, 100% 100%, 0% 100%)' },
                '.clip-path-y': { clipPath: 'polygon(0 12%, 100% 0, 100% 88%, 0% 100%)' },
                '.clip-path-lelo': { clipPath: 'polygon(0 12%, 100% 0, 100% 88%, 0% 100%)' },
                '.zoid-right': { clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0% 100%)' },
                '.zoid-left': { clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)' }
            })
        },
        require('tailwindcss/plugin')(({ addVariant }) => {
            addVariant('search-cancel', '&::-webkit-search-cancel-button')
        }),
    ]
}