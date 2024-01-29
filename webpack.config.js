const path = require('path').resolve

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path(__dirname, '.', 'src', 'index.tsx')
  },
  output: {
    filename: 'bundle.js',
    path: path(__dirname, '.', 'build')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    static: {
      directory: './public',
      watch: true
    },
    port: 3000
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, '.', 'public', 'index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path(__dirname, '.', 'public', 'assets'),
          to: path(__dirname, '.', 'build', 'assets')
        }
      ]
    })
  ]
}
