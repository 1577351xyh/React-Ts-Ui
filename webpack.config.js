const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env, argv) {
  env = env || {}
  let config = null

  if (env.production) {
    // 线上环境
    config = require('./config/webpack.production');
  } else if (env.development) {
    // 开发环境
    config = require('./config/webpack.development');
  } else {
    //测试环境
    config = require('./config/webpack.test');
  }

  return {
    entry: {
      index: './main.tsx'
    },
    output: {
      path: path.resolve(__dirname, 'dist/lib'),
      // 库名
      library: 'XUI',
      // umd 加载方式 define module script 不同模块定义方式
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/, loader: 'awesome-typescript-loader'
        },
        //less
        { test: /\.scss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      ]
    },
    ...config,
    devServer: {//开发服务器的配置
      //端口号配置，默认为8080
      port: 3000,
      //进度条
      progress: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React-Ts-Ui',
        template: path.resolve(__dirname, './index.html')
      })
    ]
  }

}