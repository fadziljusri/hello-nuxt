const webpack = require('webpack');
module.exports = {

    // will change default 'dist' folder to 'docs'
    generate: {
        dir: 'docs'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'Hello Nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Hello world' }
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }
        ]


    },

    css: [
        { src: '~/node_modules/bootstrap/dist/css/bootstrap.min.css' }
    ],
    // script: [
    //     { src: '' }
    // ]


    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        vendor: ['bootstrap'],
        plugins: [
            // set shortcuts as global for bootstrap
            // new webpack.ProvidePlugin({
            //     $: 'jquery',
            //     jQuery: 'jquery',
            //     'window.jQuery': 'jquery'
            // })
        ],
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },


}