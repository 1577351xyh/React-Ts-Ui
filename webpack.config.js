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
        //scss
        { test: /\.scss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      ]
    },
    ...config,
    devServer: {//开发服务器的配置
      //端口号配置，默认为8080
      port: 3000,
      //进度条
      progress: true,
      stats: {
        // Add asset Information
        assets: false,
        // Sort assets by a field
        // Add information about cached (not built) modules
        cached: false,
        // Add children information
        children: false,
        // Add chunk information (setting this to `false` allows for a less verbose output)
        chunks: false,
        // Add built modules information to chunk information
        chunkModules: false,
        // Add the origins of chunks and chunk merging info
        chunkOrigins: false,
        // Sort the chunks by a field
        // Context directory for request shortening
        // `webpack --colors` equivalent
        colors: true,
        // Add errors
        errors: true,
        // Add details to errors (like resolving log)
        errorDetails: true,
        // Add the hash of the compilation
        hash: false,
        // Add built modules information
        modules: false,
        // Sort the modules by a field
        // Add public path information
        reasons: false,
        // Add the source code of modules
        source: false,
        // Add timing information
        timings: false,
        // Add webpack version information
        version: false,
        // Add warnings
        warnings: true
      }
    },
    resolve: {
      // 后缀
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      // 别名
      alias: {
        stylesheets: path.resolve(__dirname, 'src/stylesheets'),
        examples: path.resolve(__dirname, 'examples'),
        lib: path.resolve(__dirname, 'lib'),
        type: path.resolve(__dirname, 'type'),
        hooks: path.resolve(__dirname, 'hooks')
      },
      // 没有路径时,webpack默认会在这个路径下查找
      modules: [
        path.resolve(__dirname, 'src/stylesheets'), 'node_modules'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React-Ts-Ui',
        template: path.resolve(__dirname, './index.html')
      })
    ]
  }

}