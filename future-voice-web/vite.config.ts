import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { vitePluginTanStackStart } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [
    vitePluginTanStackStart({
      routers: {
        router: {
          entry: "./src/router.tsx",
        },
      },
    }),
    tailwindcss(),
  ],
});