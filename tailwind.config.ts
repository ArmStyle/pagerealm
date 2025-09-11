import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom colors for better eye-friendly reading
        background: {
          light: '#CCCCCC',
          dark: '#121212',
        },
        foreground: {
          light: '#333333',
          dark: '#EEEEEE',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1E1E1E',
        },
        border: {
          light: '#D1D5DB',
          dark: '#374151',
        },
        muted: {
          light: '#6B7280',
          dark: '#9CA3AF',
        },
        accent: {
          light: '#4F46E5',
          dark: '#6366F1',
        },
        // Eye-friendly reading colors
        reading: {
          bg: {
            light: '#F8F9FA',
            dark: '#0A0A0A',
          },
          text: {
            primary: {
              light: '#2D3748',
              dark: '#E2E8F0',
            },
            secondary: {
              light: '#4A5568',
              dark: '#CBD5E1',
            },
            muted: {
              light: '#718096',
              dark: '#94A3B8',
            }
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-thai)', 'var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
        thai: ['var(--font-noto-sans-thai)', 'sans-serif'],
        reading: ['var(--font-noto-sans-thai)', 'Georgia', 'serif'],
      },
      fontSize: {
        'reading-sm': ['14px', { lineHeight: '1.6' }],
        'reading-base': ['16px', { lineHeight: '1.7' }],
        'reading-lg': ['18px', { lineHeight: '1.7' }],
        'reading-xl': ['20px', { lineHeight: '1.8' }],
      },
      spacing: {
        'reading': '65ch',
      },
    },
  },
  plugins: [],
}

export default config
