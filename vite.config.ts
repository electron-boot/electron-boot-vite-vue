import { defineConfig } from 'vite'
import electron from '@electron-boot/vite-plugin-electron';
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),electron()],
})
