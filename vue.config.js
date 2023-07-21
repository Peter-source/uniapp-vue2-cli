module.exports = {
  transpileDependencies: ['uview-ui'],
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL,
        pathRewrite: {
          '^/prefix': ''
        }
      }
    },
  }
}