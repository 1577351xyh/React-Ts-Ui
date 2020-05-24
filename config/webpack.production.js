const path = require('path');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

// const { STYLELINT } = require('./index');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.min.js'
  },
  plugins: [
    // ...STYLELINT ? [new StyleLintPlugin({
    //   files: ['**/*.css', '**/*.less', '**/*.html', '**/*.htm', '**/*.vue', '**/*.scss']
    // })] : [],
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../index.html')
    // }),
    // new VueLoaderPlugin(),
  ]
};
