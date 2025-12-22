import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vsg': {
          'black': '#0a0a0a',
          'dark': '#111111',
          'gray': {
            900: '#171717',
            800: '#1f1f1f',
            700: '#2a2a2a',
            600: '#3d3d3d',
            500: '#525252',
            400: '#737373',
            300: '#a3a3a3',
            200: '#d4d4d4',
            100: '#f5f5f5',
          },
          'accent': '#3b82f6',
          'accent-light': '#60a5fa',
          'verification': '#8b5cf6',
          'capital': '#10b981',
          'control': '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
