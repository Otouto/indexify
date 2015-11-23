'use strict';

const NODE_ENV = process.env.NODE_ENV || 'dev',
    webpack = require('webpack');

module.exports = {
  context: __dirname + '/frontend',
  entry:  {
    main: './main'
  },
  output:  {
    path:     __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js',
    library: 'indexify'
  },

  devtool: NODE_ENV == 'dev' ? '#cheap-module-inline-source-map' : null,

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js', '.styl']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates:    ['*-loader', '*'],
    extensions:         ['', '.js']
  },

  module: {

    loaders: [{
      test:   /\.js$/,
      exclude: /node_modules/,
      loader: "babel?presets[]=es2015"
    }, {
      // autoprefixer?browsers=last 2 version!
      test:   /\.styl$/,
      loader: 'style!css!stylus?resolve urls'
    }, {
      test:   /\.css/,
      loader: 'style!css'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]?[hash]'
    }, {
      test:   /\.html$/,
      loader: 'file?name=[path][name].[ext]?[hash]'
    }]

  },

  plugins: [],

  devServer: {
      hot: true
  }
};

if (NODE_ENV == 'prod') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}
