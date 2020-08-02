const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/pdfs/',
            },
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.vue/,
        use: 'vue-loader',
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
