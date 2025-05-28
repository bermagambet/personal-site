import { appTools, defineConfig } from "@modern-js/app-tools";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  html: {
    title: "Bermagambet Duisek - CV",
    favicon: "./src/assets/icon.svg",
    appIcon: "./src/assets/icon.svg",
    meta: {
      description: "Information about me and my experience",
    },
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: "rspack", // Set to 'webpack' to enable webpack
    }),
    // tailwindcssPlugin(),
  ],
  tools: {
    tailwindcss: {},
    postcss: {
      postcssOptions: {
        plugins: [require("@tailwindcss/postcss")],
      },
    },
  },
});
