/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				monteserrat: ['Montserrat', 'sans-serif'],
			},
			screens: {
				mdl: '1045px'
			},
			animation: {
				float: 'float 3s infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)', },
					'50%': { transform: 'translateY(-5%)', },
				},
			}
		},
	},
	plugins: [],
}
