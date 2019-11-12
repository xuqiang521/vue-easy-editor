const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    proxy: {
      '^/weather': {
        target: 'https://www.apiopen.top',
        pathRewrite: {
          '^/weather': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'src': resolve('src'),
        'views': resolve('src/views'),
        'styles': resolve('src/styles'),
        'components': resolve('src/components'),
        'utils': resolve('src/utils'),
        'assets': resolve('src/assets'),
        'store': resolve('src/store')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        Quill: 'quill/dist/quill.js'
      })
    ]
  }
}
