
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'did0es portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'サイト名' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://did0es.me' },
      { hid: 'og:title', property: 'og:title', content: 'did0es portfolio' },
      { hid: 'og:image', property: 'og:image', content: 'https://did0es.me/thumbnail.png' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:600i&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:300&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Wire+One&display=swap' }
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
    { src: '~/assets/css/styles.scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/pixi',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js modules
  */
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
    extend(config, ctx) {
    }
  },
  generate: {
    fallback: true
  }
}
