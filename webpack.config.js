var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    main: './source/main/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!autoprefixer!sass!' },
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      React: 'react',
      Router: 'react-router',
      Reflux: 'reflux'
    })
  ]
};