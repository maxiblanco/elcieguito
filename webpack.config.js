const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dev/scripts',
  ouput: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
