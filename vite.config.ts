import { defineConfig } from "vite-plus";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => ({
  // Unit tests do not need the Cloudflare development server.
  plugins: mode === "test" ? [] : [cloudflare()],
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  build: {
    minify: true,
  },
}));
