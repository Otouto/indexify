'use strict';

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
    }]

  },

  devServer: {
      host: 'localhost',
      port: '3030',
      hot: true
  }
};
