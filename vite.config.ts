import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      APP_ENV: JSON.stringify(process.env.VITE_VERCEL_ENV),
    },
  };
});