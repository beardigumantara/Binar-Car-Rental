import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      VITE_SERVER_HOST: JSON.stringify(process.env.VITE_SERVER_HOST)
    },
  };
});