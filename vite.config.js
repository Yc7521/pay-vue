import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import eslintPlugin from "vite-plugin-eslint";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Inspect from "vite-plugin-inspect";

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    vue(),

    WindiCSS(),

    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
    }),

    AutoImport({
      imports: ["vue", "vuex", "vue-router"],
      resolvers: [
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      eslintrc: {
        enabled: true,
      },
    }),

    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        ElementPlusResolver({
          importStyle: false,
        }),
      ],
    }),

    Icons({
      autoInstall: true,
    }),

    Inspect(),
  ],
  server: {
    https: {
      key: "keys/agent2-key.pem",
      cert: "keys/agent2-cert.pem",
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        // target: "http://127.0.0.1:4523/m1/2193999-0-default/",
        changeOrigin: true,
      },
    },
  },
});
