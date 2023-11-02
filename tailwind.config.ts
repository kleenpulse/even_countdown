import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				shimmer: "shimmer 1.5s infinite",

				slideDown: "slideDown 0.5s 0.2s ease forwards",
				loadspin: "loadspin 1.5s linear infinite",
			},
			keyframes: {
				loadspin: {
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},

				slideDown: {
					"50%": {
						opacity: "0.7",
						transform: "translateY(50)",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				fadeOut: {
					"50%": {
						opacity: "0.7",
						transform: "translateY(50)",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
