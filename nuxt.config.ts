import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'did0es portfolio',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:600i&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:300&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Wire+One&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=swap' }
    ],
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', property: 'description', content: 'portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'portfolio' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://did0es.me' },
      { hid: 'og:title', property: 'og:title', content: 'did0es portfolio' },
      { rel: 'icon', type: 'image/x-icon', href: 'https://s.gravatar.com/avatar/5297a6f1a0d91b1ef43b75b2915a0628?s=80' },
      { hid: 'og:image', property: 'og:image', content: 'https://did0es.me/thumbnail.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff',
    height: '1px'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/styles.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  env: {
    bgImageUrl: process.env.BG_IMAGE_URL || 'http://localhost:3000/bg.png'
  },
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (config.module === undefined) { return }
      config.module.rules.push({
        test: /\.glsl$/,
        use: {
          loader: 'webpack-glsl-loader'
        },
        exclude: /(node_modules)/
      })
    }
  },
  generate: {
    fallback: true
  }
}
export default config

// export default  {
//   mode: 'universal',
//   /*
//   ** Headers of the page
//   */
//   head: {
//     // title: process.env.npm_package_name || '',
//     title: 'did0es portfolio',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'og:site_name', property: 'og:site_name', content: 'portfolio' },
//       { hid: 'og:type', property: 'og:type', content: 'website' },
//       { hid: 'og:url', property: 'og:url', content: 'https://did0es.me' },
//       { hid: 'og:title', property: 'og:title', content: 'did0es portfolio' },
//       { hid: 'og:image', property: 'og:image', content: 'https://did0es.me/thumbnail.png' }
//     ],
//     link: [
//       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap' },
//       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:600i&display=swap' },
//       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:300&display=swap' },
//       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap' },
//       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Wire+One&display=swap' },
//       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=swap' }
//     ]
//   },
//   /*
//   ** Customize the progress-bar color
//   */
//   loading: {
//     color: '#fff',
//     height: '1px'
//   },
//   /*
//   ** Global CSS
//   */
//   css: [
//     { src: '~/assets/css/styles.scss' }
//   ],
//   /*
//   ** Plugins to load before mounting the App
//   */
//   plugins: [
//   ],
//   /*
//   ** Nuxt.js modules
//   */
//   env: {
//     bgImageUrl: process.env.BG_IMAGE_URL || 'http://localhost:3000/bg.png'
//   },
//   modules: [
//     // Doc: https://axios.nuxtjs.org/usage
//     '@nuxtjs/axios',
//     '@nuxtjs/eslint-module'
//   ],
//   /*
//   ** Axios module configuration
//   ** See https://axios.nuxtjs.org/options
//   */
//   axios: {
//   },
//   /*
//   ** Build configuration
//   */
//   build: {
//     /*
//     ** You can extend webpack config here
//     */
//     extend(config, ctx) {
//       config.module.rules.push({
//         test: /\.glsl$/,
//         use: {
//           loader: 'webpack-glsl-loader'
//         },
//         exclude: /(node_modules)/
//       })
//     }
//   },
//   generate: {
//     fallback: true
//   }
// }
