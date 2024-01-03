import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      titleTemplate: "%s | ",
    },
  },

  css: [
    "modern-css-reset",
    "~/assets/css/common.scss",
    "~/assets/css/variables.scss",
    "~/assets/css/transition.scss",
  ],

  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],

  // runtimeConfig: {},

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [300, 400, 500, 700],
          "Noto Sans JP": [300, 400, 500, 700],
        },
        display: "swap",
      },
    ],
  ],

  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/mixins.scss" as *;',
        },
      },
    },
  },
});
