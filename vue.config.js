const { defineConfig } = require('@vue/cli-service');
const { ProgressPlugin } = require('webpack');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 3000 // Cambia 3000 al puerto que desees usar
  },
  configureWebpack: {
    plugins: [
      new ProgressPlugin(),
    ],
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tu-repositorio/'  // Cambia 'tu-repositorio' por el nombre real de tu repositorio
    : '/'
});
