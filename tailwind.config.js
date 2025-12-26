/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        chemistry: {
          acid: '#fecaca',      // 红色系 - 酸
          base: '#bbf7d0',      // 绿色系 - 碱
          salt: '#bfdbfe',      // 蓝色系 - 盐
          oxide: '#fde68a',     // 黄色系 - 氧化物
          metal: '#d1d5db',     // 灰色系 - 金属
          nonmetal: '#c4b5fd',  // 紫色系 - 非金属
          fe2: '#86efac',       // Fe²⁺ - 浅绿
          fe3: '#fcd34d',       // Fe³⁺ - 黄色
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'electron-move': 'electronMove 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        electronMove: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100px)' },
        },
      },
    },
  },
  plugins: [],
}
