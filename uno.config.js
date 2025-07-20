import { defineConfig, presetUno, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:300,400,500,600,700',
        mono: 'JetBrains Mono:400,500,700'
      }
    })
  ],
  theme: {
    colors: {
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca'
      },
      neutral: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      }
    }
  },
  shortcuts: {
    'btn-primary': 'bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    'card-glass': 'bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl',
    'text-gradient': 'bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent'
  }
})