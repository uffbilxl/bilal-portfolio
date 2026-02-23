import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#050a0e',
          dark: '#0a1628',
          card: '#0d1f2d',
          border: '#1a3a4a',
          cyan: '#00f5ff',
          'cyan-dim': '#00b8cc',
          green: '#39ff14',
          'green-dim': '#2acc10',
          purple: '#bf5fff',
          'purple-dim': '#9b3dcc',
          text: '#c8d8e8',
          muted: '#6b8a9a',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Orbitron"', 'monospace'],
        body: ['"Exo 2"', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'scanline': 'scanline 8s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
        'terminal-blink': 'terminalBlink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)', filter: 'none', opacity: '1' },
          '92%': { transform: 'translate(-3px, 1px)', filter: 'hue-rotate(90deg)', opacity: '0.9' },
          '94%': { transform: 'translate(3px, -1px)', filter: 'hue-rotate(-90deg)', opacity: '0.9' },
          '96%': { transform: 'translate(-2px, 2px)', filter: 'brightness(1.5)', opacity: '0.8' },
          '98%': { transform: 'translate(2px, -2px)', filter: 'none', opacity: '1' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100vh' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 20px #00f5ff' },
          '50%': { boxShadow: '0 0 10px #00f5ff, 0 0 30px #00f5ff, 0 0 60px #00f5ff' },
        },
        gridFlow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(60px)' },
        },
        terminalBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)
        `,
        'cyber-gradient': 'linear-gradient(135deg, #050a0e 0%, #0a1628 50%, #050a0e 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
export default config
