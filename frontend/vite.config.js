import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target:
          mode === "development"
            ? "http://localhost:3000"
            : "https://threads-clone-80w1.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
