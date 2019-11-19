const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config
      .module.rule('js')
      .include.add(resolve('packages')).end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'packages': resolve('packages'),
        'lib': resolve('lib')
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
