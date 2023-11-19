import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#6d5e00',
          onPrimary: '#ffffff',
          primaryContainer: '#ffe246',
          onPrimaryContainer: '#211b00',
          primaryFixed: '#ffe246',
          onPrimaryFixed: '#211b00',
          primaryFixedDim: '#e3c600',
          onPrimaryFixedVariant: '#524600',
          secondary: '#655e40',
          onSecondary: '#ffffff',
          secondaryContainer: '#ede3bc',
          onSecondaryContainer: '#201c04',
          secondaryFixed: '#ede3bc',
          onSecondaryFixed: '#201c04',
          secondaryFixedDim: '#d0c7a2',
          onSecondaryFixedVariant: '#4d472b',
          tertiary: '#426650',
          onTertiary: '#ffffff',
          tertiaryContainer: '#c4eccf',
          onTertiaryContainer: '#002111',
          tertiaryFixed: '#c4eccf',
          onTertiaryFixed: '#002111',
          tertiaryFixedDim: '#a8d0b4',
          onTertiaryFixedVariant: '#2b4e39',
          error: '#ba1a1a',
          errorContainer: '#ffdad6',
          onError: '#ffffff',
          onErrorContainer: '#410002',
          background: '#fffbff',
          onBackground: '#1d1b16',
          outline: '#7c7768',
          inverseOnSurface: '#f6f0e7',
          inverseSurface: '#32302a',
          inversePrimary: '#e3c600',
          shadow: '#000000',
          surfaceTint: '#6d5e00',
          outlineVariant: '#cdc6b4',
          scrim: '#000000',
          surface: '#fef9ef',
          onSurface: '#1d1b16',
          surfaceVariant: '#e9e2d0',
          onSurfaceVariant: '#4a4739',
          surfaceContainerHighest: '#e7e2d9',
          surfaceContainerHigh: '#ede7de',
          surfaceContainer: '#f3ede4',
          surfaceContainerLow: '#f9f3ea',
          surfaceContainerLowest: '#ffffff',
          surfaceDim: '#dfd9d0',
          surfaceBright: '#fef9ef'
        },
        dark: {
          primary: '#e3c600',
          onPrimary: '#393000',
          primaryContainer: '#524600',
          onPrimaryContainer: '#ffe246',
          primaryFixed: '#ffe246',
          onPrimaryFixed: '#211b00',
          primaryFixedDim: '#e3c600',
          onPrimaryFixedVariant: '#524600',
          secondary: '#d0c7a2',
          onSecondary: '#363016',
          secondaryContainer: '#4d472b',
          onSecondaryContainer: '#ede3bc',
          secondaryFixed: '#ede3bc',
          onSecondaryFixed: '#201c04',
          secondaryFixedDim: '#d0c7a2',
          onSecondaryFixedVariant: '#4d472b',
          tertiary: '#a8d0b4',
          onTertiary: '#133724',
          tertiaryContainer: '#2b4e39',
          onTertiaryContainer: '#c4eccf',
          tertiaryFixed: '#c4eccf',
          onTertiaryFixed: '#002111',
          tertiaryFixedDim: '#a8d0b4',
          onTertiaryFixedVariant: '#2b4e39',
          error: '#ffb4ab',
          errorContainer: '#93000a',
          onError: '#690005',
          onErrorContainer: '#ffdad6',
          background: '#1d1b16',
          onBackground: '#e7e2d9',
          outline: '#969080',
          inverseOnSurface: '#1d1b16',
          inverseSurface: '#e7e2d9',
          inversePrimary: '#6d5e00',
          shadow: '#000000',
          surfaceTint: '#e3c600',
          outlineVariant: '#4a4739',
          scrim: '#000000',
          surface: '#15130e',
          onSurface: '#cbc6bd',
          surfaceVariant: '#4a4739',
          onSurfaceVariant: '#cdc6b4',
          surfaceContainerHighest: '#37352f',
          surfaceContainerHigh: '#2c2a24',
          surfaceContainer: '#21201a',
          surfaceContainerLow: '#1d1b16',
          surfaceContainerLowest: '#0f0e09',
          surfaceDim: '#15130e',
          surfaceBright: '#3b3933'
        }
      },
      opacity: {
        '8': '.08',
        '12': '.12',
        '16': '.16'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#6d5e00',
              foreground: '#ffffff'
            },
            focus: '#BEF264'
          }
        }
      }
    })
  ]
}
export default config
