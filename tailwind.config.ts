import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				blue: '#0079FF',
				grey: '#697C9A',
				greyBlue: '#4B6A9B',
				darkGrey: '#2B3442',
				lightGrey: '#F6F8FF',
				lightestGrey: '#FEFEFE',
				white: '#FFFFFF',
				almostDark: '#141D2F',
				darkBlue: '#1E2A47',
			},
			fontSize: {
				headingXL: ['26px', '38px'],
				headingL: ['22px', '33px'],
				headingM: ['16px', '24px'],
				headingS: ['13px', '20px'],
				body: ['15px', '25px'],
			},
		},
	},
	plugins: [],
};
export default config;
