import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import UnoCSS from 'unocss/vite'
import { presetIcons } from 'unocss/preset-icons'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@views": path.resolve(__dirname, "src/views"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
