import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import prerender from "vite-plugin-prerender";

import { resolve, join } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "@/assets/css/variable.scss";',
      },
    },
  },
  build: {
    outDir: "dist", //指定打包输出路径
    assetsDir: "assets", //指定静态资源存放路径
    // cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, //是否构建source map 文件
    chunkSizeWarningLimit: 500,
    // 生产环境取消 console
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "prod",
        drop_debugger: true,
      },
    },

    rollupOptions: {
      output: {
        manualChunks(id: any) {
          // // 最小化拆分包
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
  plugins: [
    vue(),
    prerender({
      indexPath: join(__dirname, "dist", "index.html"),
      routes: ["/", "/en"],
      staticDir: join(__dirname, "dist"),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ],
});
