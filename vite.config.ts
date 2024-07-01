import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      "process.env": process.env,
      VITE_SERVER_HOST: process.env.VITE_SERVER_HOST,
    },
  };
});