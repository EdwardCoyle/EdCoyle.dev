import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			ecOrange: '#e74b3e',
			ecOrangeHighlight: '#ff887d',
			ecIconColor: '#f0f0f0',
			
			bulletColor: '#818589',

			cardBg: '#f1f5f9',

			pillBg: '#c1c5c9',
		},
		extend: {
			maxWidth: {
				'32r': '32rem',
				'640': '640px'
			},
			width: {
				'32r': '32rem',
				'550': '550px',
				'640': '640px',
				'oppo550': 'calc(100% - 550px)'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
