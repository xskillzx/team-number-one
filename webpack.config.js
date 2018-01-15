var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
         test: /\.(jpg|jpeg|gif|png|ico)$/,
         include: SRC_DIR,
         loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
      },
      {
         test: /\.mp3$/,
         loader: 'file',
         query: {
            name: 'static/media/[name].[hash:8].[ext]'
         }
      }
    ]
  }
};