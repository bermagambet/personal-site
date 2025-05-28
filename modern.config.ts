import { appTools, defineConfig } from "@modern-js/app-tools";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  html: {
    title: "Bermagambet Duisek - CV",
    favicon: "./src/assets/ogicon.svg",
    appIcon: "./src/assets/ogicon.svg",
    meta: {
      description: "Me and my CV",
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
