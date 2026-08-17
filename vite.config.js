import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function vendorChunk(id) {
  if (!id.includes('node_modules')) return

  const pkg = id.split('node_modules/')[1]?.split('/')[0]
  if (!pkg) return

  if (pkg.startsWith('tsparticles') || pkg === 'react-tsparticles' || pkg === 'react-particles') {
    return 'vendor-particles'
  }
  if (pkg === 'framer-motion') return 'vendor-motion'
  if (pkg === 'react-icons') return 'vendor-icons'
  if (['react', 'react-dom', 'react-router', 'react-router-dom', 'scheduler'].includes(pkg)) {
    return 'vendor-react'
  }
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: vendorChunk,
      },
    },
  },
})
