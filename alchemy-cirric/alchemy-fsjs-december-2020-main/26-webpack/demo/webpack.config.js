const HTMLPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: './build.[hash].js'
  },
  plugins: [
    new HTMLPlugin({ template: './src/index.html' })
  ]
}
