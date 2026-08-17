import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function vendorChunk(id) {
  if (!id.includes('node_modules')) return

  const pkg = id.split('node_modules/')[1]?.split('/')[0]
  if (!pkg) return

  if (pkg === 'framer-motion') return 'vendor-motion'
  if (pkg === 'react-icons') return 'vendor-icons'
  if (
    pkg === 'react' ||
    pkg === 'react-dom' ||
    pkg === 'react-router' ||
    pkg === 'react-router-dom' ||
    pkg === 'scheduler' ||
    pkg === 'react-tsparticles' ||
    pkg === 'react-particles'
  ) {
    return 'vendor-react'
  }
}

export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks: vendorChunk,
      },
    },
  },
})
