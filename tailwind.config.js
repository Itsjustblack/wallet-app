/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			monda: ["Monda", "sans-serif"],
			cabinet: ["Cabinet Grotesk", "sans-serif"],
			dmSans: ["DM Sans", "sans-serif"],
			inter: ["Inter", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
