import { compression } from 'vite-plugin-compression2'
import { availableLocales, localeDefault } from './i18n'

const isDevelopment = process.env.NODE_ENV === 'development'
const fontFamily = 'Inter'
const secondaryFontFamility = 'Merriweather'

export default defineNuxtConfig({
  /* --- Private/public runtime configs (env. variables) --- */
  runtimeConfig: {
    api: {
      endpoint: '',
    },
  },

  /* --- Nuxt app configs --- */
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5',
      htmlAttrs: {
        lang: localeDefault,
      },
      meta: [
        {
          name: 'robots',
          content: 'noindex, nofollow, noarchive, nosnippet, notranslate',
        },
        {
          name: 'format-detection',
          content: 'telephone=no,date=no,address=no,email=no,url=no',
        },
        {
          name: 'referrer',
          content: 'strict-origin-when-cross-origin',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
          sizes: 'any',
        },
      ],
    },
  },

  css: ['@/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  /* --- List of loaded modules --- */
  modules: [
    '@nuxtjs/eslint-module', // https://github.com/nuxt-modules/eslint
    '@nuxtjs/google-fonts', // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/fontaine', // https://github.com/nuxt-modules/fontaine
    '@nuxtjs/i18n', // https://github.com/nuxt-modules/i18n
    '@vee-validate/nuxt', // https://vee-validate.logaretm.com/v4/integrations/nuxt
    'nuxt-icon', // https://github.com/nuxt-modules/icon
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    'nuxt-security', // https://github.com/baroshem/nuxt-security
    '@nuxt/image',
  ],

  /* --- Additional app configs --- */
  appConfig: {
    isDev: isDevelopment,
    // https://github.com/nuxt-modules/icon#configuration-%EF%B8%8F
    nuxtIcon: {
      size: '1em', // default <Icon> size applied
      class: 'icon', // default <Icon> class applied
    },
  },
  // proxying
  // routeRules: {
  //   '/api/**': {
  //     proxy: {
  //       to: `${process.env.NUXT_API_ENDPOINT}/api/**`,
  //     },
  //   },
  // },

  /* --- Loaded module configs --- */
  // https://github.com/nuxt-modules/eslint#options
  eslint: {
    lintOnStart: false,
    useEslintrc: true,
    failOnError: true,
  },
  // https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      [fontFamily]: [200, 300, 400, 500, 600, 700, 800],
      [secondaryFontFamility]: [200, 300, 400, 500, 600, 700, 800],
    },
  },
  // https://github.com/nuxt-modules/fontaine#usage
  fontMetrics: {
    fonts: [fontFamily, secondaryFontFamility],
  },
  // https://i18n.nuxtjs.org/basic-usage
  i18n: {
    locales: availableLocales,
    lazy: true,
    langDir: 'i18n/locales',
    defaultLocale: localeDefault,
    detectBrowserLanguage: false,
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
  },
  // https://vee-validate.logaretm.com/v4/integrations/nuxt/#configuration
  veeValidate: {
    autoImports: true,
  },
  components: {
    dirs: [
      {
        path: '~/components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  // routes rules

  // https://pinia.vuejs.org/ssr/nuxt.html#auto-imports
  pinia: {},
  // https://nuxt-security.vercel.app/getting-started/configuration

  security: {
    headers: {
      crossOriginResourcePolicy: 'same-origin',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'font-src': ["'self'", 'https:', 'http:', 'data:'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', 'https:', 'http:'],
        'object-src': ["'none'"],
        'script-src': ["'self'", 'https:', 'http:', "'unsafe-inline'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', 'http:', "'unsafe-inline'"],
        'upgrade-insecure-requests': false,
      },
      originAgentCluster: '?1',
      referrerPolicy: 'no-referrer',
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
      },
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'SAMEORIGIN',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '1; mode=block',
      permissionsPolicy: {
        accelerometer: ['()'],
        autoplay: ['()'],
        camera: ['()'],
        'display-capture': ['()'],
        'encrypted-media': ['()'],
        fullscreen: ['()'],
        gamepad: ['()'],
        geolocation: ['()'],
        gyroscope: ['()'],
        microphone: ['()'],
        magnetometer: ['()'],
        midi: ['()'],
        payment: ['()'],
        'picture-in-picture': ['*'],
        'publickey-credentials-get': ['()'],
        'screen-wake-lock': ['()'],
        usb: ['()'],
        'web-share': ['*'],
        'xr-spatial-tracking': ['()'],
      },
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
    },
    rateLimiter: {
      // Twitter search rate limiting
      tokensPerInterval: 150,
      interval: 'hour',
      fireImmediately: true,
    },
    xssValidator: {},
    corsHandler: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      preflight: {
        statusCode: 204,
      },
    },
    allowedMethodsRestricter: '*',
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
  },

  /* --- Run/Build --- */
  ssr: true,
  telemetry: false,
  sourcemap: false,
  typescript: {
    shim: false, // enable takeover mode for better DX
    strict: true, // disable sourcemap so the terminal warnings go away
  },
  build: {
    transpile: ['lodash-es'],
  },
  vite: {
    plugins: [
      compression({
        algorithm: 'gzip',
        exclude: [/\.(br|gz|woff|woff2)$/],
        include: [/\.(json)$/],
        skipIfLargerOrEqual: true,
      }),
      compression({
        algorithm: 'brotliCompress',
        exclude: [/\.(br|gz|woff|woff2)$/],
        include: [/\.(json)$/],
        skipIfLargerOrEqual: true,
      }),
    ],
  },
  nitro: {
    compressPublicAssets: true,
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
})
