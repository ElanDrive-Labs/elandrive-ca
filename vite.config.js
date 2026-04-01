import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change the base to match your GitHub repo name
// e.g. if your repo is github.com/elandrive/elandrive-labs → base: '/elandrive-ca/'
// If using a custom domain (elandrive.ca) or username.github.io repo → base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
