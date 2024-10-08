import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'anti-flash-white': '#F0F0F0',
        isabelline: '#F0EEED',
      },
      fontFamily: {
        sans: ['var(--font-satoshi)'],
      },
    },
  },
  plugins: [],
}
export default config
