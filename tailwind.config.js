/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
	  extend: {
		colors: {
		  primary: "#8F87F1",
		  secondary: "#C68EFD",
		  accent: "#FED2E2", 
		  dark: "#1a1a1a",
		  light: "#ffffff",
		  success: "#10b981", // emerald-500
		  warning: "#f59e0b", // amber-500
		  danger: "#ef4444" // red-500
		},
		fontFamily: {
		  sans: ['Inter', 'sans-serif'],
		  mono: ['Roboto Mono', 'monospace']
		},
		spacing: {
		  '18': '4.5rem',
		  '22': '5.5rem',
		  '26': '6.5rem'
		},
		borderRadius: {
		  'xl': '1rem',
		  '2xl': '1.5rem',
		  '3xl': '2rem'
		},
		boxShadow: {
		  'soft': '0 4px 12px rgba(0, 0, 0, 0.08)',
		  'hard': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
		},
		transitionDuration: {
		  '250': '250ms',
		  '400': '400ms'
		}
	  },
	  container: {
		center: true,
		padding: '1.5rem',
		screens: {
		  sm: '640px',
		  md: '768px',
		  lg: '1024px',
		  xl: '1280px',
		  '2xl': '1536px'
		}
	  }
	},
	plugins: [
	  require("tailwindcss-animate"),
	  require('@tailwindcss/forms'),
	  require('@tailwindcss/typography')
	]
  }