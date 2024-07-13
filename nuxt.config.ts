export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { src: "/_nuxt/node_modules/preline/dist/preline.js", defer: true },
        {
          src: "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WfqnR9",
          async: true,
        },
      ],
    },
  },

  supabase: {
    redirect: false,
  },
  plugins: ["~/plugins/preline.client.ts"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      paddleVendorId: process.env.PADDLE_VENDOR_ID,
      paddlePriceId: process.env.PADDLE_PRICE_ID,
      paddleClientToken: process.env.PADDLE_CLIENT_TOKEN,
    },
  },
});
