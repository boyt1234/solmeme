import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    global: "globalThis",
    "process.env": {}, // Prevent undefined process.env
  },
  resolve: {
    alias: {
      stream: "stream-browserify",
      buffer: "buffer",
    },
  },
  optimizeDeps: {
    include: ["buffer", "process", "stream"],
  },
  build: {
    rollupOptions: {
      plugins: [
        inject({
          Buffer: ["buffer", "Buffer"],
          process: "process",
        }),
      ],
    },
  },
});
