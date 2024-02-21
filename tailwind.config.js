/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				titleFont: ['proximaB'],
				regFont: ['proximaR'],
				semiFont: ['proximaSemi'],
			},
		},
	},
	plugins: [],
};
