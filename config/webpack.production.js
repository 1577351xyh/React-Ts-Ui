const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const { STYLELINT } = require('./index');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.min.js'
  }
  // module: {
  //   rules: [
  //     //scss
  //     {
  //       test: /\.(sa|sc|c)ss$/,
  //       use: [
  //         MiniCssExtractPlugin.loader,
  //         'css-loader',
  //         'sass-loader'
  //       ],
  //     }
  //   ]
  // },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'css/[name].[hash].css',
  //     chunkFilename: 'css/[id].[hash].css',
  //   })
  // ],
}
