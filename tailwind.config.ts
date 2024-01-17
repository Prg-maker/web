import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "background": "#343A40",
        "text":"#212529",
        "violet":"#9B51E0",
        "gray-400":"#333333",
        "red": "#EB5757",
        "yellow": "#F2C94C",
        "gray-100": "#BDBDBD",
        "green-200": "#6FCF97",
        "green-300": "#219653"

      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
