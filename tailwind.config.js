/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Earthy travel journal palette
        sand: {
          50: '#fbf8f4',
          100: '#f6f1ea',
          200: '#efe6dc',
          300: '#e6d9cc',
          400: '#dccab9',
          500: '#d7c2af', // clay/sand mid
          600: '#bba795',
          700: '#9c8b7b',
          800: '#7d6f62',
          900: '#5f544b',
        },
        blush: {
          50: '#fff7f4',
          100: '#fdebe5',
          200: '#f6dcd3',
          300: '#efd0c6',
          400: '#e9c3b8',
          500: '#efd9d1',
        },
        olive: {
          50: '#eef2ea',
          100: '#e1e8d7',
          200: '#c9d2bb',
          300: '#aebc9e',
          400: '#93a582',
          500: '#7a8a6c',
          600: '#66745a',
        },
        ink: {
          50: '#f5f5f4',
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#57534e',
          600: '#44403c',
          700: '#2e2a27',
          800: '#1f1b18',
          900: '#151310',
        },
        // App brand aliases used widely in components
        primary: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50:  '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        // keep neutral for grays
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        body: ['Lora', 'ui-serif', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f6f1ea 0%, #efe6dc 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.85) 100%)',
        'brand-gradient': 'linear-gradient(135deg, #f6f1ea 0%, #efd9d1 100%)',
        'paper-fiber': "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'120\\' height=\\'120\\' viewBox=\\'0 0 120 120\\'><defs><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'.8\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/><feColorMatrix type=\\'saturate\\' values=\\'0\\'/><feComponentTransfer><feFuncA type=\\'table\\' tableValues=\\'0 0.05\\'/></feComponentTransfer></filter></defs><rect width=\\'120\\' height=\\'120\\' fill=\\'rgba(255,255,255,0)\\'/><rect width=\\'120\\' height=\\'120\\' filter=\\'url(#n)\\'/></svg>')",
        // Subtle map grid using repeating linear gradients (sky-blue, lighter)
        'map-grid': 'repeating-linear-gradient(0deg, rgba(147, 197, 253, 0.05) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, rgba(147, 197, 253, 0.05) 0 1px, transparent 1px 24px)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
