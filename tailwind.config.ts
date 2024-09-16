import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			ecOrange: '#e74b3e',
			ecOrangeHighlight: '#ff887d',
			ecIconColor: '#f0f0f0',

			cardBg: '#f1f5f9'
		},
		extend: {
			width: {
				'128': '128rem',
				'550': '550px',
				'oppo550': 'calc(100% - 550px)'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
