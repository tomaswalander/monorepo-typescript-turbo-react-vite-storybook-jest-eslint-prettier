import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@repo/ui-atoms'],
    force: true,
  },
  // build: {
  //   outDir: './dist'
  // },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
