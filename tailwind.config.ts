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

			pillBg: '#e1e5e9',
		},
		extend: {
			height: {
				'200': '200px'
			},
			maxHeight: {
				'200': '200px'
			},
			maxWidth: {
				'32r': '32rem',
				'200': '200px',
				'350': '350px',
				'550': '550px',
				'640': '640px',
				'680': '680px',
				'oppo300': 'calc(100% - 300px)',
				'oppo550': 'calc(100% - 550px)',
				'oppo640': 'calc(100% - 640px)',
				'oppo700': 'calc(100% - 700px)'
			},
			width: {
				'32r': '32rem',
				'200': '200px',
				'350': '350px',
				'550': '550px',
				'640': '640px',
				'680': '680px',
				'oppo300': 'calc(100% - 300px)',
				'oppo550': 'calc(100% - 550px)',
				'oppo640': 'calc(100% - 640px)',
				'oppo700': 'calc(100% - 700px)'
			}
		},
		fontFamily: {
			'serif': ['Aleo', 'Times New Roman', 'ui-sans-serif', 'system-ui'],
			'sans': ['Raleway', 'Arial', 'Helvetica', 'ui-serif'],
			'mono': ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
		  }
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
